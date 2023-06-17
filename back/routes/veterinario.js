const express = require("express");
const router = express.Router();
const { Op, ValidationError } = require("sequelize");
const db = require("../base-ORM/sequelize-init");

router.get("/api/veterinarios", async function (req, res, next) {
  let where = {};
  if (req.query.legajo != undefined && req.query.legajo !== "") {
    where.legajo = {
      [Op.like]: "%" + req.query.legajo + "%",
    };
  }
  let items = await db.veterinarios.findAndCountAll({
    attributes: [
        "legajo",
        "nombre",
        "matricula",
        "fechaRegistro",
        "celular"
    ],
    order: [["legajo", "ASC"]],
    where,
  });

  res.json(items.rows);
});

router.get("/api/veterinarios/:legajo", async function (req, res, next) {
    
    let data = await db.veterinarios.findAll({
      attributes:["legajo", "nombre", "matricula", "fechaRegistro", "celular",],
      where: { Legajo: req.params.legajo },
    });
    if (data.length > 0 ) res.json(data[0]);
    else res.status(404).json({mensaje:'No econtrado!!'})
  });

router.post("/api/veterinarios/", async (req, res) => {
    let data = await db.veterinarios.create({
        legajo: req.body.legajo,
        nombre: req.body.nombre,
        matricula: req.body.matricula,
        fechaRegistro: req.body.fechaRegistro,
        celular: req.body.celular,      
    });
    res.status(200).json(data.dataValues);
  });
  
router.put("/api/veterinarios/:legajo", async (req, res) => {
    let item = await db.veterinarios.findOne({
        attributes: ["Legajo", "Nombre", "Matricula", "FechaRegistro", "Celular",],
        where: { legajo: req.params.legajo },
    });
    if (!item) {
      res.status(404).json({ message: "Veterinario no encontrado!! :(" });
      return;
    }
      (item.legajo = req.body.legajo),
      (item.nombre = req.body.nombre),
      (item.matricula = req.body.matricula),
      (item.fechaRegistro = req.body.fechaRegistro),
      (item.celular = req.body.celular),  
          await item.save();
    res.sendStatus(200);
});
  
router.delete("/api/veterinarios/:legajo", async (req, res) => {
    let filasBorradas = await db.veterinarios.destroy({
      where: { Legajo: req.params.legajo },
    });
    if (filasBorradas == 1) res.sendStatus(200);
    else res.sendStatus(404);
});
  
module.exports = router;