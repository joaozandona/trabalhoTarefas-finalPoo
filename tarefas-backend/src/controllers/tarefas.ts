import { Tarefa, tarefaModel } from "./../models/tarefas";
import { badRequest, internalServerError } from "./../services/util";
import { Request, Response } from "express";

const express = require("express");
const path = require("path");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const insertTarefa = (req: Request, res: Response) => {
  {
    const tarefa = req.body;
    if (!tarefa) {
      return badRequest(res, "Tarefa não informada");
    }
    if (!tarefa.name) {
      return badRequest(res, "Nome não informado");
    }
    if (!tarefa.prioridade) {
      return badRequest(res, "Prioridade não informada");
    }
  }
  const tarefa = req.body as Tarefa;
  tarefaModel
    .insertTarefa(tarefa)
    .then((id) => {
      res.json({ id });
    })
    .catch((err) => internalServerError(res, err));
};

const listTarefas = (req: Request, res: Response) => {
  tarefaModel
    .listTarefas()
    .then((tarefas) => {
      res.json(tarefas);
    })
    .catch((err) => internalServerError(res, err));
};

const concluiTarefa = (req: Request, res: Response) => {
  const tarefa = parseInt(req.params.id);
  if (!tarefa) {
    return badRequest(res, "Tarefa a ser concluida não foi informada");
  }
  tarefaModel
    .concluiTarefa(tarefa)
    .then((id) => {
      res.json({ id });
    })
    .catch((err) => internalServerError(res, err));
};

const alteraTarefa = (req: Request, res: Response) => {
  const tarefa = req.body as Tarefa;
  const tarefaId = parseInt(req.params.id);
  tarefaModel
    .alteraTarefa(tarefa, tarefaId)
    .then((id) => {
      res.json({ id });
    })
    .catch((err) => internalServerError(res, err));
};

const deletaTarefa = (req: Request, res: Response) => {
  const tarefaId = parseInt(req.params.id);
  tarefaModel
    .deletaTarefa(tarefaId)
    .then((id) => {
      res.json({ id });
    })
    .catch((err) => internalServerError(res, err));
};

const carregaTela = (req: Request, res: Response) => {};

export const tarefaController = {
  insertTarefa,
  listTarefas,
  concluiTarefa,
  alteraTarefa,
  deletaTarefa,
  carregaTela,
};
