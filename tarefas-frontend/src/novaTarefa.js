import React, { useEffect, useState } from "react";
import axios from "axios";
import "./novaTarefa.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./newTarefa.js";
    script.async = true;
    script.document = document;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome da Tarefa</label>
          <input className="form-control" id="nomeTarefa" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Descrição da tarefa</span>
          <textarea
            className="form-control"
            id="desc"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Prioridade</label>
          <input className="form-control" id="prioridade" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label id="concluida" className="form-check-label">
            Tarefa concluida?
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <script>console.log('Oi')</script>
    </div>
  );
}
export default Home;
