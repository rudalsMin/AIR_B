document.addEventListener('DOMContentLoaded', function() {
    // 처음에 요소들을 숨김
    document.querySelector('.seatAssign').style.display = 'none';
    document.querySelector('.seat_svg').style.display = 'none';
    document.querySelector('.agreement').style.display = 'none';
    document.querySelector('.container18').style.display = 'none';

    // btn_confirm 버튼 클릭 시 동작
    document.querySelector('.btn_confirm').addEventListener('click', function() {
        // 입력된 텍스트 값을 가져옴
        const lastName = document.querySelector('.lastname_text').value;
        const firstName = document.querySelector('.firstname_text').value;

        // container16을 숨김
        document.querySelector('.container16').style.display = 'none';

        // container15의 텍스트를 변경
        document.querySelector('.container15 .adult').textContent = `${lastName} ${firstName}`;

        // svg 아이콘을 숨김
        document.querySelector('.svg15').style.display = 'none';    

        // 새로운 svg 요소를 생성
        const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        newSvg.setAttribute("width", "18");
        newSvg.setAttribute("height", "18");
        newSvg.setAttribute("viewBox", "0 0 18 18");

        const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newPath.setAttribute("fill", "none");
        newPath.setAttribute("fill-rule", "evenodd");
        newPath.setAttribute("stroke", "#FFF");
        newPath.setAttribute("stroke-linecap", "round");
        newPath.setAttribute("stroke-width", "2");
        newPath.setAttribute("d", "M14.25 6L7.929 12 4.5 8.811");

        // 새로운 path를 svg에 추가
        newSvg.appendChild(newPath);

        // 새로 생성된 svg를 container15에 추가
        document.querySelector('.container15').appendChild(newSvg);

        // newSvg의 위치 스타일링
        newSvg.style.position = 'absolute'; // position을 absolute로 설정
        newSvg.style.top = '29px';  // 상단에서 29px 위치
        newSvg.style.left = '28px'; // 왼쪽에서 28px 위치
        newSvg.style.width = '31px'; // width 스타일 설정
        newSvg.style.height = '25px'; // height 스타일 설정

        // seatAssign, seat_svg, agreement, container18을 화면에 나타나게 함
        document.querySelector('.seatAssign').style.display = 'block';
        document.querySelector('.seat_svg').style.display = 'block';
        document.querySelector('.agreement').style.display = 'block';
        document.querySelector('.container18').style.display = 'block';
		
		// helper8의 클릭 이벤트 리스너
		document.querySelector('.helper8').addEventListener('click', function() {
		    // 현재 배경색을 확인하여 배경색을 토글
		    if (this.style.backgroundColor === 'rgb(199, 243, 255)') {
		        // 이미 배경색이 #c7f3ff인 경우, 원래 색으로 되돌림 (예: 흰색)
		        this.style.backgroundColor = '';
		    } else {
		        // 배경색이 다른 경우, #c7f3ff로 변경
		        this.style.backgroundColor = '#c7f3ff';
		    }
		});

		// helper9의 클릭 이벤트 리스너
		document.querySelector('.helper9').addEventListener('click', function() {
		    // 현재 배경색을 확인하여 배경색을 토글
		    if (this.style.backgroundColor === 'rgb(199, 243, 255)') {
		        // 이미 배경색이 #c7f3ff인 경우, 원래 색으로 되돌림 (예: 흰색)
		        this.style.backgroundColor = '';
		    } else {
		        // 배경색이 다른 경우, #c7f3ff로 변경
		        this.style.backgroundColor = '#c7f3ff';
		    }
		});

    });
});
