import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiArrowLeftLine, RiTimeLine, RiCalendarEventLine } from "react-icons/ri";
import { blogPosts } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Renuka Gite Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.publishedDate).toISOString(),
      authors: ["Renuka Gite"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // A very simple custom formatter for our data structure to render styled paragraphs, subheadings, lists and code blocks
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Handle Headings
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4 tracking-tight">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("#### ")) {
        return (
          <h4 key={index} className="text-xl font-bold text-foreground mt-6 mb-3 tracking-tight">
            {trimmed.replace("#### ", "")}
          </h4>
        );
      }

      // Handle Unordered Lists
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").map((line) => line.replace("- ", "").trim());
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2 text-muted-foreground leading-relaxed">
            {items.map((item, i) => {
              // Parse simple bold tags **text**
              return <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />;
            })}
          </ul>
        );
      }

      // Handle Ordered Lists
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s/, "").trim());
        return (
          <ol key={index} className="list-decimal pl-6 my-4 space-y-2 text-muted-foreground leading-relaxed">
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
            ))}
          </ol>
        );
      }

      // Handle Code Blocks
      if (trimmed.startsWith("```")) {
        const lines = trimmed.split("\n");
        const language = lines[0].replace("```", "").trim();
        const code = lines.slice(1, -1).join("\n");
        return (
          <div key={index} className="my-6 rounded-lg overflow-hidden border border-border shadow-sm">
            {language && (
              <div className="bg-muted px-4 py-1.5 text-xs text-muted-foreground border-b border-border font-mono flex items-center justify-between">
                <span>{language}</span>
              </div>
            )}
            <pre className="p-4 bg-muted/40 font-mono text-sm overflow-x-auto text-foreground/90">
              <code>{code}</code>
            </pre>
          </div>
        );
      }

      // Default to Paragraph
      return (
        <p
          key={index}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }}
        />
      );
    });
  };

  // Helper to format simple bold **text** and inline code `code`
  const formatInlineMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/`(.*?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">$1</code>');
  };

  return (
    <article className="min-h-screen bg-background pb-24">
      {/* Article Header Background (Premium Gradient banner) */}
      <div className={`relative w-full h-[250px] sm:h-[350px] bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo}`}>
        {/* Subtle geometric pattern/grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />

        {/* Floating Back Link */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 dark:bg-black/85 text-foreground hover:text-primary hover:shadow-md transition-all text-sm font-semibold border border-border/10"
          >
            <RiArrowLeftLine size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Article Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl -mt-24 sm:-mt-32 relative z-20">
        <div className="bg-card border border-border shadow-xl rounded-2xl p-6 sm:p-10 md:p-12">
          {/* Header Info */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground border-y border-border/60 py-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                  RG
                </div>
                <span className="font-semibold text-foreground">Renuka Gite</span>
              </div>
              <div className="flex items-center gap-1">
                <RiCalendarEventLine size={16} />
                {post.publishedDate}
              </div>
              <div className="flex items-center gap-1">
                <RiTimeLine size={16} />
                {post.readingTime}
              </div>
            </div>
          </div>

          {/* Article Excerpt */}
          <p className="text-lg sm:text-xl font-medium text-foreground/80 border-l-4 border-primary pl-4 py-2 my-6 italic bg-muted/30">
            {post.excerpt}
          </p>

          {/* Article Body Content */}
          <div className="prose dark:prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Author Box */}
          <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md shrink-0">
              RG
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-foreground text-lg">Written by Renuka Gite</h4>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                Passionate MERN Stack Developer building modern, scalable, and high-performance web applications with React, Next.js, Node.js, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
