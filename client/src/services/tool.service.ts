import { api } from "@/lib/axios";
import { handleApiError } from "@/errors/ApiError";
import { Tool } from "@/types/tool";
import { SearchTool } from "@/types/searchTool";

type GetToolsParams = {
  category?: string;
  subCategory?: string;
  pricing?: string;
  page?: number;
  limit?: number;
  sort?: string;
  q?: string;
};

type ToolsResponse = {
  tools: SearchTool[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
  };
};

type GetToolBySlugResponse = {
  tool: Tool;
  similarTools: Tool[];
};

export async function getTools(
  params?: GetToolsParams
): Promise<ToolsResponse> {
  try {
    const response = await api.get("/tools", {
      params,
    });

    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function getToolBySlug(
  slug: string
): Promise<GetToolBySlugResponse> {
  try {
    const response = await api.get(
      `/tools/${slug}`
    );

    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function incrementToolViews(
  id: string
): Promise<{ views: number }> {
  try {
    const response = await api.post(
      `/tools/${id}/view`
    );

    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
}

