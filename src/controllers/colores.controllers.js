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

export const leerColor = async (req, res) => {
  try {
    const listaColores = await Color.find();
    res.status(200).json(listaColores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer color" });
  }
};

export const borrarColor = async (req, res) => {
  try {
    const eliminarColor = await Color.findByIdAndDelete(req.params.id);
    if (!eliminarColor) {
      return res.status(404).json({ mensaje: "Color no encontrado" });
    }
    res.status(200).json({ mensaje: "Color borrado con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar color" });
  }
};
export const leerColorPorId = async (req, res) => {
  try {
    const buscarColor = await Color.findById(req.params.id);
    if (!buscarColor) {
      return res.status(404).json({ mensaje: "Color no encontrado" });
    }
    res.status(200).json(buscarColor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener color" });
  }
};

export const editarColor = async (req, res) => {
  try {
    console.log("ID recibido:", req.params.id);
    console.log("Body recibido:", req.body);

    const colorEditado = await Color.findByIdAndUpdate(req.params.id, req.body);
    if (!colorEditado) {
      return res
        .status(404)
        .json({ mensaje: "Error al encontrar el color para editar" });
    }
    res.status(200).json({mensaje:"Color edita con exito"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al encontrar el color" });
  }
};
