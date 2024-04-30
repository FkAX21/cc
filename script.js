var cubeButton = document.getElementById("cube");
var cuboidButton = document.getElementById("cuboid");
// Cube
cubeButton.addEventListener("click", cubeBtn);
function cubeBtn() {
  document.getElementById("cubepics").src = "images/Net-of-a-Cube.png";
  document.getElementById("body").style.backgroundColor = `lightblue`;
  document.getElementById(
    "cubemath"
  ).innerHTML = `Area <input id="scube" type="number" />`;
  document.getElementById(
    "edp"
  ).innerHTML = `<button id="cbtn">calculate</button>`;
  document.getElementById(
    "cubtn"
  ).innerHTML = `Surface area = <span id="output">----</span>`;
  document.getElementById("cbtn").addEventListener("click", calculateCube);
}

// event listener for

function calculateCube() {
  let scube = +document.getElementById("scube").value;
  // Process
  let sucube = 6 * scube ** 2;
  // Output
  document.getElementById("output").innerHTML = sucube;
}

// Cuboid
cuboidButton.addEventListener("click", cuboidBtn);
function cuboidBtn() {
  document.getElementById("cubepics").src =
    "images/SurfaceAreaofCuboid-660x341.png";
  document.getElementById("body").style.backgroundColor = `lightgreen`;
  document.getElementById(
    "cuboidmathlength"
  ).innerHTML = `Length <input id="length" type="number" />`;
  document.getElementById(
    "cuboidmathbase"
  ).innerHTML = `Base <input id="base" type="number" />`;
  document.getElementById(
    "cuboidmathheight"
  ).innerHTML = `Height <input id="height" type="number" />`;
  document.getElementById(
    "cbbtn"
  ).innerHTML = `<button id="cubbtn">calculate</button>`;
  document.getElementById(
    "cuboibtn"
  ).innerHTML = `Surface area = <span id="outputc">----</span>`;
  document.getElementById("cubbtn").addEventListener("click", calculateCuboid);
}
function calculateCuboid() {
  let L = +document.getElementById("length").value;
  let B = +document.getElementById("base").value;
  let H = +document.getElementById("height").value;
  //   Process
  let boid = 2 * (L * H + L * B + H * B);
  //   Output
  document.getElementById("outputc").innerHTML = boid;
}
