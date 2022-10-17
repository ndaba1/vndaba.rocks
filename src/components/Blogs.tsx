import { useAutoAnimate } from "@formkit/auto-animate/react";
import { LinkIcon } from "@heroicons/react/20/solid/index";
import type { MDXInstance } from "astro";
import { useState } from "react";

export function BlogsBody({ content }: { content: MDXInstance<Record<string, any>>[] }) {
  const [blogs, setBlogs] = useState(content);
  const [listRef] = useAutoAnimate();

  const handleChange = (e: any) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    if (query.trim().length) {
      const results = content.filter((b) => {
        const tags: string[] = b.frontmatter.tags;
        if (tags.some((t) => t.toLowerCase().includes(query))) return true;
        if (b.frontmatter.title.toLowerCase().includes(query)) return true;
        if (b.frontmatter.slug.toLowerCase().includes(query)) return true;
      });
      setBlogs(results);
    } else {
      setBlogs(content);
    }
  };

  return (
    <div>
      <div className="w-full md:w-2/3">
        <input
          type="text"
          className="w-full p-4 border border-black/30 dark:border-white/20 rounded-lg bg-transparent text-lg"
          placeholder="Enter search value to filter articles"
          onChange={handleChange}
        />
      </div>
      <section className="!mt-10 grid gap-6 grid-cols-1 md:grid-cols-3" ref={listRef}>
        {blogs.map((b: any, idx) => {
          return (
            <a href={`/blog/${b.frontmatter.slug}`} key={idx}>
              <div className="rounded-lg space-y-4 cursor-pointer text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700/30 p-5 ring-1 ring-zinc-100 dark:ring-zinc-300/10 hover:shadow-lg group transition relative">
                <span className="line-clamp-1 font-medium !text-2xl">{b.frontmatter.title}</span>
                <p className="dimmed line-clamp-4 text-lg">{b.frontmatter.excerpt}</p>
                <div className="flex items-center gap-3">
                  {b.frontmatter.tags.map((i: string, idx: number) => (
                    <span key={idx} className="text-sm bg-green-300 dark:bg-green-600/30 rounded-3xl px-2">
                      #{i}
                    </span>
                  ))}
                </div>
                <div className="flex items-center group-hover:text-teal-600">
                  <LinkIcon className="mr-2 h-5 w-5" />
                  <span className="font-medium">Read more</span>
                </div>
              </div>
            </a>
          );
        })}
      </section>
      {!blogs.length && (
        <div className="my-10 flex items-center justify-center text-center dimmed text-2xl">
          <span className="max-w-xl">
            No blog posts could be found with a slug, title or tag matching the provided search value
          </span>
        </div>
      )}
    </div>
  );
}
