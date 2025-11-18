import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Transportation & Logistics | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone provides brokerage authority for efficient goods movement, logistical transportation services, and specialized training for the transportation industry.',
  keywords:
    'transportation services, logistics, brokerage, transportation training, goods movement, community transportation, Baltimore transportation services',
  openGraph: {
    title: 'Transportation & Logistics Services',
    description:
      'Providing logistical transportation services and specialized training opportunities in the transportation industry.',
    type: 'website',
  },
};

export default function TransportationLogisticsPage() {
  const serviceData = {
    title: 'Transportation & Logistics',
    description: `Cornerstone Deliverance & Development Ministries for Christ, Inc possesses brokerage authority for the efficient movement of goods and extends logistical transportation services to our thriving business community. Additionally, we provide specialized training to aspiring individuals seeking opportunities in the transportation industry. Our commitment also extends to furnishing essential transportation resources that cater to the diverse needs of the community.`,
    image: '/images/services/transportation-logistics.jpg',
    imageAlt:
      'Transportation & Logistics - Brokerage and transportation services',
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
