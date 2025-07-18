
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const OceanCleanup = () => {
  return (
    <PageLayout>
      <SEO 
        title="Ocean Cleanup Initiative - Coming Soon | Tebari Limited"
        description="Ocean cleanup initiative for coastal plastic collection program - Coming Soon"
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-tebari-green/10 to-white">
        <div className="text-center px-4">
          <Link to="/" className="inline-flex items-center text-tebari-green hover:text-tebari-green/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-tebari-green mb-6">
            Ocean Cleanup Initiative
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our coastal plastic collection program is currently under development. 
            Stay tuned for updates on this exciting environmental initiative.
          </p>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block bg-tebari-green text-white px-8 py-3 rounded-lg hover:bg-tebari-green/90 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OceanCleanup;
