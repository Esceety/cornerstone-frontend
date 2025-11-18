import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title:
    'Family Strengthening & Stabilization | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone Deliverance Ministries empowers families through comprehensive Family Strengthening and Stabilization services, providing guidance, counseling, and community-based support.',
  keywords:
    'family strengthening, family stabilization, family counseling, family support, community services, family empowerment, family resilience, Baltimore family services',
  openGraph: {
    title: 'Family Strengthening & Stabilization Programs',
    description:
      'Empowering families to overcome challenges and thrive together in an atmosphere of love and understanding.',
    type: 'website',
  },
};

export default function FamilyStrengtheningPage() {
  const serviceData = {
    title: 'Family Strengthening & Stabilization',
    description: `Cornerstone Deliverance & Development Ministries for Christ, Inc is dedicated to empowering families through our Family Strengthening and Stabilization services. We understand the importance of a stable and supportive family environment, and our mission is to nurture and strengthen familial bonds. Through a comprehensive and holistic approach, we offer tailored interventions and resources to address the unique needs of each family. Our team collaborates closely with families, providing guidance, counseling, and community-based support to promote healthy communication, resilience, and personal growth. With a focus on unity and well-being, we strive to empower families to overcome challenges and thrive together in an atmosphere of love and understanding.`,
    image: '/images/services/family-strengthening-stabilization.jpg',
    imageAlt:
      'Family Strengthening & Stabilization - Families receiving support and guidance',
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
