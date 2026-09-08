
import "server-only";
import { handleApiError } from "@/errors/ApiError";
import { api } from "@/lib/axios";

type SitemapTool = {
    slug: string;
  };
  
  export async function getToolsForSitemap(): Promise<SitemapTool[]> {
    try {
      const response = await api.get("/tools/sitemap", {
        headers: {
          "x-internal-secret":
            process.env.BACKEND_INTERNAL_SECRET,
        },
      });
  
      return response.data.data.tools;
    } catch (error) {
      handleApiError(error);
    }
  }