import { Titulo } from "./ejercicios_DOM.js/Titulo.js";

const App = () => {
  const d = document;
  const $root = d.getElementById("root");

  //AÑADIR AQUÍ LOS COMPONENTES O MODULOS JS
  $root.appendChild(Titulo());
};

export { App };
