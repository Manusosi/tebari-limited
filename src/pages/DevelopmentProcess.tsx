
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import Process from '@/components/Process';

const DevelopmentProcess = () => {
  return (
    <PageLayout>
      <SEO 
        title="Development Process - Tebari Limited" 
        description="Learn about Tebari's comprehensive approach to developing sustainable plastic recycling solutions and circular economy products."
        imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
        keywords={['development process', 'plastic recycling', 'circular economy', 'sustainable development', 'waste management']}
      />
      
      <div className="pt-24 pb-12 bg-gradient-to-b from-tebari-green to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h1>
            <p className="text-xl text-gray-300 mb-6">
              A comprehensive approach to transforming plastic waste into sustainable solutions
            </p>
          </div>
        </div>
      </div>
      
      <Process />
    </PageLayout>
  );
};

export default DevelopmentProcess;
