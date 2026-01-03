import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[600px] sm:h-[700px] lg:h-[800px]">
        <Image
          src="/images/hero/imgi_1_04194f17ef59ef1e04194f17ef59ef1eHomePage-scaled.jpg"
          alt="Hero illustration"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
