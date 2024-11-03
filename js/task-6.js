function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsTextInput = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

let sizes = 30;

createBtn.addEventListener("click", () => {
  const controlsInputValue = Number(controlsTextInput.value.trim());
  if (controlsInputValue < 1 || controlsInputValue > 100) {
    return;
  }
  createBoxes(controlsInputValue);
  boxesContainer.style.backgroundColor = "#f6f6fe";
});

function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  sizes = 30;
  const arr = [];

  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();

    arr.push(myBox);
    sizes += 10;
  }

  boxesContainer.append(...arr);
}

destroyBtn.addEventListener("click", () => {
  boxesContainer.style.backgroundColor = "";
  boxesContainer.innerHTML = "";
  controlsTextInput.value = "";
  sizes = 30;
});
