/*iframe高度自适应*/
function changeHeight(id) {
	try {
		var height="";
		if (document.body.offsetHeight){
			height = document.body.offsetHeight + 20;
		}else if(document.body.scrollHeight){
			height = document.body.scrollHeight + 20;
		}
		$("#" + id, window.parent.document).css({
			'height' : height
		});
	} catch (ex) {
	}
}