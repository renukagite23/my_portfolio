import Link from "next/link";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiTwitterXFill } from "react-icons/ri";

const socials = [
  { href: "https://github.com/renukagite23", icon: RiGithubFill, label: "GitHub" },
  { href: "https://linkedin.com/in/renukagite23", icon: RiLinkedinFill, label: "LinkedIn" },
  { href: "mailto:renuka.gite23@gmail.com", icon: RiMailFill, label: "Email" },
  // { href: "https://twitter.com", icon: RiTwitterXFill, label: "Twitter" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} <span className="font-semibold text-foreground">Renuka Gite</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
