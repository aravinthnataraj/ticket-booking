// Element

const movieInputEl = document.getElementById("movie");
const seatsList = document.querySelectorAll(".seats_container .seat");
const seatCountEl = document.getElementById("seat_count");
const amountEl = document.getElementById("amount");

function ShowSummary() {
  const selectedSeats = document.getElementsByClassName("seat Selected");
  const movieAmount = movieInputEl.value;
  const seatCount = selectedSeats.length;
  const amount = seatCount * movieAmount;

  seatCountEl.innerText = seatCount;
  amountEl.innerText = amount;
}
movieInputEl.addEventListener("change", function () {
  ShowSummary();
});

for (let i = 0; i < seatsList.length; i++) {
  if (!seatsList[i].classList.contains("occupied")) {
    seatsList[i].addEventListener("click", function () {
      seatsList[i].classList.toggle("Selected");
      ShowSummary();
    });
  }
}

function seatCount() {
  const NoSeatEl = document.getElementsByClassName("seat Selected");
  if (NoSeatEl.length > 0) {
    window.location.href = "welcome.html";
  } else {
    alert("Please book your ticket");
  }
  console.log(NoSeatEl);
}

function tickets_amount() {
  const total_seat = document.getElementsByClassName("seat Selected");
  const movieAmount = movieInputEl.value;
  const seatCount = total_seat.length;
  const amount = seatCount * movieAmount;

  document.getElementById("number_of_ticket").innerHTML = seatCount;
  document.getElementById("ticket_amount").innerHTML = movieAmount;
  document.getElementById("total_amount").innerHTML = amount;
}

// welcome js

function MovieToIndex() {
  window.location.href = "index.html";
}
