import { tarefaController } from "./../controllers/tarefas";
import { Router, Response } from "express";

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

const tarefaRouter = Router();
tarefaRouter.post("/", tarefaController.insertTarefa);
tarefaRouter.get("/", tarefaController.listTarefas);
tarefaRouter.put("/conclui/:id/:concluida", tarefaController.concluiTarefa);
tarefaRouter.put("/:id", tarefaController.alteraTarefa);
tarefaRouter.delete("/:id", tarefaController.deletaTarefa);

export { tarefaRouter };
