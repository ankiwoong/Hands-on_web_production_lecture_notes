$(function(){
	var w; // �������� ���� ũ�⸦ �����ϴ� �����Դϴ�.
	var h; // �޴��� ���� ũ�⸦ �����ϴ� �����Դϴ�.

	/*
	�������� ���� h ���� ũ���� ��ȭ

	920px ���� : h 200px
	1070px ���� : h 290px
	PC �ػ� : h 376px
	*/

	$(window).resize(function(){
		w=$(window).width();

		if(w <= 920){
			h=200;
		}
		else if(w <= 1070){
			h=290;
		}
		else{
			h=376;
		}
	});
	$(window).trigger("resize");

	// GNB
	$(".gnb_wrap > ul > li").mouseenter(function(){
		$(this).find(".sub").stop()
								.css({display:"block", height:0})
								.animate({height:h}, 400);
	});
	$(".gnb_wrap > ul > li").mouseleave(function(){
		$(this).find(".sub").stop()
								.animate({height:0}, 400, function(){
									$(this).css({display:"none"});
								});
	});
	$(".gnb_wrap > ul > li").focusin(function(){
		$(this).addClass("active");
		$(".gnb_wrap .sub").css({display:"none", height:0});
		$(this).find(".sub").css({display:"block", height:h});
	});
	$(".gnb_wrap > ul > li").focusout(function(){
		$(this).removeClass("active");
	});
	$(".gnb_wrap > ul > li").find("li").last().focusout(function(){
		$(this).parents(".sub").css({display:"none", height:0});
	});
	$(".tab").click(function(e){
		e.preventDefault();
		$("body, html").addClass("prevent");
		$("#mobile").addClass("active");
		$(".dim").addClass("active");
	});
	$(".dim").click(function(){
		$("body, html").removeClass("prevent");
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
	});
});