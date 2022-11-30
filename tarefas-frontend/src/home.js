import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import "./delet";

let idApagar;

function deletar() {
  console.log(idApagar);
}

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

    const script = document.createElement("script");
    script.type = "text/babel";
    script.src = "./delet.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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
                    defaultChecked
                    onClick={() => {
                      axios
                        .put(
                          "http://localhost:8091/api/v1/tarefa/conclui/" +
                            tarefa.id +
                            "/" +
                            tarefa.concluida
                        )
                        .then((response) => {
                          console.log("foi");
                        })
                        .catch(() => {
                          console.log("deu errado");
                        });
                    }}
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
              <a
                href="http://localhost:3000"
                id="buttonApagar"
                onClick={() => {
                  axios
                    .delete("http://localhost:8091/api/v1/tarefa/" + tarefa.id)
                    .then((response) => {
                      console.log("foi");
                    })
                    .catch(() => {
                      console.log("deu errado");
                    });
                }}
              >
                Apagar
              </a>
            </div>
          );
        })}
        <a href="http://localhost:3000/novaTarefa">Adicionar Tarefa</a>
      </div>
    </div>
  );
}
export default Home;
