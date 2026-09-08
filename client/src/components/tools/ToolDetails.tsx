import Container from "@/components/layout/Container";

import ToolHeader from "@/components/tools/ToolHeader";
import ToolContent from "@/components/tools/ToolContent";
import SimilarTools from "@/components/tools/SimilarTools";
import FeaturedSubcategories from "@/components/tools/FeaturedSubcategories";
import ToolViewTracker from "@/components/tools/ToolViewTracker";
import { Tool } from "@/types/tool";


type ToolDetailsProps = {
  tool: Tool;
  similarTools?: Tool[];
};


export default function ToolDetails({
  tool,
  similarTools = [],
}: ToolDetailsProps) {



  return (
    <main
      dir="rtl"
      className="min-h-screen bg-background"
    >

      <Container className="py-8">

      
<div className="grid grid-cols-1 gap-8 lg:grid-cols-[450px_minmax(0,1fr)]">

  {/* =========================
      SIDEBAR
  ========================= */}
 <ToolViewTracker toolId={tool._id} />
  <aside className="order-2 lg:order-1">
    <div className="space-y-8 lg:sticky lg:top-24">

      <SimilarTools
        tools={similarTools}
      />

      <FeaturedSubcategories
        subCategories={tool.subCategories}
      />

    </div>
  </aside>

  {/* =========================
      MAIN
  ========================= */}

  <article className="order-1 min-w-0 lg:order-2 lg:max-w-[780px]">

    <ToolHeader
      tool={tool}
    />


    <ToolContent
      content={tool.content}
    />

  </article>

</div>



      </Container>

    </main>
  );
}