import { RiBuilding2Line, RiCalendarLine, RiMapPinLine, RiArrowRightUpLine } from "react-icons/ri";

const experiences = [
  {
    company: "Paarsh Infotech Pvt Ltd",
    role: "Full Stack Developer Intern",
    type: "Internship",
    location: "Nashik, Maharashtra",
    start: "Nov 2025",
    end: "Present",
    description:
      "Full stack developer intern building modern web applications using Next.js and the MERN stack. Responsible for developing admin panels, student dashboards, REST APIs, and database-driven systems.",
    responsibilities: [
      "Developing full stack web applications using Next.js and MongoDB",
      "Building admin panels with authentication and role-based access",
      "Creating REST APIs and integrating backend services",
      "Implementing responsive UI using React and Tailwind CSS",
    ],
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux"],
  },
  {
    company: "Heuristic Technopark Pvt Ltd",
    role: "Software Test Engineer",
    type: "Full-time",
    location: "Nashik, Maharashtra",
    start: "Jan 2024",
    end: "Aug 2024",
    description:
      "Worked as a Software Test Engineer responsible for ensuring application quality through systematic testing processes and collaboration with development teams.",
    responsibilities: [
      "Conducted application testing and prepared test documentation",
      "Coordinated with development teams to improve system quality",
    ],
    tech: ["Manual Testing", "Test Documentation", "QA", "Bug Tracking", "Regression Testing"],
  },
  {
    company: "Sidhman Technologies",
    role: "Software Test Engineer",
    type: "Full-time",
    location: "Nashik, Maharashtra",
    start: "Jan 2020",
    end: "Dec 2023",
    description:
      "Performed comprehensive software quality assurance for web and mobile applications, executing various testing methodologies to ensure product reliability and performance.",
    responsibilities: [
      "Performed manual and functional testing of web and mobile applications",
      "Executed regression and integration testing",
      "Logged defects and collaborated with developers for resolution",
    ],
    tech: ["Manual Testing", "Functional Testing", "Regression Testing", "Integration Testing", "Mobile Testing"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-background via-background to-muted/50 dark:from-background dark:via-background/80 dark:to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="section-badge">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-black dark:bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
            </span>
            Career Growth &amp; Experience
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Professional Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My career path and the companies where I&apos;ve made an impact
          </p>
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-500" />

              <div className="p-6 sm:p-8">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <RiBuilding2Line className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-primary font-semibold">{exp.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 text-sm text-muted-foreground shrink-0">
                    <span className="inline-flex items-center gap-1.5">
                      <RiCalendarLine size={14} />
                      {exp.start} — {exp.end}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <RiMapPinLine size={14} />
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-6">
                  {exp.responsibilities.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <RiArrowRightUpLine className="text-primary shrink-0 mt-0.5" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
