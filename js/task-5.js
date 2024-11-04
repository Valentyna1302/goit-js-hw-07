function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

const handleClick = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
};

changeColorBtn.addEventListener("click", handleClick);
