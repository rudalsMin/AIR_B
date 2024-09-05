const planeContainer = document.querySelector(".plane-container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

populateUI();

const TICKET_PRICE = 50000;

function updateSeat() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  const selectedSeatsCount = selectedSeats.length;

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  localStorage.setItem(
    "selectedSeatTotalPrice",
    selectedSeatsCount * TICKET_PRICE
  );

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * TICKET_PRICE;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const totalPrice = localStorage.getItem("selectedSeatTotalPrice");

  if (selectedSeats !== null && selectedSeats.length !== 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  if (totalPrice !== null && totalPrice > 0) {
    total.innerText = totalPrice;
    count.innerText = selectedSeats.length;
  }
}

planeContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
  }
  updateSeat();
});

document.querySelectorAll('.seat.occupied').forEach(function(seat) {
    seat.innerHTML = `
      <svg class="seat occupied" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <g fill="none" fill-rule="evenodd">
            <path fill="#D9DBE1" d="M16.593 0H3.407C1.567 0 .068 1.458.002 3.282L0 3.407v13.186c0 1.84 1.458 3.339 3.282 3.405l.125.002h13.186c1.84 0 3.339-1.458 3.405-3.282l.002-.125V3.407c0-1.84-1.458-3.339-3.282-3.405L16.593 0z"/>
            <path fill="#555" fill-rule="nonzero" d="M17.143 3.664L16.336 2.857 9.999 9.192 3.664 2.857 2.857 3.664 9.192 9.998 2.857 16.336 3.664 17.143 9.999 10.806 16.336 17.143 17.143 16.336 10.807 9.998z"/>
        </g>
      </svg>
    `;
});
// 초기 페이지 로드 시 선택된 상태를 설정
document.querySelectorAll('.seat.selected').forEach(function(seat) {
  seat.innerHTML = `
    <svg class="seat selected" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g fill="none" fill-rule="evenodd">
        <path fill="#00256C" d="M16.593 0H3.407C1.567 0 .068 1.458.002 3.282L0 3.407v13.186c0 1.84 1.458 3.339 3.282 3.405l.125.002h13.186c1.84 0 3.339-1.458 3.405-3.282l.002-.125V3.407c0-1.84-1.458-3.339-3.282-3.405L16.593 0z"/>
        <path fill="#FFF" d="M0 15.882H20V17.058H0z" opacity=".5"/>
        <g transform="translate(4 4)">
          <path d="M0 0H11.765V11.765H0z"/>
          <circle cx="5.882" cy="5.882" r="5.882" fill="#FFF"/>
        </g>
      </g>
    </svg>
  `;
});

// 좌석을 클릭할 때 선택 상태를 토글
document.querySelectorAll('.seat').forEach(function(seat) {
  seat.addEventListener('click', function() {
    if (!seat.classList.contains('occupied')) {
      // 'selected' 클래스가 있으면 제거하고, 없으면 추가합니다.
      if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        seat.innerHTML = ''; // 선택 해제 시 SVG 제거
      } else {
        seat.classList.add('selected');
        seat.innerHTML = `
          <svg class="seat selected" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g fill="none" fill-rule="evenodd">
              <path fill="#00256C" d="M16.593 0H3.407C1.567 0 .068 1.458.002 3.282L0 3.407v13.186c0 1.84 1.458 3.339 3.282 3.405l.125.002h13.186c1.84 0 3.339-1.458 3.405-3.282l.002-.125V3.407c0-1.84-1.458-3.339-3.282-3.405L16.593 0z"/>
              <path fill="#FFF" d="M0 15.882H20V17.058H0z" opacity=".5"/>
              <g transform="translate(4 4)">
                <path d="M0 0H11.765V11.765H0z"/>
                <circle cx="5.882" cy="5.882" r="5.882" fill="#FFF"/>
              </g>
            </g>
          </svg>
        `;
      }
    }
  });
});


