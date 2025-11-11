import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TeamGrid } from '@/components/TeamGrid';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import fs from 'fs';
import path from 'path';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  link: string;
}

interface TeamContent {
  hero: {
    title: string;
    image: string;
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

async function getTeamContent(): Promise<TeamContent> {
  const filePath = path.join(process.cwd(), 'content', 'team-content.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export const metadata = {
  title: 'Our Team - Cornerstone Deliverance',
  description: 'Meet the dedicated team at Cornerstone Deliverance & Development Ministries.',
};

export default async function TeamPage() {
  const content = await getTeamContent();

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="team" />
      
      <Hero 
        title={content.hero.title}
        image={content.hero.image}
        height="medium"
      />

      <TeamGrid
        title={content.team.title}
        subtitle={content.team.subtitle}
        members={content.team.members}
        columns={5}
        variant="dark"
      />

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
