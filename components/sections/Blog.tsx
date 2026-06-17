import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/lib/blogData";

export function Blog() {
  return (
    <section
      id="blog"
      className="py-24 bg-background border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="section-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Insights & Ideas
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Latest Articles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I share insights about web development, software engineering, modern technologies, and my learning journey.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Blog;
