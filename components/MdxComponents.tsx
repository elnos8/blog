import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  img: ({ src, alt, ...props }) => {
    if (!src) return null;
    const isExternal = src.startsWith("http");
    if (isExternal) {
      return <img src={src} alt={alt ?? ""} {...props} />;
    }
    const path = src.startsWith("/") ? src : `/images/${src}`;
    return (
      <span className="block my-6 relative w-full min-h-[200px]">
        <Image
          src={path}
          alt={alt ?? ""}
          width={720}
          height={400}
          className="rounded-lg object-cover w-full h-auto"
        />
      </span>
    );
  },
};
