import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'All Programs and Services | Cornerstone Deliverance Ministries',
  description:
    'Explore all programs and services offered by Cornerstone Deliverance Ministries including youth athletics, family support, housing, mental health, and more.',
  keywords:
    'programs, services, youth programs, family services, housing, mental health, community development, nonprofit services',
  openGraph: {
    title: 'All Programs and Services',
    description:
      'Comprehensive programs and services empowering communities and transforming lives.',
    type: 'website',
  },
};

const programs = [
  {
    title: 'Youth Athletics & Enrichment',
    description: 'Empowering youth through sports and arts',
    icon: '🏃',
    link: '/programs-and-services/youth-athletics',
  },
  {
    title: 'Family Strengthening & Stabilization',
    description: 'Supporting and empowering families',
    icon: '👨‍👩‍👧‍👦',
    link: '/programs-and-services/family-strengthening-stabilization',
  },
  {
    title: 'Behavioral, Emotional, & Mental Health',
    description: 'Comprehensive mental health support',
    icon: '🧠',
    link: '/programs-and-services/behavioral-emotional-mental-health',
  },
  {
    title: 'Housing Development & Security',
    description: 'Affordable housing solutions',
    icon: '🏠',
    link: '/programs-and-services/housing-development-security',
  },
  {
    title: 'Transportation & Logistics',
    description: 'Brokerage and transportation services',
    icon: '🚚',
    link: '/programs-and-services/transportation-logistics',
  },
  {
    title: 'Community & Neighborhood Revitalization',
    description: 'Transforming local communities',
    icon: '🌆',
    link: '/programs-and-services/community-neighborhood-revitalization',
  },
  {
    title: 'Nonprofit & Economic Development',
    description: 'Empowering nonprofit organizations',
    icon: '💼',
    link: '/programs-and-services/nonprofit-economic-development-entrepreneurship',
  },
  {
    title: 'Feeding Our Communities',
    description: 'Combating food insecurity',
    icon: '🍽️',
    link: '/programs-and-services/feeding-our-communities',
  },
  {
    title: 'Employability Skills & Job Training',
    description: 'Workforce development programs',
    icon: '📚',
    link: '/programs-and-services/employability-skills-job-training',
  },
  {
    title: 'End-of-Life Farewell & Remembrance',
    description: 'Compassionate funeral services',
    icon: '🕊️',
    link: '/programs-and-services/end-of-life-farewell-dignified-remembrance',
  },
];

export default function AllProgramsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Navigation currentPage='programs' />

      <main className='pt-20'>
        {/* Header */}
        <div className='bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16'>
          <div className='container mx-auto px-4 text-center'>
            <h1 className='text-4xl md:text-5xl font-light mb-4'>
              Our Programs & Services
            </h1>
            <p className='text-xl md:text-2xl font-light opacity-90'>
              Empowering Communities, Transforming Lives
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {programs.map((program, index) => (
                <Link
                  key={index}
                  href={program.link}
                  className='group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-500'
                >
                  <div className='p-8'>
                    <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                      {program.icon}
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors'>
                      {program.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {program.description}
                    </p>
                    <div className='mt-4 flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300'>
                      Learn More
                      <svg
                        className='w-5 h-5 ml-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className='bg-gray-50 py-16'>
          <div className='container mx-auto px-4 max-w-4xl text-center'>
            <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-6'>
              Our Commitment
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Cornerstone Deliverance & Development Ministries for Christ, Inc.
              is dedicated to building stronger communities through
              comprehensive programs and services that address the diverse needs
              of individuals and families. From youth development to senior
              care, we provide holistic support that transforms lives and
              creates lasting positive impact.
            </p>
          </div>
        </section>
      </main>

      <CTASection
        title='Ready to work with us?'
        subtitle='Start working with us today and get a wonderful experience'
        buttonText='CONTACT US'
        buttonLink='/contact'
      />

      <Footer />
    </div>
  );
}
