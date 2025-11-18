import { Navigation } from '@/components/Navigation';
import { TeamMemberBio } from '@/components/TeamMemberBio';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import bioData from '@/content/johanna-joness-bio.json';

export const metadata = {
  title: 'Johanna L. Jones - Chief Operating Officer | Cornerstone Deliverance',
  description: 'Learn about Johanna L. Jones, Chief Operating Officer of Cornerstone Deliverance & Development Ministries.',
};

export default function JohannaJonesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={undefined} />
      
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
