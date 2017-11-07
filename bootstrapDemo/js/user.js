// $(document).ready(function(){ 
// 　　$.get('projectMain.html',function(data){
// 		$('#projectMain').html(data);
// 	}); 
// })

$(function () {
	// autoHeight(document.getElementById('projectMain'));
	//注册鼠标移入移出事件
	var mouseoverControl = $('div[id="menuDiv"]');
	mouseoverControl.mouseenter(function() {
		$('#hideInfo').fadeIn({duration:600});
		$('#selectMenuSpan').rotate({animateTo:180,duration:600});
	});
	mouseoverControl.mouseleave(function() {
		$('#hideInfo').fadeOut({duration:600});
		$('#selectMenuSpan').rotate({animateTo:0,duration:600});
	});
	mouseoverControl = $('li[id="myInfoLi"]');
	mouseoverControl.mouseenter(function() {
		$('#myInfo').fadeIn({duration:600});
		$('#myInfoSpan').rotate({animateTo:180,duration:600});
	});
	mouseoverControl.mouseleave(function() {
		$('#myInfo').fadeOut({duration:600});
		$('#myInfoSpan').rotate({animateTo:0,duration:600});
	});
	mouseoverControl = $('div[id="headImage"]');
	mouseoverControl.mouseenter(function() {
		$('#headImageSpan').attr('style','display:block');
		$('#headTextSpan').attr('style','display:block');
	});
	mouseoverControl.mouseleave(function() {
		$('#headImageSpan').attr('style','display:none');
		$('#headTextSpan').attr('style','display:none');
	});
})
