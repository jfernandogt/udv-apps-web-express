import express from "express";
import Routes from "./routes/index.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

Routes(app);

app.listen(port, () => {
  // se inicia el servidor en el puerto 3000 o en el puerto que se le asigne
  console.log(`app listening at http://localhost:${port}`); // se imprime un mensaje en la consola de que el servidor esta corriendo en el puerto 3000
});
