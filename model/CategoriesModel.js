import { Schema, models, model } from "mongoose";

const CatogoriesSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = models.Categoria || model("Categoria", CatogoriesSchema);
export default Dataset;
