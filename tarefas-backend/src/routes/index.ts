import { tarefaController } from "./../controllers/tarefas";
import Router, { Application } from "express";
import { tarefaRouter } from "./tarefas";

export const useRoutes = (app: Application) => {
  const apiRouter = Router();
  apiRouter.use("/tarefa", tarefaRouter);

  app.use("/api/v1", apiRouter);
};
