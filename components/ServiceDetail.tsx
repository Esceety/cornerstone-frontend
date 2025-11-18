import React from 'react';
import Image from 'next/image';

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  programList?: string[];
}

export default function ServiceDetail({
  title,
  description,
  imageAlt,
  image,
  programList = [],
}: ServiceDetailProps) {
  return (
    <section className='relative py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50'>
      {/* Decorative Elements */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
      <div className='absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Hero Image Section */}
        <div className='relative mb-16 rounded-3xl overflow-hidden shadow-2xl'>
          <div className='relative h-[400px] md:h-[500px] lg:h-[600px] w-full'>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className='object-cover'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px'
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>

            {/* Title Overlay */}
            <div className='absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg'>
                {title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
          {/* Main Description - Takes 2 columns on large screens */}
          <div className='lg:col-span-2'>
            <div className='prose prose-lg max-w-none'>
              {/* Split description by paragraphs */}
              {description.split('\n').map((paragraph, index) => {
                if (!paragraph.trim()) return null;

                return (
                  <p
                    key={index}
                    className='text-gray-700 leading-relaxed mb-6 text-lg'
                  >
                    {paragraph.trim()}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Program List Sidebar - Takes 1 column on large screens */}
          {programList && programList.length > 0 && (
            <div className='lg:col-span-1'>
              <div className='sticky top-8 bg-white rounded-2xl shadow-lg p-8 border border-purple-100'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-purple-500'>
                  Our Programs
                </h3>
                <ul className='space-y-4'>
                  {programList.map((program, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full mt-2 mr-3'></div>
                      <span className='text-gray-700 leading-relaxed'>
                        {program}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Call to Action */}
                <div className='mt-8 pt-8 border-t border-gray-200'>
                  <p className='text-sm text-gray-600 mb-4'>
                    Interested in learning more about these programs?
                  </p>
                  <a
                    href='/contact'
                    className='block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5'
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Features Section */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300'>
            <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center mb-4'>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-3'>
              Empowering Youth
            </h4>
            <p className='text-gray-600'>
              Building confidence and skills that last a lifetime through
              comprehensive programs.
            </p>
          </div>

          <div className='bg-white rounded-xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300'>
            <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center mb-4'>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-3'>
              Community Focus
            </h4>
            <p className='text-gray-600'>
              Creating positive change through community engagement and support
              networks.
            </p>
          </div>

          <div className='bg-white rounded-xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300'>
            <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center mb-4'>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                />
              </svg>
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-3'>
              Proven Results
            </h4>
            <p className='text-gray-600'>
              Evidence-based approaches that deliver measurable outcomes for
              participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
