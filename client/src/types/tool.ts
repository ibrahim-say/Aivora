export interface ContentBlock {
  tag: string;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

export interface ToolSubCategory {
  _id: string;
  name: string;
  slug: string;
  category?: string;
}



export interface Tool {
  _id: string;
  name: string;
  slug: string;
  description: string;
  screenshot: string;
  websiteUrl: string;
  pricing: string;
  views: number;
  favorites: number;

  // MongoDB: بيانات مختصرة
  subCategories: ToolSubCategory[];

  // Meilisearch: بيانات كاملة للعرض والفلترة
  subCategoryData?: ToolSubCategory[];

  content: ContentBlock[];
}