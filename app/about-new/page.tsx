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
        image={content.hero.image}
        height="medium"
      />

      {/* Welcome Section - Founder Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[500px]">
              <Image
                src={content.welcome.image}
                alt="Founder"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{content.welcome.title}</h2>
              <p className="text-purple-600 text-lg mb-6">{content.welcome.subtitle}</p>
              <div className="prose prose-lg text-gray-700">
                <p>{content.welcome.message}</p>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-bold text-gray-900">{content.welcome.signature}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
            {content.companyDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h2 className="text-3xl font-bold text-purple-900 mb-4">{content.mission.title}</h2>
              <p className="text-gray-700 text-lg mb-4">{content.mission.content}</p>
              <p className="text-gray-700 text-lg">{content.mission.additionalText}</p>
            </div>

            {/* Purpose */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h2 className="text-3xl font-bold text-purple-900 mb-4">{content.purpose.title}</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                {content.purpose.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
        columns={5}
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
