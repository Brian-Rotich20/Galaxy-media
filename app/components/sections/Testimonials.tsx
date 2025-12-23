import Image from "next/image";

const logos = [
  { src: "/logos/alumil.jpg", alt: "Alumil" },
  { src: "/logos/intellisoft.png", alt: "Intellisoft" },
  { src: "/logos/jacaranda-health-1.png", alt: "Jacaranda Health" },
  { src: "/logos/mercy-corps-logo-1.png", alt: "Mercy Corps" },
  { src: "/logos/kenyatta-university.jpg", alt: "Kenyatta University" },
  { src: "/logos/Primerio.jpg", alt: "Primerio" },
];

const ClientLogos = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-3">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-400">
            We've partnered with organizations that value quality storytelling
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative h-16 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ClientLogos;
