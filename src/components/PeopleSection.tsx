import { motion } from 'framer-motion';
interface Person {
  name: string;
  role: string;
  quote: string;
  contribution: string;
  imageUrl: string;
}
const people: Person[] = [{
  name: 'James Mitchell',
  role: 'Owner & Restorer',
  quote: 'Every bolt tells a story. Every panel holds a memory.',
  contribution: 'Led the 25-year restoration journey from barn find to finished car',
  imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
}, {
  name: 'Arthur Davies',
  role: 'Master Panel Beater',
  quote: 'The metal remembers its shape. You just have to remind it.',
  contribution: 'Restored all body panels using traditional English wheel techniques',
  imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80'
}, {
  name: 'Sarah Chen',
  role: 'Paint Specialist',
  quote: "Cortina Yellow isn't just a color. It's an attitude.",
  contribution: 'Mixed and applied the period-correct Cortina Yellow finish',
  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80'
}];
export function PeopleSection() {
  return <section className="relative min-h-screen bg-[#1A1A1A] py-32 px-8">
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
      }} className="mb-24 text-center">
        <h2 className="text-6xl md:text-8xl font-normal text-[#F2F0E9] mb-8">
          The People
        </h2>
        <p className="text-xl md:text-2xl text-[#F2F0E9]/60 max-w-3xl mx-auto">
          A restoration of this magnitude is never a solo endeavor. These are
          the craftspeople who brought The Big Six back to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        {people.map((person, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 60
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} className="group">
          <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 shadow-2xl">
            <img src={person.imageUrl} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-normal text-[#F2F0E9] mb-2">
                {person.name}
              </h3>
              <p className="text-lg text-[#FFD700] uppercase tracking-wider">
                {person.role}
              </p>
            </div>

            <blockquote className="text-xl italic text-[#F2F0E9]/80 border-l-2 border-[#FFD700] pl-4 py-2">
              "{person.quote}"
            </blockquote>

            <p className="text-base text-[#F2F0E9]/60 leading-relaxed">
              {person.contribution}
            </p>
          </div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}