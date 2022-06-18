//레이어팝업 */
function layerShow(thisClass){
    //$('.contLayer').hide();
    $('.'+thisClass).show();
	
	if($('.'+thisClass).hasClass('fixed_layer')){
		//2021-03-31$('html,body').css('overflow-y' , 'hidden');
	}
}
function layerHide(thisClass){
    $('.'+thisClass).hide();
	
	if($('.layer_form.fixed_layer:visible').length == 0 ){
		//2021-03-31$('html,body').css('overflow-y' , 'auto');
	}
}

//인풋최대 글자수 제한
$(document).on('keyup', '.max_text', function () {
    var numChar = $(this).val().length;
	var maxNum = $(this).attr('maxlength');
	var lenDisplay = $(this).closest('.ip_group').find('.max_len b');
	 if(numChar == maxNum){
	  alert('최대 글자 수가 모두 찼습니다.');
	}
	lenDisplay.text(numChar);
});

//글자수 제한있는 항목 첫 로드 시 계산
if ($('span').hasClass('max_len')){
	$(".max_len").each(function() {
		var numChar = $(this).closest('.ip_group').find('.max_text').val().length;
		$(this).find('b').text(numChar);
	});
}

$('.active_control li a').click(function(){
	$(this).closest('.active_control').find('li').removeClass('active');
	$(this).closest('li').addClass('active');
});


//데이트픽커
$.datepicker.setDefaults({
	dateFormat: 'yy-mm-dd',
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	//changeMonth: true, //셀렉트박스로 월선택
	//changeYear: true, //셀렉트박스로 년선택
	showMonthAfterYear: true,
	//showOn: 'button',
	yearSuffix: '년'
});

if ($('input').hasClass('datepicker')) {
	$(".datepicker").datepicker({});
}


/*날짜선택*/
/* 날짜 객체 받아서 문자열로 리턴하는 함수 */
function getDateStr(myDate){
	return (myDate.getFullYear() + '-' + ("0" + (myDate.getMonth() + 1)).slice(-2) + '-' + ("0" + myDate.getDate()).slice(-2))
}
/* 오늘 날짜를 문자열로 반환 */
function today() {
  var d = new Date();

  return getDateStr(d)
}
/* 오늘로부터 1개월전 날짜 반환 */
function selMonth(selDate) {
  var d = new Date()
  var monthOfYear = d.getMonth()
  d.setMonth(monthOfYear - selDate)
  return getDateStr(d)
}

$('.date_sel .design_radio').click(function(){
	//$(this).closest('.date_sel').find('.date_sel_btn').removeClass('active');
	//$(this).addClass('active');

	var selDate = $(this).find('input').val();
	$(this).closest('.date_control').find('.dc_start').val(selMonth(selDate));
	$(this).closest('.date_control').find('.dc_end').val(today());
		
});
$(document).ready(function() {
	if($('div').hasClass('date_control')){
		$(this).find('.dc_start').val(selMonth(1));
		$(this).find('.dc_end').val(today());
	}
});
