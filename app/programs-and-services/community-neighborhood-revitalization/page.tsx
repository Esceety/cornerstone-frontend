import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title:
    'Community & Neighborhood Revitalization | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone is a dynamic force in Community & Neighborhood Revitalization, transforming and uplifting local communities through strategic partnerships and hands-on initiatives.',
  keywords:
    'community revitalization, neighborhood development, community transformation, urban renewal, community engagement, infrastructure development, Baltimore community services',
  openGraph: {
    title: 'Community & Neighborhood Revitalization Programs',
    description:
      'Revitalizing communities and fostering pride, unity, and prosperity through sustainable development.',
    type: 'website',
  },
};

export default function CommunityRevitalizationPage() {
  const serviceData = {
    title: 'Community & Neighborhood Revitalization',
    description: `Cornerstone Deliverance & Development Ministries for Christ, Inc. is a dynamic force in Community & Neighborhood Revitalization. We are committed to transforming and uplifting local communities through various initiatives and projects. Our organization actively engages with residents, stakeholders, and local authorities to identify pressing issues and implement effective solutions. Through strategic partnerships and a hands-on approach, we address issues such as housing, infrastructure, education, and social services, to create sustainable and vibrant neighborhoods. Cornerstone's vision is to revitalize communities, fostering a sense of pride, unity, and prosperity among its residents. With a heart for service and a dedication to positive change, we continue to make a lasting impact in community development.`,
    image: '/images/services/community-neighborhood-revitalization.jpg',
    imageAlt:
      'Community & Neighborhood Revitalization - Transforming local communities',
    programList: [],
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
