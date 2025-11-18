import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetailDual from '@/components/ServiceDetailDual';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Housing Development & Security | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone provides housing solutions for low-income families and individuals through our Housing Development Corporation and Community Action Housing Development programs.',
  keywords:
    'housing development, affordable housing, transitional housing, homeless services, low-income housing, CHDO, community housing, Baltimore housing services',
  openGraph: {
    title: 'Housing Development & Security Programs',
    description:
      'Providing prompt housing solutions and nurturing morally responsible citizens through comprehensive housing programs.',
    type: 'website',
  },
};

export default function HousingDevelopmentPage() {
  const serviceData = {
    mainTitle: 'Housing Development & Security',
    sections: [
      {
        title: 'Housing Development & Security',
        description: `Cornerstone Deliverance & Development Ministries for Christ, Inc's Housing Development Corporation, is dedicated to addressing pressing issues such as homelessness and rising incarceration rates. Our CHDO has been established to offer prompt housing solutions for low-income families, individuals seeking transitional accommodations, and those in need of temporary shelter during transitions. We prioritize assisting clients from low to moderate income levels, aiming to adopt a comprehensive approach that incorporates community-based educational and artistic programs. Our vision is to nurture individuals into morally responsible citizens, fostering growth in body, mind, and spirit.`,
        image: '/images/services/housing-development-security.jpg',
        imageAlt:
          'Housing Development & Security - Affordable housing solutions',
      },
      {
        title: 'Cornerstone Community Action Housing Development Corporation',
        description: `Cornerstone Community Action Housing Development Corporation, established in Febraury 3, 2003, as a result of the urgent need for our homeless population and increase of incarcerations' we felt the need to establish our CHDO. This organization was formed to provide immediate housing for low income families for those in need of transitional housing or a place to stay during transition. We target low moderate-income level clients to bring a holistic approach to develop community based educational and artistic programs, designed to mold individuals into morally responsible citizens in body, mind and spirit.`,
        image: '/images/services/community-action-housing.jpg',
        imageAlt:
          'Cornerstone Community Action Housing Development Corporation',
      },
    ] as [
      {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
      },
      {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
      }
    ],
  };

  return (
    <div className='min-h-screen bg-white'>
      <Navigation currentPage='programs' />

      <ServiceDetailDual
        mainTitle={serviceData.mainTitle}
        sections={serviceData.sections}
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
