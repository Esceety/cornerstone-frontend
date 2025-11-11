import Image from 'next/image';
import Link from 'next/link';
import { TeamGrid } from '@/components/TeamGrid';
import { Footer } from '@/components/Footer';
import teamContent from '@/content/team-content.json';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-purple-900">CORNERSTONE</span>
              <span className="text-sm text-gray-600">1-912-216-1229</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-orange-500 font-semibold">Home</Link>
              <Link href="/about-new" className="text-gray-700 hover:text-purple-900">About</Link>
              <Link href="/programs-and-services" className="text-gray-700 hover:text-purple-900">Programs and Services</Link>
              <Link href="/team" className="text-gray-700 hover:text-purple-900">Team</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-900">Contact</Link>
            </div>
            <Link href="/contact" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors font-semibold">
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] mt-20">
        <Image
          src="/images/cornerstone/hero/hero1.jpg"
          alt="Community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-lg mb-2 tracking-wider">WE SERVE OUR</p>
          <h1 className="text-7xl font-bold mb-8">COMMUNITY</h1>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </section>

      {/* Program Cards Section */}
      <section className="bg-gray-900 py-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-12 text-white">
              <h3 className="text-3xl font-bold">Youth</h3>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-teal-500 p-12 text-white">
              <h3 className="text-3xl font-bold">Family</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-12 text-white">
              <h3 className="text-3xl font-bold">Community</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Information Resource Center */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-serif text-gray-800 mb-6">Education &<br />Information Resource Center</h2>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cornerstone Deliverance & Development Ministries for Christ, Inc (CDDMC), a Florida Non-Profit 501c3 organization since 2000 that prides itself in serving the community as an education and information resource center. CDDMC provides a holistic approach to developing spiritual based, educational, and artistic programs designed to mold individuals into morally responsible citizens in body, mind, and spirit. CDDMC creates a forum that will effectively provide an avenue for exploring, developing, and harnessing the potentials that exist within our youth, families, and communities.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                CDDMC provides a wide array of services that encompass developing problem-solving initiatives and identify community youth and family needs to engage in collaborative problem-solving.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Dependability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Commitment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Consistency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Integrity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Efficiency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Reliability</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/cornerstone/hero/hero2.jpg"
                alt="Education"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="relative h-[400px] order-2 lg:order-1">
              <Image
                src="/images/cornerstone/hero/hero3.jpg"
                alt="Programs"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4">
                <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors font-semibold">
                  MORE PROGRAMS →
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gray-800 text-white p-8 rounded-lg mb-8">
                <p className="text-sm mb-2">Programs</p>
                <h2 className="text-2xl font-serif">How would you describe your life right now?</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Community Mental Health</h3>
                      <p className="text-gray-700 text-sm">
                        Cornerstone Community Mental Health Services is designed to provide a positive, essential learning environment where each child is challenged in mastering academic progress and social skills, talents,
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Youth Empowerment & Performing Arts</h3>
                      <p className="text-gray-700 text-sm">
                        Cornerstone Youth Empowerment & Performing Arts is designed to provide a positive, essential learning environment where each child is challenged to progress through academic mastery and social skills.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Non-Profit Develoment</h3>
                      <p className="text-gray-700 text-sm">
                        Cornerstone Non-Profit Development Agency, established in January 1, 2002, is Cornerstone&apos;s non-profit development agency dedicated to develop, organize, and invigorate neighborhoods.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">A.J. Jones Funeral</h3>
                      <p className="text-gray-700 text-sm">
                        A.J. Jones Funeral Services & Cremations provides families with well-planned funeral arrangements in their time of need.
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
      <section className="bg-gradient-to-r from-teal-300 to-teal-400 py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 text-sm mb-2 tracking-wider">LET US SERVE YOU</p>
          <h2 className="text-5xl font-serif">
            Cornerstone is <span className="text-orange-500">NON PROFIT DEVELOPMENT</span>
          </h2>
        </div>
      </section>

      {/* People that holds us */}
      <TeamGrid
        title={teamContent.team.title}
        subtitle={teamContent.team.subtitle}
        members={teamContent.team.members}
        columns={4}
        variant="dark"
      />
{/* About Us CTA */}
      <section className="py-16 border-t-4 border-b-4 border-teal-400 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif text-purple-900">A holistic approach to building communities</h2>
            <Link href="/about-new" className="flex items-center space-x-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              <span>ABOUT US</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to work with us CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Ready to work with us?</h2>
          <p className="text-gray-300 mb-8">Start working with us today and get a wonderful experience</p>
          <Link href="/contact" className="inline-block bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors font-semibold">
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
