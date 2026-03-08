import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://my-portfolio-omega-wheat-25.vercel.app",
    },
    {
      url: "https://my-portfolio-omega-wheat-25.vercel.app/projects",
    },
    {
      url: "https://my-portfolio-omega-wheat-25.vercel.app/blog",
    },
    {
      url: "https://my-portfolio-omega-wheat-25.vercel.app/contact",
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `https://my-portfolio-omega-wheat-25.vercel.app/blog/${post.slug}`,
  }));

  return [...staticRoutes, ...blogRoutes];
}
