import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
  RiTwitterXFill,
  RiDownloadLine,
  RiArrowRightLine,
  RiBriefcaseLine,
  RiCodeSSlashLine,
  RiTeamLine,
  RiStackLine,
} from "react-icons/ri";

const stats = [
  {
    icon: RiBriefcaseLine,
    value: "1",
    label: "Years Experience",
    sub: "Professional Development",
  },
  {
    icon: RiCodeSSlashLine,
    value: "3",
    label: "Projects Completed",
    sub: "Delivered Successfully",
  },
  {
    icon: RiTeamLine,
    value: "30+",
    label: "Total Skills",
    sub: "And Growing Daily",
  },
  {
    icon: RiStackLine,
    value: "15+",
    label: "Technologies",
    sub: "Always learning more",
  },
];

const socials = [
  { href: "https://github.com/renukagite23", icon: RiGithubFill, label: "GitHub" },
  { href: "hhttps://www.linkedin.com/in/renuka-gite-0931b4345/", icon: RiLinkedinFill, label: "LinkedIn" },
  { href: "mailto:renuka.gite23@gmail.com", icon: RiMailFill, label: "Email" },
  // { href: "https://twitter.com", icon: RiTwitterXFill, label: "Twitter" },
];

export function Hero() {
  return (
    <section
      id="about"
      className="relative bg-background text-foreground py-8 md:py-12 overflow-hidden min-h-[75vh] flex items-center"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-24 left-24 w-2 h-2 bg-primary/40 rounded-full animate-pulse pointer-events-none" />
      <div className="absolute top-48 right-36 w-1 h-1 bg-primary/50 rounded-full animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-36 left-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Badge */}
          <div className="section-badge animate-fade-in-up">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-black dark:bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
            </span>
            Available for New Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight animate-fade-in-up delay-100">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Renuka Gite
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground animate-fade-in-up delay-200">
            MERN Stack Developer
          </p>

          {/* Bio */}
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-300">
            Passionate MERN Stack Developer specializing in <strong className="text-foreground">React.js, Next.js, Node.js, Express.js, and MongoDB</strong>. Dedicated to building modern, scalable, and high-performance web applications with clean code, intuitive user interfaces, and seamless user experiences.
          </p>

          {/* CTA Buttons + Socials */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-400">
            <a
              href="/Renuka_gite.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
            >
              <RiDownloadLine size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-background text-sm font-semibold hover:bg-muted transition-colors"
            >
              Contact Me
              <RiArrowRightLine size={16} />
            </a>
            {/* Social Icons */}
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-muted hover:border-primary/50 transition-all text-muted-foreground hover:text-primary"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up delay-500">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="group relative">
              <div className="stat-card">
                {/* Grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]" />
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={16} />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-extrabold text-foreground">
                      {value}
                    </p>
                    <p className="text-sm font-semibold text-foreground/80">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
