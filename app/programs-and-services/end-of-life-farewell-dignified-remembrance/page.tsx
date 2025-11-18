import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import ServiceDetailTriple from '@/components/ServiceDetailTriple';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title:
    'End-of-Life Farewell and Dignified Remembrance | Cornerstone Deliverance Ministries',
  description:
    'Cornerstone offers compassionate funeral services, removals, and cremation through A. J. Jones Funeral Services & Cremation and A. J. Jones Funeral Home.',
  keywords:
    'funeral services, cremation, funeral home, end of life care, memorial services, dignified remembrance, compassionate funeral care, bereavement support',
  openGraph: {
    title: 'End-of-Life Farewell and Dignified Remembrance',
    description:
      'Providing compassionate and professional funeral services with dignity and personalized care.',
    type: 'website',
  },
};

export default function EndOfLifePage() {
  const serviceData = {
    mainTitle: 'End-of-Life Farewell and Dignified Remembrance',
    sections: [
      {
        title: 'End-of-Life Farewell and Dignified Remembrance',
        description: `Cornerstone Deliverance & Development Ministries for Christ, Inc offers compassionate and professional Funeral Services, Removals, & Cremation through two esteemed divisions: Cornerstone A. J. Jones Funeral Services & Cremation and Cornerstone A. J. Jones Funeral Home. With a deep understanding of the importance of honoring the departed, they provide dignified and personalized funeral arrangements tailored to each family's unique needs. Their experienced and caring staff offers comprehensive support and guidance during this challenging time, handling every aspect of the funeral process with sensitivity and empathy. Cornerstone A. J. Jones Funeral Services & Cremation specializes in cremation services, while Cornerstone A. J. Jones Funeral Home provides a comforting and serene space for funeral services and memorials. The ministry's commitment is to provide compassionate end-of-life solutions, alleviating the burden for grieving families.`,
        image: '/images/services/end-of-life-farewell.jpg',
        imageAlt: 'End-of-Life Farewell and Dignified Remembrance',
      },
      {
        title: 'A. J. Jones Funeral & Cremations Services',
        location: 'Ft Lauderdale, Florida',
        description: `A. J. Jones Funeral Services & Cremations, established August 17, 2017, was created to provide families with well-planned funeral arrangements in their time of need. To providing comfortable, soothing surroundings where families and friends can gather to remember and celebrate the life of a loved one and reaching out to the greater community with educational seminars and grief support programs. We will set the standard for excellence in service quality by which other funeral businesses will measure themselves. We will do this by providing information, options, and guidance with the highest level of ethics, competence, courtesy, and compassion. will provide aftercare and support services for grieving families for as long as there is a need. will receive the highest quality funeral service available today>`,
        image: '/images/services/aj-jones-funeral-cremations.jpg',
        imageAlt:
          'A. J. Jones Funeral & Cremations Services - Ft Lauderdale, Florida',
      },
      {
        title: 'A. J. Jones Funeral Home',
        location: 'Lyons, Georgia',
        description: `A. J. Jones Funeral Home, established November 17, 2019, was designed and will always be dedicated to offer professional guidance and personal and specialized attention before, during and after the loss of a loved one. We will always aspire to be the funeral home of choice for all families in our community, known for our compassion, integrity, creativity, and value. It is the mission of A. J. Jones Funeral Home & Cremation Services to facilitate meaningful ways for families to grieve their loss and celebrate the memories of their loved ones. We will provide respectful and affordable funeral, cremation, and memorialization services in a comfortable environment, always striving to exceed the expectations of each family we serve.`,
        image: '/images/services/aj-jones-funeral-home.jpg',
        imageAlt: 'A. J. Jones Funeral Home - Lyons, Georgia',
      },
    ],
  };

  return (
    <div className='min-h-screen bg-white'>
      <Navigation currentPage='programs' />

      <ServiceDetailTriple
        mainTitle={serviceData.mainTitle}
        sections={
          serviceData.sections as [
            (typeof serviceData.sections)[0],
            (typeof serviceData.sections)[1],
            (typeof serviceData.sections)[2]
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
