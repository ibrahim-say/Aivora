import { api } from "@/lib/axios";
import { handleApiError } from "@/errors/ApiError";
import { SubCategory } from "@/types/subCategory";

type GetSubCategoryBySlugResponse = {
  subCategory: SubCategory;
};

type GetAllSubCategoriesResponse = {
  subCategories: SubCategory[];
};

export async function getSubCategoryBySlug(
  slug: string
): Promise<GetSubCategoryBySlugResponse> {
  try {
    const response = await api.get(`/subcategories/${slug}`);

    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function getAllSubCategories(): Promise<GetAllSubCategoriesResponse> {
  try {
    const response = await api.get("/subcategories");

    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
}