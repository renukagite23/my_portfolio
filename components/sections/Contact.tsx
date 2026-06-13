"use client";

import { useState } from "react";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiLinkedinFill,
  RiGithubFill,
  RiSendPlaneLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import emailjs from "@emailjs/browser";
const contactInfo = [
  {
    icon: RiMailLine,
    label: "Email",
    value: "renuka.gite23@gmail.com",
    href: "mailto:renuka.gite23@gmail.com",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: RiPhoneLine,
    label: "Phone",
    value: "+91 8983232058",
    href: "tel:+918983232058",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: RiMapPinLine,
    label: "Location",
    value: "Nashik, Maharashtra, India",
    href: "#",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: RiLinkedinFill,
    label: "LinkedIn",
    value: "linkedin.com/in/renuka-gite-0931b4345/",
    href: "https://linkedin.com/in/renuka-gite-0931b4345/",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

const whyConnect = [
  "Quick response within 24–48 hours",
  "Professional collaboration opportunities",
  "Open to freelance projects and consulting",
  "Technical expertise and problem-solving",
  "Friendly and approachable communication",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("SUCCESS!", response);

      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);

      alert(
        error?.text ||
        error?.message ||
        JSON.stringify(error) ||
        "Failed to send message"
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/50 dark:bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-badge">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-black dark:bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
            </span>
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to collaborate? I&apos;m always open to new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left — info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Reach out through any of the channels below — I&apos;m always happy to connect.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={color} size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium">{label}</p>
                    <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* GitHub card */}
            <a
              href="https://github.com/renukagite23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center shrink-0">
                <RiGithubFill className="text-gray-500" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">GitHub</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  github.com/renukagite23
                </p>
              </div>
            </a>
          </div>

          {/* Right — form */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border flex flex-col shadow-sm">
            <h3 className="text-2xl font-bold mb-1">Send a Message</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Have a question or want to work together? Drop me a message!
            </p>

            {sent && (
              <div className="mb-4 flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium">
                <RiCheckboxCircleLine size={18} />
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium">Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow hover:shadow-primary/25"
              >
                <RiSendPlaneLine size={16} />
                Send Message
              </button>
            </form>

            {/* Why connect */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-base font-semibold mb-3">Why Connect With Me?</h4>
              <ul className="space-y-2">
                {whyConnect.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
