const makeRows = () => {
  const rows = getSliderValue();
  const columns = getSliderValue();
  const container = document.querySelector(".container");
  container.style.setProperty("--rows", rows);
  container.style.setProperty("--cols", columns);
  for (let i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("gridItem");
    container.append(cell);
  }
};

const clearContainer = () => {
  const container = document.querySelector(".container");
  const checkBtn = document.querySelector(".fa-check");
  container.innerHTML = "";
  checkBtn.classList.remove("active");
};

const colorDiv = (e) => {
  const theme = getTheme();
  if (theme === "black") {
    e.target.style.background = "#000";
  } else {
    e.target.style.background = getRandomColor();
  }
};

const applyEventListeners = () => {
  const sizeSubmit = document.querySelector(".fa-check");
  const resetBtn = document.querySelector(".reset");
  const gridItems = document.querySelectorAll(".gridItem");
  const slider = document.getElementById("slider");

  gridItems.forEach((grid) => grid.addEventListener("mouseover", colorDiv));
  resetBtn.addEventListener("click", drawGame);
  sizeSubmit.addEventListener("click", drawGame);
  slider.addEventListener("input", drawSliderValue);
  slider.addEventListener("mouseup", addCheckBtn);
};

const addCheckBtn = () => {
  const checkBtn = document.querySelector(".fa-check");
  checkBtn.classList.add("active");
};

const getSliderValue = () => {
  return document.getElementById("slider").value;
};

const drawSliderValue = () => {
  const sliderVal = document.getElementById("slider").value;
  const val = document.getElementById("val");
  val.textContent = sliderVal;
};

const getTheme = () => {
  const theme = document.querySelector("input[name='scheme']:checked").value;
  return theme;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const drawGame = () => {
  clearContainer();
  makeRows();
  applyEventListeners();
  drawSliderValue();
};

drawGame();
