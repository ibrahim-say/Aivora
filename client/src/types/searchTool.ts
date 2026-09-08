export interface SearchTool {
    _id: string;
    name: string;
    slug: string;
    description: string;
    screenshot: string;
    websiteUrl: string;
    pricing: string;
    views: number;
    favorites: number;
  
    categories: {
      _id: string;
    }[];
  
    // IDs فقط للـ filtering في Meilisearch
    subCategories: string[];
  
    // البيانات الكاملة للعرض
    subCategoryData: {
      _id: string;
      name: string;
      slug: string;
      category: string | null;
    }[];
  
  }