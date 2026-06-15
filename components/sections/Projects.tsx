import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";

const projects = [
  {
    title: "Riva Agro Exports",
    image: "/projects/riva-agro.png",
    description:
      "Developed complete business website with admin panel. Implemented product management with full CRUD operations and built a scalable architecture using Next.js API routes.",
    tech: ["Next.js", "MongoDB Atlas", "Tailwind CSS", "Redux"],
    github: "https://github.com/renukagite23",
    live: "https://rivaagrowexport.com",
    color: "from-green-500/20 to-emerald-500/10",
    num: "01",
  },
  {
    title: "Paarsh E-Learning Platform",
    image: "/projects/paarsh-elearning.png",
    description:
      "Developed a full-stack e-learning platform with a student dashboard and admin panel. The admin panel manages courses, workshops, and user enquiries, while the student dashboard displays courses, progress, and user-specific data. Implemented API integration and structured component architecture.",
    tech: ["Next.js", "MongoDB Atlas", "Tailwind CSS", "Redux"],
    github: "https://github.com/renukagite23",
    live: "https://paarshelearning.com",
    color: "from-blue-500/20 to-cyan-500/10",
    num: "02",
  },
  {
    title: "Temple Trust Management System",
    image: "/projects/temple-trust.png",
    description:
      "Developed a full-stack multilingual temple trust website with a professional admin panel. Built modules for donation management, report generation, trustee management, and content management. Implemented role-based admin functionality with CRUD operations and secure API integration, alongside dynamic sections for events, gallery, and temple information.",
    tech: ["Next.js", "MongoDB Atlas", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com/renukagite23",
    live: "https://kulachar-nidhi.vercel.app/",
    color: "from-orange-500/20 to-amber-500/10",
    num: "03",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-background pt-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-badge">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-black dark:bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
            </span>
            Recent Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real-world projects I&apos;ve built and shipped
          </p>
        </div>

        {/* Projects list */}
        <div className="grid gap-16">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative grid gap-8 md:grid-cols-2 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
                }`}
            >
              {/* Visual Card */}
              {/* Project Thumbnail */}
              <div className="group relative overflow-hidden rounded-2xl border border-border shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-black rounded-lg font-semibold"
                    >
                      View Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-5">
                <div>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    Project {project.num}
                  </span>
                  <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors shadow hover:shadow-primary/25"
                  >
                    <RiExternalLinkLine size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-background text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    <RiGithubFill size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
