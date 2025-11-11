import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FounderMessage } from '@/components/FounderMessage';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import fs from 'fs';
import path from 'path';

interface MessageFromFounderContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  founder: {
    title: string;
    subtitle: string;
    image: string;
    message: string;
    signature: string;
    founderName: string;
    founderTitle: string;
  };
  fullMessage: {
    title: string;
    paragraphs: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

async function getMessageContent(): Promise<MessageFromFounderContent> {
  const contentPath = path.join(process.cwd(), 'content', 'message-from-founder-content.json');
  const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
  return content;
}

export const metadata = {
  title: 'Message from Founder - Cornerstone Deliverance',
  description: 'A message from Andrew James Jones, Founder and Executive Director of Cornerstone Deliverance & Development Ministries.',
};

export default async function MessageFromFounderPage() {
  const content = await getMessageContent();

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />

      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        image={content.hero.image}
        height="medium"
      />

      <FounderMessage
        title={content.founder.title}
        subtitle={content.founder.subtitle}
        image={content.founder.image}
        message={content.founder.message}
        signature={content.founder.signature}
        founderName={content.founder.founderName}
        founderTitle={content.founder.founderTitle}
      />

      {/* Full Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              {content.fullMessage.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto mb-12 rounded-full"></div>
            
            <div className="space-y-8">
              {content.fullMessage.paragraphs.map((paragraph, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-orange-500 rounded-full"></div>
                  <p className="text-gray-700 text-lg leading-relaxed pl-8">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-600 shadow-md">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-xl font-bold text-purple-900">Education</h3>
                </div>
                <p className="text-gray-700">Multiple degrees in Education, Ministry, and Mortuary Science</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500 shadow-md">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-orange-900">Leadership</h3>
                </div>
                <p className="text-gray-700">Presides over 12+ Non-Profit organizations</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border-l-4 border-teal-500 shadow-md">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h3 className="text-xl font-bold text-teal-900">Experience</h3>
                </div>
                <p className="text-gray-700">Division I Athlete, Coach, Minister, and Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
