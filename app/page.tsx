import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceFeature from '@/components/ServiceFeature';
import CallToActionShop from '@/components/CallToActionShop';
import DedicatedSolutions from '@/components/DedicatedSolutions';
import StatsCard from '@/components/StatsCard';
import Footer from '@/components/Footer';
import { stats } from '@/data/stats';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Service Feature Section */}
      <ServiceFeature />
      
      {/* Call to Action Shop Section */}
      <CallToActionShop />
      
      {/* Dedicated Solutions Section */}
      <DedicatedSolutions />
      
      {/* Stats Section */}
      <section className="relative py-16 bg-teal-700 overflow-hidden">
        {/* Wavy Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 sm:h-20 md:h-24"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C200,40 400,100 600,60 C800,20 1000,80 1200,50 C1300,35 1400,45 1440,50 L1440,80 L0,80 Z"
              fill="#f3f4f6"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20 sm:pb-24 md:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
