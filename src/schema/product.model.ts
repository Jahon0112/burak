import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
  ProductVolume,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    ProductStatus: {
      type: String,
      enum: Object.values(ProductStatus),
      default: ProductStatus.PAUSE,
    },

    ProductCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    ProductName: {
      type: String,
      required: true,
    },

    ProductPrice: {
      type: Number,
      required: true,
    },

    ProductLeftCount: {
      type: Number,
      required: true,
    },

    ProductSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },

    ProductVolume: {
      type: String,
      enum: ProductVolume,
      default: ProductVolume.ONE,
    },

    ProductDesc: {
      type: String,
      required: true,
    },

    ProductImages: {
      type: [String],
      default: [],
    },

    ProductViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }, //updated, createdAt
);

productSchema.index(
  { productName: 1, ProductSize: 1, ProductVolume: 1 },
  { unique: true },
);
export default mongoose.model("Product", productSchema);
