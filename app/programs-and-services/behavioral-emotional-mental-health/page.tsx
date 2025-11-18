import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title:
    'Behavioral, Emotional, & Mental Health | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone Community Behavioral Health provides evidence-based mental health services, therapeutic counseling, and comprehensive support for emotional well-being and resilience.',
  keywords:
    'mental health, behavioral health, emotional health, counseling, therapy, mental health support, emotional wellness, community behavioral health, Baltimore mental health services',
  openGraph: {
    title: 'Behavioral, Emotional, & Mental Health Services',
    description:
      'Promoting emotional well-being and mental health through evidence-based interventions and personalized care.',
    type: 'website',
  },
};

export default function BehavioralHealthPage() {
  const serviceData = {
    title: 'Behavioral, Emotional, & Mental Health',
    description: `Cornerstone Deliverance & Development Ministries for Christ, Inc's Behavioral Emotional, and Mental Health services, known as Cornerstone Community Behavioral Health, are committed to promoting emotional well-being and mental health for individuals of all backgrounds. Our dedicated team of professionals provides a safe and supportive environment where clients can explore and address their emotional and behavioral challenges. Through evidence-based interventions and personalized care, we aim to empower individuals to develop healthy coping mechanisms, enhance self-awareness, and build strong emotional resilience. Our comprehensive approach includes therapeutic counseling, educational programs, and community resources, all designed to foster positive transformation and holistic healing for those seeking support in their mental health journey.`,
    image: '/images/services/behavioral-emotional-mental-health.jpg',
    imageAlt:
      'Behavioral, Emotional, & Mental Health - Supportive counseling and mental health services',
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
