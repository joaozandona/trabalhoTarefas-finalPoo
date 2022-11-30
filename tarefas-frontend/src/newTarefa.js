import React, { useEffect, useState } from "react";
import axios from "axios";

window.onload = function () {
  let btn = document.getElementById("button");
  btn.addEventListener("click", gravar);
  let checkBox = document.getElementById("concluida");
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      console.log("1");
    } else {
      console.log("3");
    }
  });
};

function gravar() {
  let nomeTarefa = document.querySelector("#nomeTarefa").value;
  let desc = document.querySelector("#desc").value;
  let prioridade = document.querySelector("#prioridade").value;
  let concluida = document.getElementById("concluida");

  if (concluida.checked) {
    concluida = true;
  } else {
    concluida = false;
  }

  console.log(concluida);

  axios
    .post("http://localhost:8091/api/v1/tarefa", {
      name: nomeTarefa,
      desc: desc,
      prioridade: prioridade,
      concluida: concluida,
    })
    .then((response) => {
      console.log("Foi");
    })
    .catch(() => {
      console.log("deu errado");
    });
}
