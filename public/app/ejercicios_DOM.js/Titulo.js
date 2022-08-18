const Titulo = () => {
  const titulo = `<h1>Este es el titulo de Bienvenida a Prácticas Javascript</h1>`;
  const section = document.createElement("section");
  section.innerHTML = titulo;
  return section;
};

export { Titulo };
