import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Community Support | Cornerstone Deliverance Ministries',
  description:
    'Discover the community support resources available through Cornerstone Deliverance Ministries including counseling, emergency assistance, educational programs, and more.',
  keywords:
    'community support, social services, emergency assistance, counseling, educational programs, community resources, Baltimore community support',
  openGraph: {
    title: 'Community Support Resources',
    description:
      'Comprehensive support services for individuals and families in need.',
    type: 'website',
  },
};

export default function CommunitySupportPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Navigation />

      <main className='pt-20'>
        {/* Hero Section */}
        <section className='relative h-[500px]'>
          <Image
            src='/images/community-support-hero.jpg'
            alt='Community Support - People helping each other'
            fill
            className='object-cover brightness-75'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent'>
            <div className='container mx-auto px-4 h-full flex items-center'>
              <div className='text-white max-w-2xl'>
                <h1 className='text-5xl md:text-6xl font-light mb-6'>
                  Community Support
                </h1>
                <p className='text-xl md:text-2xl font-light'>
                  Providing comprehensive resources and assistance to strengthen
                  our community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 max-w-4xl'>
            <p className='text-lg text-gray-700 leading-relaxed mb-8'>
              At Cornerstone Deliverance & Development Ministries for Christ,
              Inc., we believe in the power of community and the importance of
              supporting one another. Our community support services are
              designed to provide immediate assistance, long-term solutions, and
              ongoing resources to individuals and families facing various
              challenges.
            </p>
          </div>
        </section>

        {/* Support Services */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-light text-gray-800 text-center mb-12'>
              Our Support Services
            </h2>

            <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
              {/* Emergency Assistance */}
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <div className='text-4xl mb-4'>🆘</div>
                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Emergency Assistance
                </h3>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  Immediate support for families facing crisis situations
                  including housing emergencies, food insecurity, and financial
                  hardship.
                </p>
                <ul className='space-y-2 text-gray-700'>
                  <li>• Emergency food distribution</li>
                  <li>• Temporary housing assistance</li>
                  <li>• Utility payment support</li>
                  <li>• Crisis counseling</li>
                </ul>
              </div>

              {/* Counseling & Mental Health */}
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <div className='text-4xl mb-4'>💬</div>
                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Counseling & Mental Health
                </h3>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  Professional counseling services and mental health support for
                  individuals and families navigating life&apos;s challenges.
                </p>
                <ul className='space-y-2 text-gray-700'>
                  <li>• Individual counseling</li>
                  <li>• Family therapy</li>
                  <li>• Group support sessions</li>
                  <li>• Grief counseling</li>
                </ul>
              </div>

              {/* Educational Programs */}
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <div className='text-4xl mb-4'>📚</div>
                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Educational Programs
                </h3>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  Workshops, seminars, and training programs to empower
                  community members with knowledge and skills.
                </p>
                <ul className='space-y-2 text-gray-700'>
                  <li>• Financial literacy workshops</li>
                  <li>• Parenting classes</li>
                  <li>• Health & wellness seminars</li>
                  <li>• Life skills training</li>
                </ul>
              </div>

              {/* Youth & Family Support */}
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <div className='text-4xl mb-4'>👨‍👩‍👧‍👦</div>
                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Youth & Family Support
                </h3>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  Specialized programs designed to strengthen family bonds and
                  support youth development.
                </p>
                <ul className='space-y-2 text-gray-700'>
                  <li>• After-school programs</li>
                  <li>• Mentorship opportunities</li>
                  <li>• Family enrichment activities</li>
                  <li>• Youth leadership development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Center */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 max-w-6xl'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-light text-gray-800 mb-6'>
                  Community Resource Center
                </h2>
                <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                  Our Community Resource Center serves as a hub for information,
                  referrals, and direct assistance. We connect individuals and
                  families with the resources they need to overcome challenges
                  and thrive.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='text-2xl mr-4'>✓</div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-1'>
                        Resource Navigation
                      </h4>
                      <p className='text-gray-600'>
                        Help finding and accessing community resources
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <div className='text-2xl mr-4'>✓</div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-1'>
                        Case Management
                      </h4>
                      <p className='text-gray-600'>
                        Personalized support plans and ongoing guidance
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <div className='text-2xl mr-4'>✓</div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-1'>
                        Community Partnerships
                      </h4>
                      <p className='text-gray-600'>
                        Connections to local organizations and services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative h-[500px] rounded-lg overflow-hidden shadow-2xl'>
                <Image
                  src='/images/resource-center.jpg'
                  alt='Community Resource Center'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* How to Access Support */}
        <section className='py-16 bg-purple-50'>
          <div className='container mx-auto px-4 max-w-4xl'>
            <h2 className='text-4xl font-light text-gray-800 text-center mb-12'>
              How to Access Support
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                  1
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Contact Us
                </h3>
                <p className='text-gray-600'>
                  Call or visit our office to speak with a support coordinator
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                  2
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Assessment
                </h3>
                <p className='text-gray-600'>
                  We&apos;ll assess your needs and create a personalized support
                  plan
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                  3
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Get Support
                </h3>
                <p className='text-gray-600'>
                  Access the services and resources you need to move forward
                </p>
              </div>
            </div>
            <div className='text-center mt-12'>
              <Link
                href='/contact'
                className='inline-block bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg'
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>

      <CTASection
        title='Need Support?'
        subtitle="We're here to help. Reach out to learn more about our community support services"
        buttonText='GET IN TOUCH'
        buttonLink='/contact'
      />

      <Footer />
    </div>
  );
}
