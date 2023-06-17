const express = require("express");

// crear servidor
const app = express();
app.use(express.json());
require("./base-orm/sqlite-init");  // crear base si no existe

// controlar ruta
app.get("/", (req, res) => {
  res.send("Backend DDS_TPI!");
});

const veterinarioRouter = require("./routes/veterinario");
app.use(veterinarioRouter);

const clientesRouter = require("./routes/clientes");
app.use(clientesRouter);

const consultasRouter = require("./routes/consultas");
app.use(consultasRouter);

const animalesRouter = require("./routes/animales");
app.use(animalesRouter);

const alimentosRouter = require("./routes/alimentos");
app.use(alimentosRouter);

app.get("/", (req, res) => {
  res.send("API Veterinaria :)");
});



if (!module.parent) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
  });
}
module.exports = app;
