import { api } from "@/lib/axios";
import { handleApiError } from "@/errors/ApiError";
import { Category } from "@/types/category";
import { CategoryBySlugResponse } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await api.get("/categories");

    return response.data.data.categories;
  } catch (error) {
    handleApiError(error);
  }
}

export async function getCategoryBySlug(
  slug: string
): Promise<CategoryBySlugResponse> {
  try {
    const { data } = await api.get(`/categories/${slug}`);

    return data.data;
  } catch (error) {
    handleApiError(error);
  }
}