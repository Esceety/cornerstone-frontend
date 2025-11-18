import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Feeding Our Communities | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone takes a proactive approach to combating food insecurity through USDA Summer Breakspot, partnership with Florida Department of Agriculture, and Food Pantry programs.',
  keywords:
    'food insecurity, feeding programs, summer meals, food pantry, USDA breakspot, community nutrition, hunger relief, Baltimore food services',
  openGraph: {
    title: 'Feeding Our Communities Programs',
    description:
      'Combating food insecurity through free meals, lunch programs, and food pantry services.',
    type: 'website',
  },
};

export default function FeedingCommunitiesPage() {
  const serviceData = {
    title: 'Feeding Our Communities',
    description: `Cornerstone Deliverance & Development Ministries for Christ, Inc. takes a proactive approach to combatting food insecurity through various impactful services. Our USDA Summer Breakspot initiative provides free meals to children during the summer break, ensuring they receive essential nutrition outside of school. Additionally, our partnership with the Florida Department of Agriculture allows us to offer free and reduced lunch programs, supporting families in need. The Food Pantry, in collaboration with Feed South Florida, further extends our efforts to provide vital sustenance to those facing hunger challenges in our community.`,
    image: '/images/services/feeding-our-communities.jpg',
    imageAlt:
      'Feeding Our Communities - Food assistance and nutrition programs',
    programList: ['Summer Breakspot', 'Feed South Florida'],
  };

  return (
    <div className='min-h-screen bg-white'>
      <Navigation currentPage='programs' />

      <ServiceDetail
        title={serviceData.title}
        description={serviceData.description}
        image={serviceData.image}
        imageAlt={serviceData.imageAlt}
        programList={serviceData.programList}
      />

      <CTASection
        title='Ready to work with us?'
        subtitle='Start working with us today and get a wonderful experience'
        buttonText='CONTACT US'
        buttonLink='/contact'
      />

      <Footer />
    </div>
  );
}
