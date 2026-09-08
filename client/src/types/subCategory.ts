import { Category } from "./category";

export interface SubCategory {
  _id: string;
  category: Category;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
  updatedAt: string;
}