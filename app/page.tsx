import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/common/Hero';
import ServiceFeature from '@/components/common/ServiceFeature';
import CallToActionShop from '@/components/common/CallToActionShop';
import DedicatedSolutions from '@/components/common/DedicatedSolutions';
import StatsCard from '@/components/common/StatsCard';
import Testimonials from '@/components/common/Testimonials';
import Footer from '@/components/layout/Footer';
import { stats } from '@/lib/data/stats';

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
      <section className="relative py-8 sm:py-12 lg:py-16 bg-teal-700 overflow-hidden">
        {/* Multiple Wavy Bottom Borders - Stacked */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg
            viewBox="0 0 1440 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48"
            preserveAspectRatio="none"
          >
            {/* First Wave - Bottom Layer */}
            <path
              d="M0,160 C400,120 800,180 1200,140 C1400,120 1440,160 1440,200 L0,200 Z"
              fill="#d1d5db"
            />
            {/* Second Wave - Middle Layer */}
            <path
              d="M0,140 C300,100 600,160 900,120 C1200,80 1440,140 1440,200 L0,200 Z"
              fill="#e5e7eb"
            />
            {/* Third Wave - Top Layer */}
            <path
              d="M0,120 C200,80 400,140 600,100 C800,60 1000,120 1200,90 C1300,75 1400,85 1440,90 L1440,200 L0,200 Z"
              fill="#f3f4f6"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </div>
  );
}
