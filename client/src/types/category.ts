
export interface Category {
    _id: string;
    name: string;
    slug: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface SubCategory {
    _id: string;
    category: string;
    name: string;
    slug: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface CategoryBySlugResponse {
    category: Category;
    subCategories: SubCategory[];
  }