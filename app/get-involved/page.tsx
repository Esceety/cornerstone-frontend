import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Get Involved | Cornerstone Deliverance Ministries',
  description:
    'Join us in making a difference! Volunteer, donate, partner with us, or attend our events to support community development and transformation.',
  keywords:
    'volunteer, donate, get involved, community service, partnerships, events, fundraising, Baltimore volunteer opportunities',
  openGraph: {
    title: 'Get Involved with Cornerstone',
    description:
      'Make a difference in your community through volunteering, donations, and partnerships.',
    type: 'website',
  },
};

export default function GetInvolvedPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Navigation />

      <main className='pt-20'>
        {/* Hero Section */}
        <section className='relative h-[500px]'>
          <Image
            src='/images/get-involved-hero.jpg'
            alt='Get Involved - Volunteers making a difference'
            fill
            className='object-cover brightness-75'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-orange-900/70 to-transparent'>
            <div className='container mx-auto px-4 h-full flex items-center'>
              <div className='text-white max-w-2xl'>
                <h1 className='text-5xl md:text-6xl font-light mb-6'>
                  Get Involved
                </h1>
                <p className='text-xl md:text-2xl font-light'>
                  Join us in transforming lives and building stronger
                  communities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 max-w-4xl text-center'>
            <h2 className='text-4xl font-light text-gray-800 mb-6'>
              Be Part of the Change
            </h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Whether you have time to volunteer, resources to share, or
              expertise to contribute, there are many ways to support our
              mission of empowering communities and transforming lives. Every
              contribution, big or small, makes a lasting impact.
            </p>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-light text-gray-800 text-center mb-12'>
              Ways to Make a Difference
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
              {/* Volunteer */}
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='relative h-48'>
                  <Image
                    src='/images/volunteer-opportunities.jpg'
                    alt='Volunteer Opportunities'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-4xl mb-4'>🤝</div>
                  <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                    Volunteer
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Share your time and talents to make a direct impact in our
                    programs and services.
                  </p>
                  <ul className='space-y-2 text-gray-700 mb-6'>
                    <li>• Program assistance</li>
                    <li>• Event support</li>
                    <li>• Mentorship</li>
                    <li>• Administrative help</li>
                  </ul>
                  <Link
                    href='/contact?subject=volunteer'
                    className='block text-center bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors font-semibold'
                  >
                    Become a Volunteer
                  </Link>
                </div>
              </div>

              {/* Donate */}
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='relative h-48'>
                  <Image
                    src='/images/make-donation.jpg'
                    alt='Make a Donation'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-4xl mb-4'>💝</div>
                  <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                    Donate
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Your financial contributions help us expand our reach and
                    serve more families in need.
                  </p>
                  <ul className='space-y-2 text-gray-700 mb-6'>
                    <li>• One-time donation</li>
                    <li>• Monthly giving</li>
                    <li>• Program sponsorship</li>
                    <li>• In-kind donations</li>
                  </ul>
                  <Link
                    href='/contact?subject=donate'
                    className='block text-center bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors font-semibold'
                  >
                    Make a Donation
                  </Link>
                </div>
              </div>

              {/* Partner */}
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='relative h-48'>
                  <Image
                    src='/images/partner-with-us.jpg'
                    alt='Partner With Us'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-4xl mb-4'>🤝</div>
                  <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                    Partner With Us
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Collaborate with us to create sustainable solutions and
                    maximize community impact.
                  </p>
                  <ul className='space-y-2 text-gray-700 mb-6'>
                    <li>• Corporate partnerships</li>
                    <li>• Church collaborations</li>
                    <li>• Community organizations</li>
                    <li>• Grant opportunities</li>
                  </ul>
                  <Link
                    href='/contact?subject=partnership'
                    className='block text-center bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors font-semibold'
                  >
                    Explore Partnerships
                  </Link>
                </div>
              </div>

              {/* Attend Events */}
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='relative h-48'>
                  <Image
                    src='/images/attend-events.jpg'
                    alt='Attend Our Events'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-4xl mb-4'>📅</div>
                  <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                    Attend Events
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Join us for community events, fundraisers, and special
                    programs throughout the year.
                  </p>
                  <ul className='space-y-2 text-gray-700 mb-6'>
                    <li>• Annual fundraisers</li>
                    <li>• Community celebrations</li>
                    <li>• Educational workshops</li>
                    <li>• Family events</li>
                  </ul>
                  <Link
                    href='/contact?subject=events'
                    className='block text-center bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors font-semibold'
                  >
                    View Events
                  </Link>
                </div>
              </div>

              {/* Spread the Word */}
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='relative h-48'>
                  <Image
                    src='/images/spread-the-word.jpg'
                    alt='Spread the Word'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-4xl mb-4'>📢</div>
                  <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                    Spread the Word
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Help us reach more people by sharing our mission and impact
                    with your network.
                  </p>
                  <ul className='space-y-2 text-gray-700 mb-6'>
                    <li>• Share on social media</li>
                    <li>• Tell friends & family</li>
                    <li>• Community outreach</li>
                    <li>• Write testimonials</li>
                  </ul>
                  <div className='flex gap-3'>
                    <a
                      href='#'
                      className='flex-1 text-center bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition-colors font-semibold'
                    >
                      Share
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Skills */}
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='relative h-48'>
                  <Image
                    src='/images/professional-skills.jpg'
                    alt='Share Professional Skills'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-4xl mb-4'>💼</div>
                  <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                    Share Your Skills
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Offer your professional expertise to strengthen our
                    operations and programs.
                  </p>
                  <ul className='space-y-2 text-gray-700 mb-6'>
                    <li>• Legal & accounting</li>
                    <li>• Marketing & communications</li>
                    <li>• IT & technology</li>
                    <li>• Training & workshops</li>
                  </ul>
                  <Link
                    href='/contact?subject=skills'
                    className='block text-center bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors font-semibold'
                  >
                    Offer Your Skills
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 max-w-6xl'>
            <h2 className='text-4xl font-light text-gray-800 text-center mb-12'>
              Your Impact Matters
            </h2>
            <div className='grid md:grid-cols-3 gap-8 mb-12'>
              <div className='text-center'>
                <div className='text-5xl font-bold text-purple-600 mb-2'>
                  30+
                </div>
                <div className='text-xl text-gray-800 font-semibold mb-2'>
                  Years of Service
                </div>
                <p className='text-gray-600'>
                  Serving communities with dedication and compassion
                </p>
              </div>
              <div className='text-center'>
                <div className='text-5xl font-bold text-orange-500 mb-2'>
                  10+
                </div>
                <div className='text-xl text-gray-800 font-semibold mb-2'>
                  Programs & Services
                </div>
                <p className='text-gray-600'>
                  Comprehensive support for diverse community needs
                </p>
              </div>
              <div className='text-center'>
                <div className='text-5xl font-bold text-purple-600 mb-2'>
                  1000s
                </div>
                <div className='text-xl text-gray-800 font-semibold mb-2'>
                  Lives Transformed
                </div>
                <p className='text-gray-600'>
                  Individuals and families empowered to thrive
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className='py-16 bg-purple-50'>
          <div className='container mx-auto px-4 max-w-4xl text-center'>
            <div className='text-6xl mb-6'>&ldquo;</div>
            <p className='text-2xl text-gray-800 italic mb-8'>
              Volunteering at Cornerstone has been one of the most rewarding
              experiences of my life. Seeing the direct impact we make in our
              community is truly inspiring.
            </p>
            <p className='text-lg text-gray-600 font-semibold'>
              — Community Volunteer
            </p>
          </div>
        </section>
      </main>

      <CTASection
        title='Ready to Get Involved?'
        subtitle='Take the first step in making a difference today'
        buttonText='CONTACT US'
        buttonLink='/contact'
      />

      <Footer />
    </div>
  );
}
