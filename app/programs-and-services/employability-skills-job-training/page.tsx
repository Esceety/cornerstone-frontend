import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title:
    'Employability Skills & Job Training | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone empowers individuals with essential employability skills and job training through innovative programs that enhance professional abilities and foster career success.',
  keywords:
    'job training, employability skills, workforce development, career training, professional development, job skills, employment programs, Baltimore job training',
  openGraph: {
    title: 'Employability Skills & Job Training Programs',
    description:
      'Providing transformative pathways to success through essential skills training and career development.',
    type: 'website',
  },
};

export default function EmployabilitySkillsPage() {
  const serviceData = {
    title: 'Employability Skills & Job Training',
    description: `Cornerstone Deliverance & Development Ministries for Christ, Inc. is a dynamic and compassionate organization committed to empowering individuals with the essential employability skills and job training they need to thrive in the modern workforce. Through innovative and personalized programs, they equip participants with the tools to enhance their professional abilities, instilling confidence, and competence in their chosen careers. With a steadfast focus on fostering personal growth and societal impact, Cornerstone Deliverance & Development Ministries for Christ, Inc. stands as a beacon of hope, providing a transformative pathway to success and self-sufficiency for all who seek their guidance.`,
    image: '/images/services/employability-skills-job-training.jpg',
    imageAlt:
      'Employability Skills & Job Training - Workforce development and career training',
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
