import Image from 'next/image';

interface ServiceSection {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface ServiceDetailDualProps {
  mainTitle: string;
  sections: [ServiceSection, ServiceSection];
}

export default function ServiceDetailDual({
  mainTitle,
  sections,
}: ServiceDetailDualProps) {
  return (
    <main className='pt-20'>
      {/* Main Title */}
      <div className='container mx-auto px-4 py-12'>
        <h1 className='text-4xl md:text-5xl font-light text-gray-800 text-center mb-16'>
          {mainTitle}
        </h1>
      </div>

      {/* Section 1 */}
      <section className='bg-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            {/* Text Content */}
            <div className='space-y-6'>
              <h2 className='text-3xl md:text-4xl font-light text-gray-800'>
                {sections[0].title}
              </h2>
              <p className='text-gray-600 leading-relaxed text-lg'>
                {sections[0].description}
              </p>
            </div>

            {/* Image */}
            <div className='relative h-[400px] rounded-lg overflow-hidden shadow-lg'>
              <Image
                src={sections[0].image}
                alt={sections[0].imageAlt}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className='bg-gray-50 py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            {/* Image (on left for alternating layout) */}
            <div className='relative h-[400px] rounded-lg overflow-hidden shadow-lg order-2 md:order-1'>
              <Image
                src={sections[1].image}
                alt={sections[1].imageAlt}
                fill
                className='object-cover'
              />
            </div>

            {/* Text Content */}
            <div className='space-y-6 order-1 md:order-2'>
              <h2 className='text-3xl md:text-4xl font-light text-gray-800'>
                {sections[1].title}
              </h2>
              <p className='text-gray-600 leading-relaxed text-lg'>
                {sections[1].description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
