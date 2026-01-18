import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/common/Hero';
import ServiceFeature from '@/components/common/ServiceFeature';
import CallToActionShop from '@/components/common/CallToActionShop';
import DedicatedSolutions from '@/components/common/DedicatedSolutions';
import StatsCard from '@/components/common/StatsCard';
import Testimonials from '@/components/common/Testimonials';
import Footer from '@/components/layout/Footer';
import OrganizationSchema from '@/components/common/OrganizationSchema';
import { stats } from '@/lib/data/stats';

export default function Home() {
  return (
    <>
      {/* Organization Schema for SEO */}
      <OrganizationSchema />

      <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
      <Hero />

      {/* Service Feature Section */}
      <ServiceFeature />

      {/* Call to Action Shop Section */}
      <CallToActionShop />

      {/* Dedicated Solutions Section */}
      <DedicatedSolutions />

      {/* Stats Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-teal-700 overflow-hidden">
        {/* Multiple Wavy Bottom Borders - Overlapping */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg
            viewBox="0 0 1440 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48"
            preserveAspectRatio="none"
          >
            {/* First Wave - Bottom Layer (Darkest) */}
            <path
              d="M0,180 C200,160 400,190 600,170 C800,150 1000,180 1200,165 C1300,157 1400,162 1440,165 L1440,200 L0,200 Z"
              fill="#d1d5db"
            />
            {/* Second Wave - Middle Layer */}
            <path
              d="M0,160 C300,140 600,170 900,150 C1200,130 1440,160 1440,200 L0,200 Z"
              fill="#e5e7eb"
            />
            {/* Third Wave - Top Layer (Lightest) */}
            <path
              d="M0,140 C200,120 400,150 600,130 C800,110 1000,140 1200,125 C1300,117 1400,122 1440,125 L1440,200 L0,200 Z"
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
      </main>

      <Footer />
      </div>
    </>
  );
}
