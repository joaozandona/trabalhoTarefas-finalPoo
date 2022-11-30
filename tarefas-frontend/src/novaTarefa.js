import React, { useEffect, useState } from "react";
import axios from "axios";
import "./novaTarefa.css";
import "./newTarefa";

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/babel";
    script.src = "./newTarefa.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome da Tarefa</label>
          <input className="form-control" id="nomeTarefa" name="nomeTarefa" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Descrição da tarefa</span>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Prioridade</label>
          <input className="form-control" name="prioridade" id="prioridade" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="concluida" />
          <label id="concluidaLabel" value="1" className="form-check-label">
            Tarefa concluida?
          </label>
        </div>
        <a href="http://localhost:3000" id="button" className="btn btn-primary">
          Submit
        </a>
      </form>
      {""}
    </div>
  );
}
export default Home;
