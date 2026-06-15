import {
  RiReactjsFill,
  RiNodejsFill,
  RiPaintBrushLine,
  RiCloudFill,
  RiDatabase2Line,
  RiCodeBoxLine,
  RiServerLine,
  RiMacbookLine,
} from "react-icons/ri";

const skillCategories = [
  {
    title: "Backend",
    icon: RiNodejsFill,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    skills: ["Next.js", "Flask", "Node.js", "NPM", "Express.js", "VPS", "Git", "GitHub"],
  },
  {
    title: "Frontend",
    icon: RiReactjsFill,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: ["React", "Vite.js", "Next.js", "Material UI", "Shadcn UI", "Aceternity UI", "Magic UI", "TypeScript", "Tailwind CSS", "Redux", "HTML5"],
  },
  {
    title: "Styling Techniques & Tools",
    icon: RiPaintBrushLine,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    skills: ["Tailwind CSS", "CSS3", "Styled Components", "Bootstrap"],
  },
  {
    title: "API Skills",
    icon: RiCloudFill,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    skills: ["RESTful API Design", "Web Services API", "API Integration", "JSON & HTTP Methods", "Postman for API Testing"],
  },
  {
    title: "Database",
    icon: RiDatabase2Line,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Languages",
    icon: RiCodeBoxLine,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    skills: ["JavaScript", "Java core"],
  },
  {
    title: "Hosting Platforms",
    icon: RiServerLine,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: ["VPS", "GitHub", "Vercel", "Render", "Netlify"],
  },
  {
    title: "Operating System",
    icon: RiMacbookLine,
    color: "text-gray-500",
    bg: "bg-gray-500/10",
    border: "border-gray-500/20",
    skills: ["MacOS", "Windows"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-muted/50 dark:bg-muted/20 pt-6"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-black dark:bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
            </span>
            Technical Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            My Personal Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Things I&apos;ve practiced and improved over time.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ title, icon: Icon, color, bg, border, skills }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top bar */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-500" />

              <div className="p-6 flex-1">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg ${bg} ${border} border flex items-center justify-center`}>
                    <Icon className={color} size={18} />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{title}</h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-foreground/80 border border-border hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
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
