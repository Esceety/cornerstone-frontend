import Image from 'next/image';
import Link from 'next/link';
import { TeamGrid } from '@/components/TeamGrid';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import teamContent from '@/content/team-content.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Cornerstone Deliverance & Development Ministries for Christ, Inc. - Building Community, Restoring Hope Through Faith and Affordable Housing. Serving families, youth, and communities in Florida and Georgia.',
  openGraph: {
    title: 'Cornerstone Deliverance & Development Ministries',
    description: 'Building Community, Restoring Hope—Through Faith and Affordable Housing',
    images: ['/images/cornerstone/hero/hero1.jpg'],
  },
};

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navigation currentPage='home' />

      {/* Hero Section */}
      <section className='relative h-[700px] mt-20'>
        <Image
          src='/images/cornerstone/hero/hero1.jpg'
          alt='Community'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4'>
          <div className='max-w-5xl text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              Cornerstone Deliverance & Development Ministries
              <br />
              for Christ, Inc.
            </h1>
            <div className='w-24 h-1 bg-orange-500 mx-auto mb-6'></div>
            <p className='text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed'>
              "Building Community, Restoring Hope—Through Faith and Affordable
              Housing"
            </p>
          </div>
        </div>
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          <div className='w-2 h-2 bg-white rounded-full'></div>
          <div className='w-2 h-2 bg-white/50 rounded-full'></div>
          <div className='w-2 h-2 bg-white/50 rounded-full'></div>
        </div>
      </section>

      {/* Program Cards Section */}
      <section className='bg-gray-900 py-0'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-0'>
            <div className='bg-gradient-to-br from-orange-500 to-orange-600 p-12 text-white'>
              <h3 className='text-3xl font-bold'>Affordable Housing</h3>
            </div>
            <div className='bg-gradient-to-br from-teal-400 to-teal-500 p-12 text-white'>
              <h3 className='text-3xl font-bold'>Family</h3>
            </div>
            <div className='bg-gradient-to-br from-purple-600 to-purple-700 p-12 text-white'>
              <h3 className='text-3xl font-bold'>Community</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Highlight Cards */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Who We Serve */}
            <div className='bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl mb-6 shadow-lg'>
                <svg
                  className='w-8 h-8 text-white'
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
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Who We Serve
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                Low-income families/individuals; seniors; veterans;
                reentry/recovery; those facing housing instability.
              </p>
            </div>

            {/* Impact Snapshot */}
            <div className='bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl mb-6 shadow-lg'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Impact Snapshot
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                Founded in Florida; expanding into Georgia. 25 acres acquired;
                $400k invested; $305k needed; 20 homes in Phase I; 100 homes by
                Year 5.
              </p>
            </div>

            {/* Partners & Accountability */}
            <div className='bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl mb-6 shadow-lg'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Partners & Accountability
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                USDA Rural Development, HUD Faith-Based Initiatives, SBA, GA &
                FL housing coalitions, local ministries/builders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-7xl mx-auto'>
            {/* Header */}
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Who We Are
              </h2>
              <div className='w-24 h-1 bg-orange-500 mx-auto mb-6'></div>
            </div>

            {/* Main Content Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16'>
              <div>
                <div className='bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-2xl shadow-xl mb-8'>
                  <h3 className='text-3xl font-bold mb-4'>
                    Our Primary Focus: Faith-Based Affordable Housing
                  </h3>
                  <p className='text-lg leading-relaxed'>
                    Cornerstone is a 501(c)(3) founded in Florida and expanding
                    into Georgia to provide safe, affordable, faith-centered
                    housing.
                  </p>
                </div>

                <div className='space-y-6'>
                  <div>
                    <h4 className='text-2xl font-bold text-gray-900 mb-3'>
                      Article II – Purpose and Mission Expansion
                    </h4>
                    <p className='text-gray-700 leading-relaxed'>
                      Operating exclusively for charitable, religious, and
                      educational purposes under Section 501(c)(3). Expansion
                      integrates housing and future support services.
                    </p>
                  </div>

                  <div>
                    <h4 className='text-2xl font-bold text-gray-900 mb-3'>
                      Faith-Based Housing Initiatives
                    </h4>
                    <ul className='space-y-3'>
                      <li className='flex items-start space-x-3'>
                        <span className='text-orange-500 text-xl'>•</span>
                        <span className='text-gray-700'>
                          Acquire, develop, and manage affordable housing.
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <span className='text-orange-500 text-xl'>•</span>
                        <span className='text-gray-700'>
                          Rehabilitate properties for safe, modern,
                          faith-centered communities.
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <span className='text-orange-500 text-xl'>•</span>
                        <span className='text-gray-700'>
                          Operate emergency, transitional, and supportive
                          housing.
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <span className='text-orange-500 text-xl'>•</span>
                        <span className='text-gray-700'>
                          Collaborate with partners for sustainable growth.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='space-y-8'>
                <div className='bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-2xl shadow-xl'>
                  <h4 className='text-2xl font-bold mb-4'>
                    Featured: Jack & Jimmies Affordable Housing
                  </h4>
                  <p className='text-lg leading-relaxed mb-4'>
                    <strong>Phase I</strong> (Toombs & Screven Counties, GA): 25
                    acres acquired; 20 tiny homes planned; goal of 100 homes in
                    five years.
                  </p>
                  <div className='grid grid-cols-2 gap-4 mt-6'>
                    <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center'>
                      <div className='text-3xl font-bold'>25</div>
                      <div className='text-sm'>Acres Acquired</div>
                    </div>
                    <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center'>
                      <div className='text-3xl font-bold'>20</div>
                      <div className='text-sm'>Homes Phase I</div>
                    </div>
                    <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center'>
                      <div className='text-3xl font-bold'>100</div>
                      <div className='text-sm'>Homes by Year 5</div>
                    </div>
                    <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center'>
                      <div className='text-3xl font-bold'>$305k</div>
                      <div className='text-sm'>Funding Needed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community & Economic Development */}
            <div className='bg-gradient-to-br from-teal-500 to-teal-700 text-white p-10 rounded-2xl shadow-xl'>
              <h3 className='text-3xl font-bold mb-4'>
                Community & Economic Development
              </h3>
              <p className='text-lg leading-relaxed'>
                Job readiness, small-business mentorship, financial literacy,
                and faith-based mentoring are in development to accompany
                housing initiatives, creating holistic community transformation.
              </p>
            </div>

            {/* Our Foundation - Education & Information Resource Center */}
            <div className='mt-16 border-t-2 border-gray-200 pt-16'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                    Our Foundation: Education & Information Resource Center
                  </h3>
                  <div className='w-16 h-1 bg-orange-500 mb-6'></div>
                  <p className='text-gray-700 mb-4 leading-relaxed'>
                    Since 2000, Cornerstone Deliverance & Development Ministries
                    for Christ, Inc (CDDMC) has served as a Florida Non-Profit
                    501c3 organization providing holistic, spiritual-based
                    educational and artistic programs designed to mold
                    individuals into morally responsible citizens in body, mind,
                    and spirit.
                  </p>
                  <p className='text-gray-700 mb-6 leading-relaxed'>
                    CDDMC creates a forum that effectively provides an avenue
                    for exploring, developing, and harnessing the potentials
                    within our youth, families, and communities through
                    collaborative problem-solving initiatives.
                  </p>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span className='text-gray-700 font-semibold'>
                        Dependability
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span className='text-gray-700 font-semibold'>
                        Commitment
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span className='text-gray-700 font-semibold'>
                        Consistency
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span className='text-gray-700 font-semibold'>
                        Integrity
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span className='text-gray-700 font-semibold'>
                        Efficiency
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span className='text-gray-700 font-semibold'>
                        Reliability
                      </span>
                    </div>
                  </div>
                </div>
                <div className='relative h-[400px] rounded-2xl overflow-hidden shadow-xl'>
                  <Image
                    src='/images/cornerstone/hero/hero2.jpg'
                    alt='Education'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            <div className='relative h-[400px] order-2 lg:order-1'>
              <Image
                src='/images/cornerstone/hero/hero3.jpg'
                alt='Programs'
                fill
                className='object-cover rounded-lg shadow-xl'
              />
              <div className='absolute bottom-4 left-4'>
                <button className='bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors font-semibold'>
                  MORE PROGRAMS →
                </button>
              </div>
            </div>
            <div className='order-1 lg:order-2'>
              <div className='bg-gray-800 text-white p-8 rounded-lg mb-8'>
                <p className='text-sm mb-2'>Programs</p>
                <h2 className='text-2xl font-serif'>
                  How would you describe your life right now?
                </h2>
              </div>

              <div className='space-y-6'>
                <div>
                  <div className='flex items-start space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-purple-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 mb-2'>
                        Community Mental Health
                      </h3>
                      <p className='text-gray-700 text-sm'>
                        Cornerstone Community Mental Health Services is designed
                        to provide a positive, essential learning environment
                        where each child is challenged in mastering academic
                        progress and social skills, talents,
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex items-start space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-purple-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 mb-2'>
                        Youth Empowerment & Performing Arts
                      </h3>
                      <p className='text-gray-700 text-sm'>
                        Cornerstone Youth Empowerment & Performing Arts is
                        designed to provide a positive, essential learning
                        environment where each child is challenged to progress
                        through academic mastery and social skills.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex items-start space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-orange-600'
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
                    <div>
                      <h3 className='font-bold text-gray-900 mb-2'>
                        Non-Profit Develoment
                      </h3>
                      <p className='text-gray-700 text-sm'>
                        Cornerstone Non-Profit Development Agency, established
                        in January 1, 2002, is Cornerstone&apos;s non-profit
                        development agency dedicated to develop, organize, and
                        invigorate neighborhoods.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex items-start space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-purple-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 mb-2'>
                        A.J. Jones Funeral
                      </h3>
                      <p className='text-gray-700 text-sm'>
                        A.J. Jones Funeral Services & Cremations provides
                        families with well-planned funeral arrangements in their
                        time of need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Profit Development Banner */}
      <section className='bg-gradient-to-r from-teal-300 to-teal-400 py-24'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-gray-700 text-sm mb-2 tracking-wider'>
            LET US SERVE YOU
          </p>
          <h2 className='text-5xl font-serif'>
            Cornerstone is{' '}
            <span className='text-orange-500'>NON PROFIT DEVELOPMENT</span>
          </h2>
        </div>
      </section>

      {/* People that holds us */}
      <TeamGrid
        title={teamContent.team.title}
        subtitle={teamContent.team.subtitle}
        members={teamContent.team.members}
        columns={4}
        variant='dark'
      />
      {/* About Us CTA */}
      <section className='py-16 border-t-4 border-b-4 border-teal-400 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <h2 className='text-3xl font-serif text-purple-900'>
              A holistic approach to building communities
            </h2>
            <Link
              href='/about-new'
              className='flex items-center space-x-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors'
            >
              <span>ABOUT US</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to work with us CTA */}
      <section className='py-20 bg-gray-900 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold text-orange-500 mb-4'>
            Ready to work with us?
          </h2>
          <p className='text-gray-300 mb-8'>
            Start working with us today and get a wonderful experience
          </p>
          <Link
            href='/contact'
            className='inline-block bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors font-semibold'
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
