const box = document.getElementById("box");
let rows = 20;
let cols = 20;
makeRows(rows, cols);
function makeRows(rows, cols) {
  box.style.setProperty("--grid-rows", rows);
  box.style.setProperty("--grid-cols", cols);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let cell = document.createElement("div");
      cell.className = "grid-item";
      cell.addEventListener("mouseover", function () {
        cell.style.backgroundColor = "black";
      });
      let clear = document.getElementById("clear");
      clear.addEventListener("click", function () {
        cell.style.backgroundColor = "white";
      });
      box.appendChild(cell);
    }
  }
}
