import { useEffect } from "react";
import profileImage from "../assets/whatsapp_profile.jpeg";

export default function About() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.gsap) {
        const { gsap, ScrollTrigger } = window;

        gsap.fromTo(
          ".about-content",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: ".about-content",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".about-image",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: ".about-image",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.utils.toArray(".skill-tag").forEach((tag: any, index: number) => {
          gsap.fromTo(
            tag,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.3,
              delay: index * 0.05,
              scrollTrigger: {
                trigger: tag,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // const skills = [
  //   "ReactJS",
  //   "Tailwind CSS",
  //   "GSAP",
  //   "Framer Motion",
  //   "Three.js",
  //   "WebGL",
  // ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a software engineer with a strong interest in building
              thoughtful and reliable digital solutions. My experience spans
              frontend development, backend systems, cloud infrastructure, and
              AI-powered applications. I enjoy working across the stack and
              thrive on solving real-world problems through clean, purposeful
              code.
            </p>
            {/* <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm pursuing my master’s in Information Systems & Technology with
              a perfect 4.0 GPA. My interests include frontend design, smooth
              animations, 3D web graphics, and delivering experiences that feel
              both beautiful and functional.
            </p> */}

            <div className="flex flex-wrap gap-3">
              <span
                className="skill-tag px-4 py-2 bg-electric/10 text-electric rounded-full text-sm font-medium"
                title="React.js, Tailwind CSS, GSAP, Framer Motion, Three.js, WebGL"
              >
                Frontend
              </span>
              <span
                className="skill-tag px-4 py-2 bg-electric/10 text-electric rounded-full text-sm font-medium"
                title="Node.js, Express, MongoDB, PostgreSQL, REST APIs, GraphQL"
              >
                Backend
              </span>
              <span
                className="skill-tag px-4 py-2 bg-electric/10 text-electric rounded-full text-sm font-medium"
                title="OpenAI API, LangChain, Prompt Engineering, Python, Scikit-learn"
              >
                AI/ML
              </span>
              <span
                className="skill-tag px-4 py-2 bg-electric/10 text-electric rounded-full text-sm font-medium"
                title="Docker, AWS, CI/CD, Vercel, GitHub Actions"
              >
                Cloud & DevOps
              </span>
            </div>
          </div>

          <div className="relative about-image">
            {/* Use public folder path for the image */}
            <img
              src={profileImage}
              alt="Venkata Vishal Sitamraju"
              className="rounded-2xl shadow-2xl w-full h-auto animate-float"
            />

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-electric to-neon rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-neon to-electric rounded-full opacity-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
