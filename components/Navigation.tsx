'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  currentPage?: 'home' | 'about' | 'programs' | 'team' | 'contact';
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  const linkClass = (page: string) =>
    currentPage === page
      ? 'text-orange-500 font-semibold hover:text-orange-600'
      : 'text-gray-700 hover:text-purple-600';

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <Link href='/' className='text-purple-900 font-bold text-2xl'>
            CORNERSTONE
          </Link>
          <div className='text-sm text-gray-600'>1-912-216-1229</div>
        </div>

        <div className='hidden md:flex space-x-8 items-center'>
          <Link href='/' className={linkClass('home')}>
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className='relative'
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <div
              className={`${linkClass(
                'about'
              )} flex items-center space-x-1 py-2 cursor-pointer`}
            >
              <span>About</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  aboutDropdownOpen ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>

            {aboutDropdownOpen && (
              <div className='absolute top-full left-0 mt-0 w-64 bg-white rounded-b-lg shadow-2xl border border-gray-100 py-2 animate-fadeIn'>
                <Link
                  href='/about-new'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  <div className='font-semibold'>About Us</div>
                  <div className='text-xs text-gray-500'>
                    Learn about our organization
                  </div>
                </Link>
                <Link
                  href='/message-from-founder'
                  className='block px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500'
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  <div className='font-semibold text-orange-500'>
                    Message from Founder
                  </div>
                  <div className='text-xs text-gray-500'>
                    Words from Andrew James Jones
                  </div>
                </Link>
                <Link
                  href='/about-new#mission'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  <div className='font-semibold'>Mission & Purpose</div>
                  <div className='text-xs text-gray-500'>
                    Our vision and values
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Programs Dropdown */}
          <div
            className='relative'
            onMouseEnter={() => setProgramsDropdownOpen(true)}
            onMouseLeave={() => setProgramsDropdownOpen(false)}
          >
            <div
              className={`${linkClass(
                'programs'
              )} flex items-center space-x-1 py-2 cursor-pointer`}
            >
              <span>Programs and Services</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  programsDropdownOpen ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>

            {programsDropdownOpen && (
              <div className='absolute top-full left-0 mt-0 w-72 bg-white rounded-b-lg shadow-2xl border border-gray-100 py-2 animate-fadeIn'>
                <Link
                  href='/programs-and-services'
                  className='block px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold text-orange-500'>
                    All Programs
                  </div>
                  <div className='text-xs text-gray-500'>
                    View complete services list
                  </div>
                </Link>
                <div className='border-t border-gray-200 my-2'></div>
                <Link
                  href='/programs-and-services/youth-athletics'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    Youth Athletics & Enrichment
                  </div>
                  <div className='text-xs text-gray-500'>
                    Empowering youth through sports and arts
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/family-strengthening-stabilization'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    Family Strengthening & Stabilization
                  </div>
                  <div className='text-xs text-gray-500'>
                    Supporting and empowering families
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/behavioral-emotional-mental-health'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    Behavioral, Emotional, & Mental Health
                  </div>
                  <div className='text-xs text-gray-500'>
                    Comprehensive mental health support
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/housing-development-security'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    Housing Development & Security
                  </div>
                  <div className='text-xs text-gray-500'>
                    Affordable housing solutions
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/transportation-logistics'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    Transportation & Logistics
                  </div>
                  <div className='text-xs text-gray-500'>
                    Brokerage and transportation services
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/community-neighborhood-revitalization'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    Community & Neighborhood Revitalization
                  </div>
                  <div className='text-xs text-gray-500'>
                    Transforming local communities
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/nonprofit-economic-development-entrepreneurship'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    Nonprofit & Economic Development
                  </div>
                  <div className='text-xs text-gray-500'>
                    Empowering nonprofit organizations
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/feeding-our-communities'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>Feeding Our Communities</div>
                  <div className='text-xs text-gray-500'>
                    Combating food insecurity
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/employability-skills-job-training'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    Employability Skills & Job Training
                  </div>
                  <div className='text-xs text-gray-500'>
                    Workforce development programs
                  </div>
                </Link>
                <Link
                  href='/programs-and-services/end-of-life-farewell-dignified-remembrance'
                  className='block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-l-4 border-transparent hover:border-purple-600'
                  onClick={() => setProgramsDropdownOpen(false)}
                >
                  <div className='font-semibold'>
                    End-of-Life Farewell & Remembrance
                  </div>
                  <div className='text-xs text-gray-500'>
                    Compassionate funeral services
                  </div>
                </Link>
              </div>
            )}
          </div>
          <Link href='/team' className={linkClass('team')}>
            Team
          </Link>
          <Link href='/contact' className={linkClass('contact')}>
            Contact
          </Link>
        </div>

        <Link
          href='/contact'
          className='bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors font-semibold'
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
}
