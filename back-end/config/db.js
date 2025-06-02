import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexao Completada com Sucesso");
  } catch (error) {
    console.log("Conexao Completada sem Sucesso", error);
  }
};
