import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.gsap) {
        const { gsap, ScrollTrigger } = window;

        // Simple fade-in for service cards
        gsap.utils
          .toArray(".service-card")
          .forEach((card: any, index: number) => {
            gsap.fromTo(
              card,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.4,
                delay: index * 0.05,
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          });

        // Simple fade-in for special offering
        gsap.fromTo(
          ".special-offering",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: ".special-offering",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: "fas fa-palette",
      title: "Web Design",
      description:
        "Creating visually stunning and user-friendly interface designs that captivate and engage users.",
    },
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Building responsive, performant web applications using modern frameworks and technologies.",
    },
    {
      icon: "fas fa-magic",
      title: "Interactive Prototypes",
      description:
        "Developing interactive prototypes with advanced animations and micro-interactions.",
    },
    {
      icon: "fas fa-cube",
      title: "3D Web Experiences",
      description:
        "Creating immersive 3D web experiences using Three.js and WebGL technologies.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive frontend development services to bring your
            digital vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card glass-effect p-6 rounded-2xl text-center hover:scale-105 transform transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-electric to-neon rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <i className={`${service.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Special Offering
        <div className="special-offering bg-gradient-to-r from-electric/10 to-neon/10 p-8 rounded-2xl border border-electric/20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-electric to-neon rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-file-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Custom Animated Resume Sites</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Stand out from the crowd with a tailored single-page CV featuring motion graphics, interactive elements, 
              and personalized branding that showcases your professional story in a unique way.
            </p>
            <button className="bg-gradient-to-r from-electric to-neon px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300">
              Learn More
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
