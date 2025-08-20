import Color from "../models/colores.js";
export const test = (req, res) => {
  res.status(200);
  res.send("hola desde back de colores");
};

export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();
    res.status(201).json({ mensaje: "El color fue agregado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ mensaje: "Error al agregar el color" });
  }
};


