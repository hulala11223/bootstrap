$(function() {
	var mouseoverControl = $('div[class="thumbnail"]');
	mouseoverControl.mouseenter(function() {
		$(this).attr('style','display:block;box-shadow:0px 0px 5px #000000;');
	});
	mouseoverControl.mouseleave(function() {
		$(this).attr('style','display:block');
	});
	$('div.col-md-6').fadeIn({duration:2000});
	$('#addProduct').fadeIn({duration:2000});
	mouseoverControl = $('span[id="configSpan"],span[id="deleteSpan"],span[id="exitSpan"]');
	mouseoverControl.mouseenter(function() {
		$(this).attr('style','color:#264d79;font-size:20px;');
	});
	mouseoverControl.mouseleave(function() {
		$(this).attr('style','color: #CCCCCC;font-size:20px');
	});
	$("[data-toggle='tooltip']").tooltip();
	$("#projectMain",window.parent.document).onload=changeHeight("projectMain");
})

