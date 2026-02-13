import { motion } from 'framer-motion';
const specs = [{
  label: 'Engine',
  value: '2.5 V6'
}, {
  label: 'Interior',
  value: 'Factory Original'
}, {
  label: 'Status',
  value: 'Matching Numbers'
}, {
  label: 'Ownership',
  value: '2nd Owner'
}];
export function SpecsSection() {
  return <section className="relative min-h-screen bg-[#1A1A1A] text-[#F2F0E9] flex items-center justify-center py-24 px-8">
    <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
      <motion.div initial={{
        opacity: 0,
        x: -50
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="flex items-center justify-center">
        <h2 className="text-[20vw] md:text-[15vw] leading-none font-normal text-[#F2F0E9]/10">
          324
        </h2>
      </motion.div>

      <motion.div initial={{
        opacity: 0,
        x: 50
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="space-y-8">
        <h3 className="text-5xl md:text-7xl font-normal mb-12 text-[#DCB977]">
          The Survivor
        </h3>

        <div className="space-y-6">
          {specs.map((spec, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="flex justify-between items-baseline gap-4 border-b border-[#F2F0E9]/20 pb-4">
            <span className="text-lg md:text-xl text-[#F2F0E9]/60 uppercase tracking-wider">
              {spec.label}
            </span>
            <span className="text-2xl md:text-3xl font-normal text-right whitespace-nowrap flex-shrink-0">
              {spec.value}
            </span>
          </motion.div>)}
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-[#F2F0E9]/70 mt-12 italic">
          "I want to express my deepest gratitude to Aunt Rosenstrauch for
          holding onto the car all those years."
        </p>
      </motion.div>
    </div>
  </section>;
}