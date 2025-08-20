import mongoose, { Schema } from "mongoose";
const colores = new Schema({
  nuevoColor: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 15,
    unique: true
  }
});

const Color = mongoose.model("colores", colores)

export default Color
