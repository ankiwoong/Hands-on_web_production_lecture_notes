$(function(){
	/* navigation */
	$(".nav > ul > li").hover(
		function(){
			$(this).parent().addClass("over");
		},
		function(){
			$(this).parent().removeClass("over");
		}
	);
	$(".nav > ul > li").focusin(function(){
		$(this).addClass("over");
		$(this).parent().addClass("over");
	});
	$(".nav > ul > li").focusout(function(){
		$(this).removeClass("over");
		$(this).parent().removeClass("over");
	});
});