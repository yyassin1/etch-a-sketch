const box = document.getElementById('box');
let input = document.getElementById("box_size");
input.addEventListener("input", function(event) {
    let rows = event.target.value;
    let cols = rows;
    console.log(rows);
    makeRows(rows, cols)
});
//let rows = prompt("Please enter the size of the table");
function makeRows(rows, cols){
    box.style.setProperty('--grid-rows', rows);
    box.style.setProperty('--grid-cols', cols);

    for (let r = 0; r < rows; r++){  
        for (let c = 0; c < cols; c++){
            let cell = document.createElement("div");
            cell.className = "grid-item";
            cell.addEventListener('mouseover', function(){
                cell.style.backgroundColor = "black";
            });
            let clear = document.getElementById("clear");
            clear.addEventListener("click", function(){
                cell.style.backgroundColor = "white";
            })
            box.appendChild(cell);
        };
    };
};
