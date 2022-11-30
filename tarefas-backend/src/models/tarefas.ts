import { dbQuery } from "./../services/db";
export type Tarefa = {
  id: number;
  name: string;
  concluida: boolean;
  prioridade: number;
  desc: string;
};

const insertTarefa = async (tarefa: Tarefa) => {
  await dbQuery(
    `INSERT INTO tarefa (name, concluida, prioridade, desc) VALUES (?, ?, ?, ?)`,
    [tarefa.name, tarefa.concluida, tarefa.prioridade, tarefa.desc]
  );
  let retorno = await dbQuery(
    `SELECT seq AS id FROM sqlite_sequence WHERE name = 'tarefa'`
  );
  return retorno[0].id as number | undefined;
};

const listTarefas = async () => {
  const retorno = await dbQuery(`SELECT * FROM tarefa`);
  return retorno as Tarefa[];
};

const concluiTarefa = async (tarefa: number, concluida: number) => {
  if (concluida == 1) concluida = 0;
  else concluida = 1;
  await dbQuery(`UPDATE tarefa SET concluida = ? WHERE id = ?`, [
    concluida,
    tarefa,
  ]);
  let retorno = await dbQuery(`SELECT id, concluida FROM tarefa WHERE id = ?`, [
    tarefa,
  ]);
  return retorno[0] as Tarefa;
};

const alteraTarefa = async (tarefa: Tarefa, tarefaId: number) => {
  await dbQuery(
    `
    UPDATE tarefa SET name = ?, concluida = ?, prioridade = ?, desc = ? WHERE id = ?
  `,
    [tarefa.name, tarefa.concluida, tarefa.prioridade, tarefa.desc, tarefaId]
  );
  let retorno = await dbQuery(`SELECT id FROM tarefa WHERE id = ?`, [tarefaId]);

  return retorno[0] as Tarefa;
};

const deletaTarefa = async (tarefaId: number) => {
  await dbQuery(`DELETE from tarefa WHERE id = ?`, [tarefaId]);
  return tarefaId;
};

export const tarefaModel = {
  insertTarefa,
  listTarefas,
  concluiTarefa,
  alteraTarefa,
  deletaTarefa,
};
