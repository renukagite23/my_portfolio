import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";

const projects = [
  {
    title: "Riva Agro Exports Website",
    description:
      "A complete business website for an agro export company, featuring a professional public-facing site and a fully-featured admin panel. Built product management with full CRUD operations and scalable architecture using Next.js API routes.",
    bullets: [
      "Developed complete business website with admin panel",
      "Implemented product management with full CRUD operations",
      "Built scalable architecture using Next.js API routes",
    ],
    tech: ["Next.js", "MongoDB Atlas", "Tailwind CSS", "Redux"],
    github: "https://github.com/renukagite23",
    live: "https://rivaagrowexport.com",
    color: "from-green-500/20 to-emerald-500/10",
    num: "01",
  },
  {
    title: "Paarsh E-Learning Platform",
    description:
      "A full-stack e-learning platform with a student-facing dashboard and a comprehensive admin panel. Students can view courses, track progress, and access user-specific data. Admins manage courses, workshops, and user enquiries.",
    bullets: [
      "Developed full-stack e-learning platform with student dashboard and admin panel",
      "Admin panel manages courses, workshops, and user enquiries",
      "Student dashboard displays courses, progress, and user-specific data",
      "Implemented API integration and structured component architecture",
    ],
    tech: ["Next.js", "MongoDB Atlas", "Tailwind CSS", "Redux"],
    github: "https://github.com/renukagite23",
    live: "https://paarshelearning.com",
    color: "from-blue-500/20 to-cyan-500/10",
    num: "02",
  },
  {
    title: "Temple Trust Management System",
    description:
      "A full-stack multilingual temple trust website with a professional admin panel. Features donation management, report generation, trustee management, and dynamic content sections for events, gallery, president messages, and temple trust information.",
    bullets: [
      "Developed a full-stack multilingual temple trust website with a professional admin panel",
      "Built donation management, report generation, trustee management, and content management modules",
      "Implemented role-based admin functionality with CRUD operations and secure API integration",
      "Developed dynamic sections for events, gallery, president messages, and temple trust information",
    ],
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
      className="py-24 bg-background"
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
        <div className="grid gap-20">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative grid gap-8 md:grid-cols-2 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
              }`}
            >
              {/* Visual Card */}
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group-hover:border-primary/40 transition-all duration-300 shadow-sm group-hover:shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-70`} />
                {/* Grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:20px_20px]" />
                {/* Project number watermark */}
                <div className="relative z-10 text-center select-none px-6">
                  <p className="text-8xl font-black text-foreground/5">{project.num}</p>
                  <p className="text-base font-bold text-foreground/30 mt-1">{project.title}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

                {/* Bullet points */}
                <ul className="space-y-1.5">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold shrink-0 mt-0.5">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

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
