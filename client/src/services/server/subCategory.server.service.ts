import "server-only";

import { MongoClient, ObjectId } from "mongodb";

import { SubCategory } from "@/types/subCategory";

type MongoCategory = {
  _id: ObjectId;
  name: string;
  slug: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type MongoSubCategory = {
  _id: ObjectId;
  category: MongoCategory | null;
  name: string;
  slug: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type GetAllSubCategoriesResponse = {
  subCategories: SubCategory[];
};

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined");
};

declare global {
  // eslint-disable-next-line no-var
  var mongoClient: MongoClient | undefined;
}

const client =
  global.mongoClient ??
  new MongoClient(mongoUri);

if (process.env.NODE_ENV !== "production") {
  global.mongoClient = client;
}

export async function getAllSubCategoriesServer(): Promise<GetAllSubCategoriesResponse> {
  await client.connect();

  const db = client.db();

  const subCategories =
    await db
      .collection<MongoSubCategory>("subcategories")
      .aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        {
          $unwind: {
            path: "$category",
            preserveNullAndEmptyArrays: true,
          },
        },
      ])
      .toArray();

  return {
    subCategories: subCategories.map((subCategory) => ({
      _id: subCategory._id.toString(),

      category: subCategory.category
      ? {
          _id: subCategory.category._id.toString(),
          name: subCategory.category.name,
          slug: subCategory.category.slug,
          description:
            subCategory.category.description ?? "",
          seoTitle:
            subCategory.category.seoTitle ?? "",
          seoDescription:
            subCategory.category.seoDescription ?? "",
          createdAt:
            subCategory.category.createdAt?.toISOString() ?? "",
          updatedAt:
            subCategory.category.updatedAt?.toISOString() ?? "",
        }
      : (null as never),

      name: subCategory.name,

      slug: subCategory.slug,

      description:
        subCategory.description ?? "",

      seoTitle:
        subCategory.seoTitle ?? "",

      seoDescription:
        subCategory.seoDescription ?? "",

      createdAt:
        subCategory.createdAt?.toISOString() ?? "",

      updatedAt:
        subCategory.updatedAt?.toISOString() ?? "",
    })),
  };
}