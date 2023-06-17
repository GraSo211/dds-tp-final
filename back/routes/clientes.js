const express = require("express");
const router = express.Router();

const db = require("../base-ORM/sequelize-init");

router.get("/api/clientes", async function (req, res, next) {
  let data = await db.clientes.findAll({
    attributes: ["id", "apellido", "nombre", "fechaNacimiento", "direccion"],
  });
  res.json(data);
});


router.get("/api/clientes/:id", async function (req, res, next) {
    let data = await db.clientes.findAll({
      attributes: ["id", "apellido", "nombre", "fechaNacimiento", "direccion"],
      where: { id: req.params.id },
    });
    if (data.length > 0 ) res.json(data[0]);
    else res.status(404).json({mensaje:'No econtrado!!'})
  });

  router.put("/api/clientes/:id", async (req, res) => {
    let item = await db.clientes.findOne({
      attributes: [
        "id",
        "apellido",
        "nombre",
        "fechaNacimiento",
        "direccion",
      ],
      where: { id: req.params.id },
    });
    if (!item) {
      res.status(404).json({ message: "Cliente no encontrado :(" });
      return;
    }
      (item.id = req.body.id),
      (item.apellido = req.body.apellido),
      (item.nombre = req.body.nombre),
      (item.fechaNacimiento = req.body.fechaNacimiento),
      (item.direccion = req.body.direccion),
      await item.save();
    res.sendStatus(200);
  });

  router.post("/api/clientes/", async (req, res) => {
    let data = await db.clientes.create({
      apellido: req.body.apellido,
      nombre: req.body.nombre,
      fechaNacimiento: req.body.fechaNacimiento,
      direccion: req.body.direccion,
    });
    res.status(200).json(data.dataValues);
  });
  
  router.delete("/api/clientes/:id", async (req, res) => {
    let filasBorradas = await db.clientes.destroy({
      where: { id: req.params.id },
    });
    if (filasBorradas == 1) res.sendStatus(200);
    else res.sendStatus(404);
  });
  

module.exports = router;

