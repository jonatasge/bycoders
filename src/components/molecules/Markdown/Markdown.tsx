import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

export type MarkdownProps = ReactMarkdownOptions;

export const Markdown = ({ className, ...props }: MarkdownProps) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw as never]}
      className={`markdown-body p-2 ${className || ""}`}
      {...props}
    />
  );
};
