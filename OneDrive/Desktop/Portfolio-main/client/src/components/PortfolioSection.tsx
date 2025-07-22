import React from "react";
import scriptSentryThumbnail from "../assets/ScriptSentry_Thumbnail.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

// ✅ Move this outside to avoid re-instantiating on every render
const projects: Project[] = [
  {
    id: 0,
    title: "ScriptSentry – AI Contract Analyzer",
    description:
      "An AI-powered legal contract analyzer that identifies risky clauses, scores document safety, and offers red-flag summaries for freelancers and small businesses.",
    image: scriptSentryThumbnail,
    technologies: [
      "React",
      "Node.js",
      "OpenAI API",
      "JWT",
      "AWS",
      "Tailwind CSS",
    ],
    category: "Web App",
    liveUrl: "https://script-sentry.onrender.com/",
    githubUrl: "https://github.com/vishal1122-ai/ScriptSentry",
  },
  {
    id: 1,
    title: "Freelance Manager Dashboard",
    description:
      "A dashboard system that helps freelancers track projects, deadlines, client messages, and earnings in one place.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/vishal1122-ai/WebMind",
  },
  {
    id: 2,
    title: "Modern Portfolio Template",
    description:
      "A sleek, customizable portfolio template with dynamic theming and smooth scroll animations.",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&h=600",
    technologies: ["Next.js", "GSAP", "Tailwind CSS"],
    category: "Landing Page",
    liveUrl: "#",
    githubUrl: "#",
  },
];

// ✅ Memoized project card for better rendering
const ProjectCard = React.memo(({ project }: { project: Project }) => (
  <div key={project.id} className="portfolio-card group h-96">
    <div className="portfolio-card-inner">
      {/* Front Face */}
      <div className="portfolio-card-front bg-white dark:bg-dark-card text-black dark:text-white shadow-xl">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 bg-electric/10 text-electric rounded-full text-xs font-medium">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Back Face */}
      <div className="portfolio-card-back bg-gradient-to-br from-electric to-neon text-black dark:text-white">
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-sm mb-4 opacity-90">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/20 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href={project.liveUrl}
              className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-4 rounded-lg text-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Live Site
            </a>
            <a
              href={project.githubUrl}
              className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-4 rounded-lg text-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mr-2"></i>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of selected projects demonstrating expertise in modern
            web technologies and creative design.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
