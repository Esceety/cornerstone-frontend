import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ServiceDetail from '@/components/ServiceDetail';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Youth Athletics, Enrichment & Intervention | Cornerstone Deliverance Ministries',
  description: 'Cornerstone Deliverance Ministries provides comprehensive youth athletics and enrichment programs including performing arts, children\'s academy, and after-school delinquency prevention.',
  keywords: 'youth athletics, youth enrichment, performing arts, children academy, after school programs, delinquency prevention, youth development, Baltimore youth programs',
  openGraph: {
    title: 'Youth Athletics, Enrichment & Intervention Programs',
    description: 'Empowering young individuals through athletics, performing arts, and comprehensive youth development programs.',
    type: 'website',
  },
};

export default function YouthAthleticsPage() {
  const serviceData = {
    title: "Youth Athletics, Enrichment & Intervention",
    description: `Cornerstone Deliverance Ministries for the last thirty years has maintained a dynamic organization dedicated to empowering and enriching the lives of young individuals through a comprehensive array of youth-focused programs. They have no rival in providing transformative opportunities for growth and development. The Cornerstone Youth Empowerment & Performing Arts program is a haven of creative expression, while the nurturing environment of Cornerstone Children & Developmental Academy and Christian Family Childcare ensures a solid foundation for early childhood development. Recognizing the struggles that youth are engaged in enriching experiences, and the Youth in Action After School | Delinquency Prevention Program offers a safe space for their well-being. The focus is on breaking generational cycles of trauma through mentorship and outreach network, instilling discipline and self-confidence. This holistic approach to youth development exemplifies their commitment to nurturing bright futures and empowered individuals who will make a positive impact on their communities.`,
    image: "/images/services/youth-athletics-enrichment-intervention.jpg",
    imageAlt: "Youth Athletics, Enrichment and Intervention Programs - Young people participating in sports, arts, and educational activities",
    programList: [
      "Cornerstone Youth Empowerment & Performing Arts",
      "Cornerstone Children & Developmental Academy",
      "Christian Family Childcare",
      "Bright Futures Summer Youth Program I",
      "Youth In Action After School | Delinquency Prevention Program",
      "Cornerstone Elite Athletics"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="programs" />
      
      <ServiceDetail
        title={serviceData.title}
        description={serviceData.description}
        image={serviceData.image}
        imageAlt={serviceData.imageAlt}
        programList={serviceData.programList}
      />

      <CTASection />
      
      <Footer />
    </div>
  );
}
