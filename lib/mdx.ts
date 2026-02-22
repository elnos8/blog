import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export const mdxOptions = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
};
