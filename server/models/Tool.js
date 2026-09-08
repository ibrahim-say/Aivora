const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    screenshot: {
      type: String,
      required: true,
    },

    websiteUrl: {
      type: String,
      required: true,
    },

    pricing: {
      type: String,
      default: "Call",
    },

    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],

    subCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true,
      },
    ],

    keywords: [
      {
        type: String,
        trim: true,
      },
    ],

    seoTitle: {
      type: String,
      trim: true,
    },

    seoDescription: {
      type: String,
      trim: true,
    },

    seoKeywords: [
      {
        type: String,
      },
    ],

    views: {
      type: Number,
      default: 0,
    },

    favorites: {
      type: Number,
      default: 0,
    },
    content: [
      {
        _id: false,
    
        tag: String,
    
        text: String,
    
        items: {
          type: [String],
          default: undefined
        },
        headers: {
          type: [String],
          default: undefined
        },
    
        rows: {
          type: [[String]],
          default: undefined
        }
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tool", toolSchema);
