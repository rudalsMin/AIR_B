
// "대한민국 - 한국어" 버튼을 클릭하면 LANModal을 열기
document.getElementById('openModalBtn5').onclick = function() {
    document.getElementById('LANModal').style.display = "block";
    document.getElementById('overlay').style.display = "block";
}

// LANModal 닫기 버튼 클릭 시 모달 닫기
document.querySelector('.close-btn5').onclick = function() {
    document.getElementById('LANModal').style.display = "none";
    document.getElementById('overlay').style.display = "none";
}

// LANModal 외부 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target == document.getElementById('LANModal')) {
        document.getElementById('LANModal').style.display = "none";
        document.getElementById('overlay').style.display = "none";
    }
}

// language-btn 버튼 클릭 시 모달 닫기
document.querySelector('.language-btn').onclick = function() {
    document.getElementById('LANModal').style.display = "none";
    document.getElementById('overlay').style.display = "none";
}


// SEL 버튼을 클릭하면 모달창을 열기
document.getElementById('openModalBtn').onclick = function(event) {
    // 버튼의 기본 동작(페이지 전환)을 막습니다.
    event.preventDefault();

    // 모달 창 열기
    document.getElementById('SELModal').style.display = "block";

    // 다른 모달 창이 열려 있다면 닫기 (선택사항)
    document.getElementById('SEATModal').style.display = "none"; 
}

// 모달창 닫기 버튼 클릭 시 모달창 닫기
document.querySelector('.close-btn').onclick = function() {
    document.getElementById('SELModal').style.display = "none";
}

// 모달창 외부 클릭 시 모달창 닫기
window.onclick = function(event) {
    // SELModal을 클릭했을 때 모달 닫기
    if (event.target == document.getElementById('SELModal')) {
        document.getElementById('SELModal').style.display = "none";
    }
}

// SEL 모달에서 선택한 값을 버튼 텍스트와 value로 업데이트
document.querySelector('#SELModal select').addEventListener('change', function() {
    // 선택된 옵션의 value를 가져옵니다.
    let selectedValue = this.options[this.selectedIndex].value;

    // SEL 버튼 텍스트와 value를 선택된 option의 value로 업데이트
    let selButton = document.getElementById('openModalBtn');
    selButton.innerText = selectedValue;
    selButton.value = selectedValue;  // value도 업데이트

    // 모달 닫기
    document.getElementById('SELModal').style.display = "none";
});

// ESC 키로 모달 닫기 기능 추가
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('SELModal').style.display = "none";
    }
});

// 현재 열린 모달을 추적하기 위한 변수
let currentOpenModal = null;
// TO 버튼을 클릭하면 모달창을 열기
document.getElementById('openModalBtn2').onclick = function(event) {
    // 버튼의 기본 동작(페이지 전환)을 막습니다.
    event.preventDefault();

    // 현재 열려 있는 모달이 있다면 닫기
    if (currentOpenModal && currentOpenModal !== 'TOModal') {
        document.getElementById(currentOpenModal).style.display = "none";
    }

    // TO 모달 창 열기
    document.getElementById('TOModal').style.display = "block";
    currentOpenModal = 'TOModal';
}

// TO 모달창 닫기 버튼 클릭 시 모달창 닫기
document.querySelector('.close-btn2').onclick = function() {
    document.getElementById('TOModal').style.display = "none";
    currentOpenModal = null;
}

// TO 모달창 외부 클릭 시 모달창 닫기
window.onclick = function(event) {
    if (event.target == document.getElementById('TOModal')) {
        document.getElementById('TOModal').style.display = "none";
        currentOpenModal = null;
    }
}

// TO 모달에서 선택한 값을 버튼 텍스트와 value로 업데이트
document.querySelector('#TOModal select').addEventListener('change', function() {
    // 선택된 옵션의 value와 text를 가져옵니다.
    let selectedValue = this.options[this.selectedIndex].value;
    let selectedText = this.options[this.selectedIndex].text;

    // TO 버튼 텍스트를 선택된 option의 value로 업데이트
    // 선택된 옵션에 value가 없으면 텍스트를 사용합니다.
    let displayText = selectedValue ? selectedValue : selectedText;
    document.getElementById('openModalBtn2').innerText = displayText;
    document.getElementById('openModalBtn2').value = selectedValue;

    // 모달 닫기
    document.getElementById('TOModal').style.display = "none";
    currentOpenModal = null;
});

// ESC 키로 모달 닫기 기능 추가
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && currentOpenModal) {
        document.getElementById(currentOpenModal).style.display = "none";
        currentOpenModal = null;
    }
});

// 좌석 등급 모달창 열기 버튼 클릭 시 모달 열기
document.getElementById('openModalBtn4').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작인 폼 제출을 막음
    document.getElementById('SEATModal').style.display = "block";
});

// 좌석 등급 모달창 닫기 버튼 클릭 시 모달창 닫기
document.querySelector('.close-btn4').onclick = function() {
    document.getElementById('SEATModal').style.display = "none";
}

// 좌석 등급 모달창 외부 클릭 시 모달창 닫기
window.onclick = function(event) {
    if (event.target == document.getElementById('SEATModal')) {
        document.getElementById('SEATModal').style.display = "none";
    }
}

// 좌석 선택 함수
function selectSeat(seatType) {
    // 선택된 좌석 정보를 HTML 요소에 업데이트
    const selectedSeatElem = document.getElementById('selectedSeat');
    // selectedSeatElem.textContent = `선택된 부분: ${seatType}`;

    // 선택된 버튼 스타일 업데이트
    const buttons = document.querySelectorAll('.modal-content .showImgBtn');
    buttons.forEach(button => button.classList.remove('active')); // 모든 버튼의 'active' 클래스 제거

    // 클릭된 버튼에 'active' 클래스 추가
    const selectedButton = Array.from(buttons).find(button => button.value === seatType);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }

    // 모달 밖에 있는 버튼의 텍스트도 변경
    const seatButton = document.querySelector('.btn.btn-seat.btn-block');
    seatButton.textContent = `${seatType}`;
    seatButton.value = `선택된 부분: ${seatType}`;
}

// 탑승객 모달창 열기 버튼 클릭 시 모달 열기
document.getElementById('openModalBtn3').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작인 폼 제출을 막음
    document.getElementById('PEOModal').style.display = "block";
});

// 탑승객 모달창 닫기 버튼 클릭 시 모달창 닫기
document.querySelector('.close-btn3').onclick = function() {
    document.getElementById('PEOModal').style.display = "none";
}

// 탑승객 모달창 외부 클릭 시 모달창 닫기
window.onclick = function(event) {
    if (event.target == document.getElementById('PEOModal')) {
        document.getElementById('PEOModal').style.display = "none";
    }
}

// 승객 수 관련 요소 선택
let adultCount = document.querySelector(".adultCount");
let childCount = document.querySelector(".childCount");
let infantCount = document.querySelector(".infantCount");
let totalNum = 0;
let plusBtn = document.querySelectorAll(".btn_number.plus");
let minusBtn = document.querySelectorAll(".btn_number.minus");
let passengerButton = document.querySelector(".btn-people");

// 승객 수를 업데이트하고 표시하는 함수
function updatePassengerSelect() {
    passengerButton.textContent = `성인 ${adultCount.value}명, 소아 ${childCount.value}명, 유아 ${infantCount.value}명`;
}

// 승객 수 증가 버튼 클릭 이벤트
for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", function() {
        totalNum = Number(adultCount.value) + Number(childCount.value) + Number(infantCount.value);
        switch (i) {
            case 0:
                if (totalNum < 9) {
                    adultCount.value = Number(adultCount.value) + 1;
                }
                break;
            case 1:
                if (totalNum < 9) {
                    childCount.value = Number(childCount.value) + 1;
                }
                break;
            case 2:
                if (totalNum < 9) {
                    infantCount.value = Number(infantCount.value) + 1;
                }
                break;
        }
        updatePassengerSelect(); // 승객 수 변경 시 업데이트
    });
}

// 승객 수 감소 버튼 클릭 이벤트
for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener("click", function() {
        switch (i) {
            case 0:
                if (adultCount.value > 0) {
                    adultCount.value = Number(adultCount.value) - 1;
                }
                break;
            case 1:
                if (childCount.value > 0) {
                    childCount.value = Number(childCount.value) - 1;
                }
                break;
            case 2:
                if (infantCount.value > 0) {
                    infantCount.value = Number(infantCount.value) - 1;
                }
                break;
        }
        updatePassengerSelect(); // 승객 수 변경 시 업데이트
    });
}

// 승객 수 적용 버튼 클릭 시 승객 수 업데이트 및 모달 닫기
document.querySelector(".passenger-btn").addEventListener("click", function() {
    updatePassengerSelect(); // 최종 선택한 값을 업데이트
    document.getElementById('PEOModal').style.display = "none"; // 모달 창 닫기
});


// 페이지 로드 시 기본 값 업데이트
updatePassengerSelect();
