import express from "express";
// import { data } from "./database.js";

const app = express();
const PORT = 3000;

app.get("/api/characters", async (req, res) => {
  const response = await fetch("https://dragonball-api.com/api/characters") 

  const data = await response.json()

  const arrayData = data.items

  return res.status(200).json({items:arrayData});
});

app.get("/api/characters/:id", async(req, res) => {
  const id = Number(req.params.id); // por parametros significa que se recibe un id en la URL
  
  if(isNaN(id)){
    return res.status(400).json({
      message: "Invalid parameter: ID must be a number",
      error: "Bad Request",
      statusCode: 400,
    });
  }

  const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)

  const data = await response.json()

  if (!data) {
    return res.status(400).json({
      message: "Character ID not found",
      error: "Bad Request",
      statusCode:400,
    })
  }

  res.status(200).json({character:data})
});

app.use((req, res) => {
  res.status(404).json({
  message: "No such file or directory'",
  error: "Not Found",
  statusCode: 404
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
