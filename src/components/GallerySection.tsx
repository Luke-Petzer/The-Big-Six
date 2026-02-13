import { motion } from 'framer-motion';

const images = [
  { url: '/1.webp', alt: 'Cortina detail 1', size: 'large' },
  { url: '/2.webp', alt: 'Cortina detail 2', size: 'small' },
  { url: '/3.webp', alt: 'Cortina detail 3', size: 'medium' },
  { url: '/4.webp', alt: 'Cortina detail 4', size: 'large' },
  { url: '/5.webp', alt: 'Cortina detail 5', size: 'medium' },
  { url: '/6.webp', alt: 'Cortina detail 6', size: 'small' },
  { url: '/7.webp', alt: 'Cortina detail 7', size: 'large' },
  { url: '/8.webp', alt: 'Cortina detail 8', size: 'small' },
  { url: '/9.webp', alt: 'Cortina detail 9', size: 'medium' },
  { url: '/10.webp', alt: 'Cortina detail 10', size: 'large' },
  { url: '/11.webp', alt: 'Cortina detail 11', size: 'medium' },
  { url: '/12.webp', alt: 'Cortina detail 12', size: 'small' },
  { url: '/13.webp', alt: 'Cortina detail 13', size: 'large' },
  { url: '/14.webp', alt: 'Cortina detail 14', size: 'small' },
  { url: '/15.webp', alt: 'Cortina detail 15', size: 'medium' },
];

export function GallerySection() {
  return (
    <section className="relative min-h-screen bg-[#F2F0E9] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-normal text-center mb-24 text-[#1A1A1A]"
        >
          The Details
        </motion.h2>

        <div className="space-y-24">
          {images.map((image, index) => {
            const isEven = index % 2 === 0;
            const sizeClasses = {
              large: 'w-full md:w-4/5',
              medium: 'w-full md:w-3/5',
              small: 'w-full md:w-2/5'
            };
            // Load first 6 images eagerly, rest lazy to prevent scroll lag
            const loadingStrategy = index < 6 ? 'eager' : 'lazy';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: '100px' }}
                className={`${sizeClasses[image.size as keyof typeof sizeClasses]} ${isEven ? 'ml-0 md:ml-0' : 'ml-0 md:ml-auto'}`}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={loadingStrategy}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}