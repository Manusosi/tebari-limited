
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import Process from '@/components/Process';
import HeroSection from '@/components/HeroSection';

const DevelopmentProcess = () => {
  return (
    <PageLayout>
      <SEO 
        title="Development Process - Tebari Limited" 
        description="Learn about Tebari's comprehensive approach to developing sustainable plastic recycling solutions and circular economy products."
        imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
        keywords={['development process', 'plastic recycling', 'circular economy', 'sustainable development', 'waste management']}
      />
      
      <HeroSection
        title="Our Development Process"
        subtitle="A comprehensive approach to transforming plastic waste into sustainable solutions"
        height="md"
        className="pt-16"
      />
      
      <Process />
    </PageLayout>
  );
};

export default DevelopmentProcess;
