// checkbox1 요소를 선택하고, change 이벤트 리스너를 추가합니다.
document.querySelector('.checkbox1').addEventListener('change', function() {
    // checkbox1의 체크 상태를 저장합니다.
    var isChecked = this.checked;
    
    // 모든 체크박스를 선택합니다.
    var checkboxes = document.querySelectorAll('.wrapper input[type="checkbox"]');
    
    // 각 체크박스의 checked 속성을 checkbox1의 상태와 동일하게 설정합니다.
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = isChecked;
    });
});