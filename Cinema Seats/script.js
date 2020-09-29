const movie = document.getElementById("movie");
const container = document.querySelector(".container");
let count = document.querySelector(".count");
let total = document.querySelector(".total");
const allOccupied = document
  .querySelector(".container")
  .getElementsByClassName("seat occupied");

const initialTotal = () => {
  let initTotal = allOccupied.length * movie.value;
  count.textContent = allOccupied.length;
  total.textContent = initTotal;
  return;
};

initialTotal();

const addSeats = (e) => {
  let cls = e.target.classList;
  if (cls.contains("seat")) {
    cls.toggle("occupied");
    count.textContent = allOccupied.length;
    total.textContent = parseInt(allOccupied.length) * parseInt(movie.value);
  }
};

const updatePrice = () => {
  initialTotal();
};

movie.addEventListener("change", updatePrice);
container.addEventListener("click", addSeats);
