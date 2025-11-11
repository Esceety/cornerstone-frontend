import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TeamGrid } from '@/components/TeamGrid';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

interface AboutContent {
  hero: {
    title: string;
    subtitle?: string;
    image: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    image: string;
    message: string;
    signature: string;
  };
  companyDescription: string[];
  mission: {
    title: string;
    content: string;
    additionalText: string;
  };
  purpose: {
    title: string;
    paragraphs: string[];
  };
  team: {
    title: string;
    subtitle: string;
    members: Array<{ name: string; title: string; image: string; link: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

async function getAboutContent(): Promise<AboutContent> {
  const contentPath = path.join(process.cwd(), 'content', 'about-content.json');
  const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
  return content;
}

export const metadata = {
  title: 'About Us - Cornerstone Deliverance',
  description: 'Learn about Cornerstone Deliverance & Development Ministries, our mission, purpose, and the dedicated team serving the community.',
};

export default async function AboutPage() {
  const content = await getAboutContent();

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />

      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        image={content.hero.image}
        height="medium"
      />

      {/* Mission & Purpose */}
      <section id="mission" className="py-24 bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Our Mission & Purpose
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-orange-500 to-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Committed to building stronger communities through education, empowerment, and spiritual development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Mission Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-2xl"></div>
                <div className="relative bg-white rounded-2xl p-10 m-1 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                      {content.mission.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {content.mission.content}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {content.mission.additionalText}
                    </p>
                  </div>

                  {/* Mission Values */}
                  <div className="mt-8 pt-8 border-t border-purple-100">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        Christian Service
                      </span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        Education
                      </span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        Community Excellence
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purpose Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-2xl"></div>
                <div className="relative bg-white rounded-2xl p-10 m-1 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                      {content.purpose.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {content.purpose.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Purpose Focus Areas */}
                  <div className="mt-8 pt-8 border-t border-orange-100">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                        Youth Development
                      </span>
                      <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                        Family Support
                      </span>
                      <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                        Community Bridge
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 font-semibold">Years of Service</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">12+</div>
                <div className="text-gray-600 font-semibold">Organizations</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-teal-600 mb-2">1000s</div>
                <div className="text-gray-600 font-semibold">Lives Impacted</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 font-semibold">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Team Section */}
      <TeamGrid
        title={content.team.title}
        subtitle={content.team.subtitle}
        members={content.team.members}
        columns={4}
        variant="dark"
      />

      {/* CTA Section */}
      <CTASection
        title={content.cta.title}
        subtitle={content.cta.subtitle}
        buttonText={content.cta.buttonText}
        buttonLink={content.cta.buttonLink}
        variant="dark"
      />

      <Footer />
    </div>
  );
}
