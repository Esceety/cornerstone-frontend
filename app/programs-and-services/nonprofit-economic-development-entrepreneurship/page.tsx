import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetailDual from '@/components/ServiceDetailDual';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title:
    'Nonprofit Development, Economic Development & Entrepreneurship | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone encompasses non-profit community development, economic development, and faith-based services through dedicated entities supporting community growth and empowering nonprofit organizations.',
  keywords:
    'nonprofit development, economic development, entrepreneurship, community development, nonprofit training, business development, faith-based services, Baltimore nonprofit services',
  openGraph: {
    title: 'Nonprofit Development, Economic Development & Entrepreneurship',
    description:
      'Supporting nonprofit organizations and catalyzing community growth through comprehensive development programs.',
    type: 'website',
  },
};

export default function NonprofitDevelopmentPage() {
  const serviceData = {
    mainTitle: 'Nonprofit Development, Economic Development & Entrepreneurship',
    sections: [
      {
        title: 'Nonprofit Development, Economic Development & Entrepreneurship',
        description: `Cornerstone Deliverance & Development Ministries for Christ, Inc, encompasses a multifaceted range of non-profit community development, economic development, and faith-based services through three dedicated entities: Cornerstone Worship & Deliverance Center, Unity for Fellowship Development Outreach Ministries, and Cornerstone Nonprofit Development Agency. Cornerstone Worship & Deliverance Center serves as a spiritual hub, providing a welcoming environment for worship, prayer, and spiritual growth. Unity for Fellowship Development Outreach Ministries actively engages with the community, fostering fellowship, and implementing development programs to address social and economic needs. Cornerstone Nonprofit Development Agency plays a pivotal role in catalyzing community growth by supporting and empowering nonprofit organizations with resources, training, and collaborative opportunities. Through these three pillars, Cornerstone strives to uplift communities and individuals alike, guided by their faith-based principles.`,
        image: '/images/services/nonprofit-economic-development.jpg',
        imageAlt:
          'Nonprofit Development, Economic Development & Entrepreneurship',
      },
      {
        title: 'Cornerstone Non-Profit Development Agency',
        description: `Cornerstone Non-Profit Development Agency, established in January 17, 2002, is Cornstoner's non-profit development agency dedicated todevelop, organize, and strengthen neighborhoods, community, and churches. Equip community organizations with the ability, know how and tools to successfully lay the proper foundation to operate and manage prosperous nonprofit, faith based, and grassroots organizations and Ministries. Duties include Consulting, Counseling, Organization / Ministry Developing, Operational Budgets, Measuring Program Outcomes. implementation of projects`,
        image: '/images/services/cornerstone-nonprofit-agency.jpg',
        imageAlt: 'Cornerstone Non-Profit Development Agency',
      },
    ],
  };

  return (
    <div className='min-h-screen bg-white'>
      <Navigation currentPage='programs' />

      <ServiceDetailDual
        mainTitle={serviceData.mainTitle}
        sections={
          serviceData.sections as [
            (typeof serviceData.sections)[0],
            (typeof serviceData.sections)[1]
          ]
        }
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
