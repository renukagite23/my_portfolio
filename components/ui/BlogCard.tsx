import Link from "next/link";
import Image from "next/image";
import {
  RiTimeLine,
  RiCalendarEventLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden h-full">
      {/* Featured Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-white/20 dark:bg-black/30 text-white border border-white/20 backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-medium">
          <span className="flex items-center gap-1">
            <RiCalendarEventLine size={14} />
            {post.publishedDate}
          </span>

          <span className="flex items-center gap-1">
            <RiTimeLine size={14} />
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        {/* Action Button */}
        <div className="pt-4 border-t border-border/60">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/btn hover:text-primary/80 transition-colors"
          >
            Read More
            <RiArrowRightLine
              size={16}
              className="transform group-hover/btn:translate-x-1.5 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}