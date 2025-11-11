import { Navigation } from '@/components/Navigation';
import { TeamMemberBio } from '@/components/TeamMemberBio';
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

      <Footer />
    </div>
  );
}
