const movie = document.getElementById("movie");
const container = document.querySelector(".container");
let count = document.querySelector(".count");
let total = document.querySelector(".total");
const allPrefferred = document
  .querySelector(".container")
  .getElementsByClassName("seat preffered");

const initialTotal = () => {
  let initTotal = allPrefferred.length * movie.value;
  count.textContent = allPrefferred.length;
  total.textContent = initTotal;
  return;
};

initialTotal();

const addSeats = (e) => {
  let cls = e.target.classList;
  if (cls.contains("occupied")) {
    alert("Seat is already taken");
  } else {
    cls.toggle("preffered");
    count.textContent = allPrefferred.length;
    total.textContent = parseInt(allPrefferred.length) * parseInt(movie.value);
  }
};

const updatePrice = () => {
  initialTotal();
};

movie.addEventListener("change", updatePrice);
container.addEventListener("click", addSeats);
