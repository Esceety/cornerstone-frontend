import { Navigation } from '@/components/Navigation';
import { TeamMemberBio } from '@/components/TeamMemberBio';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import bioData from '@/content/andrew-jones-bio.json';

export const metadata = {
  title: 'Andrew James Jones - Executive Director | Cornerstone Deliverance',
  description: 'Learn about Andrew James Jones, Executive Director and Founder of Cornerstone Deliverance & Development Ministries.',
};

export default function AndrewJonesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="" />
      
      <TeamMemberBio
        name={bioData.name}
        title={bioData.title}
        image={bioData.image}
        bio={bioData.bio}
      />

      <CTASection
        title="Ready to work with us?"
        subtitle="Start working with us today and get a wonderful experience"
        buttonText="CONTACT US"
        buttonLink="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  );
}
