import ContentRenderer from "@/components/tools/ContentRenderer";

import { ContentBlock } from "@/types/tool";

type ToolContentProps = {
  content?: ContentBlock[];
};

export default function ToolContent({
  content,
}: ToolContentProps) {
  if (
    !content ||
    content.length === 0
  ) {
    return null;
  }

  return (
    <section className="mt-10">
      <ContentRenderer
        content={content}
      />
    </section>
  );
}