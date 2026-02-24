import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  });
  const yellowFillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return <footer ref={sectionRef} className="relative min-h-[60vh] bg-[#F2F0E9] flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8">
    {/* Vertical stripes grow from bottom - Yellow fills up as scroll nears bottom */}
    <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
      <div className="relative w-full max-w-7xl h-full">
        {/* Grey base stripes */}
        <div className="absolute left-1/2 -translate-x-[55px] w-[40px] h-full bg-[#2B2B2B] opacity-30" />
        <div className="absolute left-1/2 translate-x-[15px] w-[40px] h-full bg-[#2B2B2B] opacity-30" />

        {/* Yellow fill that grows from bottom up - using Cortina Yellow */}
        <motion.div style={{
          height: yellowFillHeight
        }} className="absolute left-1/2 -translate-x-[55px] w-[40px] bottom-0 bg-[#DCB977] origin-bottom z-0" />
        <motion.div style={{
          height: yellowFillHeight
        }} className="absolute left-1/2 translate-x-[15px] w-[40px] bottom-0 bg-[#DCB977] origin-bottom z-0" />
      </div>
    </div>

    <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} viewport={{
      once: true
    }} className="text-center z-10 space-y-8 md:space-y-12">
      {/* Heading with background mask */}
      <div className="relative inline-block">
        <h3 className="text-4xl md:text-7xl font-normal text-[#1A1A1A] tracking-wide relative z-10">
          <div className="absolute inset-0 -z-10 bg-[#F2F0E9] blur-3xl scale-150 opacity-90" />
          Built, not bought.
        </h3>
      </div>

      {/* Mobile-optimized CTA button with larger touch target */}
      <a
        href="tel:0829267384"
        className="inline-flex items-center justify-center text-lg md:text-2xl text-[#1A1A1A] border-2 border-[#1A1A1A] bg-[#DCB977] px-8 md:px-12 py-4 md:py-4 min-h-[48px] hover:bg-[#1A1A1A] hover:text-[#F2F0E9] active:scale-95 transition-all duration-300 tracking-wider uppercase font-medium touch-manipulation"
      >
        Get in Touch
      </a>

      {/* Contact info with background mask */}
      <div className="pt-8 md:pt-12 space-y-2 relative inline-block">
        <div className="relative z-10">
          <div className="absolute inset-0 -z-10 bg-[#F2F0E9] blur-3xl scale-125 opacity-90" />
          <p className="text-base md:text-lg text-[#1A1A1A]/70">
            JT Nesenberend
          </p>
          <p className="text-sm md:text-base text-[#1A1A1A]/50 tracking-widest uppercase">
            © 2024 The Big Six. All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  </footer>;
}