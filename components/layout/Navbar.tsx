"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  RiGroupLine,
  RiTimeLine,
  RiGlobalLine,
  RiLineChartLine,
} from "react-icons/ri";

const stats = [
  { icon: RiGroupLine, value: "505", label: "visitors" },
  { icon: RiTimeLine, value: "0", label: "min avg" },
  { icon: RiGlobalLine, value: "12", label: "countries" },
  { icon: RiLineChartLine, value: "165", label: "this week" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 py-3 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="w-full pl-4 md:pl-8 pr-2 md:pr-4 flex items-center justify-end gap-3">
        {/* Analytics Pill */}
        <div
          className="
            hidden md:flex
            items-center
            gap-3
            px-3
            py-2
            rounded-full
            bg-card
            border
            border-border
            shadow-sm
            group
            hover:shadow-md
            transition-all
            duration-300
            cursor-default
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <Icon
                  size={16}
                  className="text-foreground shrink-0"
                />

                <div
                  className="
                    max-w-0
                    opacity-0
                    overflow-hidden
                    whitespace-nowrap
                    flex
                    items-center
                    gap-1
                    transition-all
                    duration-300
                    group-hover:max-w-[100px]
                    group-hover:opacity-100
                  "
                >
                  <span className="text-xs font-semibold text-foreground">
                    {stat.value}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-card border border-border shadow-sm">          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}