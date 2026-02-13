import { motion } from 'framer-motion';
interface ProcessStage {
  number: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
}
const stages: ProcessStage[] = [{
  number: '01',
  title: 'Disassembly',
  duration: '6 months',
  description: 'Every component catalogued, photographed, and carefully stored. The car reduced to its bare shell.',
  details: ['Complete mechanical teardown', 'Body panel removal and documentation', 'Parts cleaning and assessment', 'Creation of restoration roadmap']
}, {
  number: '02',
  title: 'Metalwork',
  duration: '18 months',
  description: 'Panel beating, welding, and fabrication. Returning the body to factory specifications using traditional techniques.',
  details: ['Rust removal and structural repair', 'Panel alignment and fitment', 'Custom fabrication of unavailable parts', 'Lead loading and traditional finishing']
}, {
  number: '03',
  title: 'Mechanical Rebuild',
  duration: '12 months',
  description: 'The heart of the car. Engine, transmission, suspension, and brakes rebuilt to exceed original specifications.',
  details: ['Engine block machining and rebuild', 'Suspension geometry correction', 'Brake system upgrade to dual circuit', 'Electrical system rewiring']
}, {
  number: '04',
  title: 'Paint & Assembly',
  duration: '8 months',
  description: 'The transformation. Cortina Yellow applied in multiple stages, followed by meticulous reassembly.',
  details: ['Epoxy primer and block sanding', 'Period-correct Cortina Yellow application', 'Clear coat and wet sanding', 'Final assembly and adjustment']
}];
export function ProcessSection() {
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
          The Process
        </h2>
        <p className="text-xl md:text-2xl text-[#1A1A1A]/60 max-w-3xl">
          44 months. 3,200 hours. One obsession.
        </p>
      </motion.div>

      <div className="space-y-24">
        {stages.map((stage, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 60
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            <span className="text-8xl md:text-9xl font-normal text-[#1A1A1A]/10">
              {stage.number}
            </span>
          </div>

          <div className="md:col-span-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-6">
              <h3 className="text-4xl md:text-5xl font-normal text-[#1A1A1A]">
                {stage.title}
              </h3>
              <span className="text-lg text-[#FFD700] uppercase tracking-wider">
                {stage.duration}
              </span>
            </div>

            <p className="text-xl md:text-2xl text-[#1A1A1A]/80 leading-relaxed">
              {stage.description}
            </p>

            <ul className="grid md:grid-cols-2 gap-4 mt-8">
              {stage.details.map((detail, detailIndex) => <li key={detailIndex} className="flex items-start gap-3 text-base md:text-lg text-[#1A1A1A]/70">
                <span className="text-[#FFD700] mt-1">—</span>
                <span>{detail}</span>
              </li>)}
            </ul>

            {index < stages.length - 1 && <div className="w-full h-[1px] bg-[#1A1A1A]/10 mt-12" />}
          </div>
        </motion.div>)}
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
      }} className="mt-32 text-center">
        <p className="text-3xl md:text-5xl font-normal text-[#1A1A1A] italic">
          "The work is never truly finished. A car like this is a living
          thing."
        </p>
      </motion.div>
    </div>
  </section>;
}