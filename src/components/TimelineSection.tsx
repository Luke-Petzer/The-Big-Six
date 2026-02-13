import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
interface TimelineSlide {
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
  side: 'left' | 'right';
}
const slides: TimelineSlide[] = [{
  year: '2013',
  title: 'The Promise',
  description: "It started on an Easter weekend camping trip in Onrus. Tucked away in an uncle's garage sat the Cortina. It wasn't for sale, but a promise was made: 'If you ever decide to sell, I'd love to buy it.' Life moved on, but the memory of the car remained.",
  imageUrl: '/the-promise.webp',
  side: 'left'
}, {
  year: '2019',
  title: 'The Call',
  description: "Seven years of silence. The uncle had passed away. Then, a call from his daughter: 'Are you still interested?' After a brief hesitation from the family, the decision was finally made six months later. The car was ready to leave its home of many years.",
  imageUrl: '/the-call.webp',
  side: 'right'
}, {
  year: '',
  title: 'The Awakening',
  description: "It hadn't run in five years. Aunt Rosenstrauch warned it wouldn't start. But with a new battery, fresh spark plugs, and fuel in the carburetor, the engine roared to life. It smoked a bit—worn valve stem seals—but the soul of the machine was intact.",
  imageUrl: '/hero-image.webp',
  side: 'left'
}, {
  year: '2024',
  title: 'Father & Son',
  description: 'After sitting for two more years, the real work began. Structurally sound but tired. By December 2024, working alongside my son, the project was complete. A second-owner classic, restored to glory, keeping the original roof and interior as a tribute to its history.',
  imageUrl: '/Father-son.webp',
  side: 'right'
}];
export function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const yellowFillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return <section ref={sectionRef} className="relative bg-[#F2F0E9] py-24 md:py-32 px-4 md:px-8">
    {/* The Vertical Road - Dual Stripes with Yellow Fill */}
    <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
      <div className="relative w-full max-w-7xl h-full">
        {/* Grey base stripes - Closer together like reference */}
        <div className="absolute left-1/2 -translate-x-[55px] w-[40px] h-full bg-[#2B2B2B]" />
        <div className="absolute left-1/2 translate-x-[15px] w-[40px] h-full bg-[#2B2B2B]" />

        {/* Yellow fill that grows with scroll - using Cortina Yellow */}
        <motion.div style={{
          height: yellowFillHeight
        }} className="absolute left-1/2 -translate-x-[55px] w-[40px] top-0 bg-[#DCB977] origin-top z-0" />
        <motion.div style={{
          height: yellowFillHeight
        }} className="absolute left-1/2 translate-x-[15px] w-[40px] top-0 bg-[#DCB977] origin-top z-0" />
      </div>
    </div>

    {/* Timeline Content - Zig-Zag Layout with Safety Gap */}
    <div className="relative max-w-7xl mx-auto space-y-24 md:space-y-48 z-10">
      {slides.map((slide, index) => <TimelineEntry key={index} slide={slide} />)}
    </div>
  </section>;
}
interface TimelineEntryProps {
  slide: TimelineSlide;
}
function TimelineEntry({
  slide
}: TimelineEntryProps) {
  const entryRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const {
    scrollYProgress
  } = useScroll({
    target: entryRef,
    offset: ['start end', 'end start']
  });

  // Reduced parallax on mobile
  const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? [50, -50] : [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], isMobile ? [25, -25] : [50, -50]);
  const isImageLeft = slide.side === 'left';
  return <motion.div ref={entryRef} className="relative grid md:grid-cols-2 gap-12 md:gap-24 items-center">
    {/* Image */}
    <motion.div style={{
      y: imageY
    }} className={`${isImageLeft ? 'md:order-1' : 'md:order-2'} order-1 will-change-transform`}>
      <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
        <img
          src={slide.imageUrl}
          alt={slide.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </motion.div>

    {/* Text Content with Background Mask */}
    <motion.div style={{
      y: textY
    }} className={`${isImageLeft ? 'md:order-2 md:text-left md:pl-12' : 'md:order-1 md:text-right md:pr-12'} order-2 space-y-4 md:space-y-6 will-change-transform`}>
      {/* Year - Floating text with background mask (only if year exists) */}
      {slide.year && <div className="relative inline-block">
        <motion.p initial={{
          opacity: 0,
          x: isImageLeft ? 30 : -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="text-5xl md:text-8xl font-normal text-[#1A1A1A] bg-[#F2F0E9] px-4 py-2 relative z-10 backdrop-blur-sm" style={{
          boxShadow: '0 0 20px 20px rgba(242, 240, 233, 0.9)'
        }}>
          {slide.year}
        </motion.p>
      </div>}

      {/* Title - Floating text with background mask */}
      <div className="relative inline-block">
        <motion.h2 initial={{
          opacity: 0,
          x: isImageLeft ? 30 : -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="text-4xl md:text-7xl font-normal text-[#1A1A1A] bg-[#F2F0E9] px-4 py-2 relative z-10 backdrop-blur-sm" style={{
          boxShadow: '0 0 20px 20px rgba(242, 240, 233, 0.9)'
        }}>
          {slide.title}
        </motion.h2>
      </div>

      {/* Description - Floating text with background mask */}
      <div className="relative inline-block max-w-lg">
        <motion.p initial={{
          opacity: 0,
          x: isImageLeft ? 30 : -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="text-lg md:text-2xl leading-relaxed text-[#1A1A1A]/80 bg-[#F2F0E9] px-4 py-2 relative z-10 backdrop-blur-sm" style={{
          boxShadow: '0 0 20px 20px rgba(242, 240, 233, 0.9)'
        }}>
          {slide.description}
        </motion.p>
      </div>

      {/* Mile marker dot on the stripe - positioned ON the center line between columns */}

    </motion.div>
  </motion.div>;
}