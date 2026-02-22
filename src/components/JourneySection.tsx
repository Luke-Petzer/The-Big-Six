import { motion } from 'framer-motion';
export function JourneySection() {
  return <section className="relative min-h-screen bg-[#F2F0E9] py-32 px-8">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="mb-24">
        <h2 className="text-6xl md:text-8xl font-normal text-[#1A1A1A] mb-8">
          The Journey
        </h2>
        <div className="w-24 h-1 bg-[#FFD700]" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
        <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="space-y-6 text-lg md:text-xl leading-relaxed text-[#1A1A1A]/80">
          <p className="first-letter:text-7xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#1A1A1A]">
            Every restoration begins with a moment of recognition. That split
            second when you see past the rust, the decay, the years of
            neglect—and glimpse what once was, and what could be again.
          </p>
          <p>
            The Big Six was found in a barn in rural England, buried under
            decades of dust and forgotten dreams. The Cortina Yellow paint had
            faded to a dull mustard, the chrome was pitted, and the interior
            smelled of mildew and time. But the bones were good. The Essex
            engine, though seized, was complete. The body panels,
            miraculously, were mostly rust-free.
          </p>
          <p>
            What followed was not a restoration—it was an obsession.
            Twenty-five years of weekends, late nights, and early mornings. Of
            learning skills that had nearly died with the generation that
            built these cars. Of hunting parts across three continents and
            making friends in the most unlikely places.
          </p>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="space-y-8">
          <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80" alt="Barn find" loading="lazy" decoding="async" width={800} height={1067} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover grayscale" />
          </div>
          <p className="text-sm md:text-base italic text-[#1A1A1A]/60 text-center">
            "As found" condition, 1998. The beginning of a 25-year journey.
          </p>
        </motion.div>
      </div>

      <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="border-l-4 border-[#FFD700] pl-8 py-4">
        <blockquote className="text-2xl md:text-4xl font-normal text-[#1A1A1A] leading-relaxed italic">
          "A car is never just metal and glass. It's a time capsule, a story,
          a piece of someone's life. To restore it is to honor that story."
        </blockquote>
        <p className="text-lg text-[#1A1A1A]/60 mt-6">
          — Workshop journal, March 2001
        </p>
      </motion.div>
    </div>
  </section>;
}