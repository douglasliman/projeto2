const btnAlert = document.querySelector("#btnAlert");
const titlePrompt = document.querySelector("#bringPrompt");

titlePrompt.addEventListener("click", () => {
  const name = prompt("Qual seu nome?");
  alert(`Hello ${name}!`);
});

btnAlert.addEventListener("click", () => {
  alert(`Pare de clicar em alert`);
});
