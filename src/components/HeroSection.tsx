import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  // Reduce parallax intensity on mobile for better performance
  const carY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -100 : -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F2F0E9]">
    {/* Vertical stripes — mask-image fades them to transparent before hitting text */}
    <div className="absolute inset-0 flex justify-center pointer-events-none z-0"
      style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 85%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 85%)' }}
    >
      <div className="relative w-full max-w-7xl h-full">
        <motion.div style={{ opacity }} className="absolute left-1/2 -translate-x-[55px] w-[40px] h-[75%] top-0 bg-[#2B2B2B]" />
        <motion.div style={{ opacity }} className="absolute left-1/2 translate-x-[15px] w-[40px] h-[75%] top-0 bg-[#2B2B2B]" />
      </div>
    </div>

    <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-4 md:px-8">
      <div className="absolute inset-0 -z-10 bg-[#F2F0E9] blur-3xl scale-125 opacity-80" />
      <h1 className="text-[20vw] md:text-[25vw] leading-[0.85] font-normal tracking-tight text-[#1A1A1A] select-none">
        THE BIG SIX
      </h1>
    </motion.div>

    {/* ── plain div: img renders immediately, zero Framer dependency ── */}
    <div
      className="absolute top-[55%] left-1/2 z-20 w-[80vw] md:w-[60vw] max-w-4xl"
      style={{ transform: 'translateX(-50%)' }}
    >
      <img
        src="/hero-image.webp"
        srcSet="/hero-image-400.webp 400w, /hero-image-800.webp 800w, /hero-image.webp 800w"
        alt="Yellow Ford Cortina"
        fetchPriority="high"
        decoding="async"
        width={800}
        height={600}
        sizes="(max-width: 768px) 80vw, 60vw"
        className="w-full h-auto drop-shadow-2xl"
      />
    </div>
    {/* ── motion.div: purely for parallax y-offset, contains nothing visible ── */}
    <motion.div
      style={{ y: carY, x: '-50%' }}
      className="absolute top-[55%] left-1/2 z-20 w-[80vw] md:w-[60vw] max-w-4xl pointer-events-none"
      aria-hidden="true"
    />

    <motion.p style={{ opacity }} className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-30 text-sm md:text-lg tracking-[0.5em] md:tracking-[0.8em] uppercase text-[#1A1A1A] font-medium opacity-80">
      A Restoration Story
    </motion.p>
  </section>;
}