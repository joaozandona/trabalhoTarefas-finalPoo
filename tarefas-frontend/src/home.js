import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

function Home() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8091/api/v1/tarefa")
      .then((response) => {
        setTarefas(response.data);
      })
      .catch(() => {
        console.log("deu errado");
      });
  }, []);

  return (
    <div className="app">
      <div className="cards">
        {tarefas.map((tarefa, key) => {
          return (
            <div className="card" key={key}>
              <div className="card-body">
                <h2>{tarefa.name}</h2>
                <div className="line"></div>
                <h3>{tarefa.desc}</h3>
                {tarefa.concluida == 1 && (
                  <input
                    type="checkbox"
                    id="concluida"
                    name="concluida"
                    checked
                  ></input>
                )}
                {tarefa.concluida == 0 && (
                  <input
                    type="checkbox"
                    id="concluida"
                    name="concluida"
                  ></input>
                )}
                <label for="concluida"> Tarefa concluida? </label>
              </div>
              <button>Editar</button>
              <button>Apagar</button>
            </div>
          );
        })}
        <a href="http://">Adicionar Tarefa</a>
      </div>
    </div>
  );
}
export default Home;
