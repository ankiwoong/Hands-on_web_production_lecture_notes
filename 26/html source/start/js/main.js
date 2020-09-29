$(function(){
	var w; // 윈도우의 가로 크기를 정의하는 변수입니다.
	var h; // 메뉴의 세로 크기를 정의하는 변수입니다.

	/*
	반응형에 따른 h 세로 크기의 변화

	920px 이하 : h 200px
	1070px 이하 : h 290px
	PC 해상도 : h 376px
	*/

	$(window).resize(function(){
		w=$(this).width();

		if(w >= 760){
			$(".dim").trigger("click");
		}
		if(w <= 920){
			h=200;
		}
		else if(w <= 1070){
			h=290;
		}
		else{
			h=376;
		}
	})
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

		if($("#mobile .mobile_inner > ul > li").hasClass("active") == true){
			$("#mobile .mobile_inner > ul > li").removeClass("active");
			$(".sub").removeClass("active");
		}
	});
	$("#mobile .mobile_inner > ul > li").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$("#mobile .mobile_inner > ul > li").removeClass("active");
			$(this).addClass("active");
			$(".sub").removeClass("active");
			$(this).find(".sub").addClass("active");
		}else{
			$(this).removeClass("active");
			$(this).find(".sub").removeClass("active");
		}
	});

	// Slim Scroll
	$(".mobile_inner").slimscroll({
		height: "100%"
	});

	// Owl Carousel
	var $owl1=$("#carousel1");

	$owl1.owlCarousel({
		margin: 1,
		autoplay: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	var $owl2=$("#carousel2");

	$owl2.owlCarousel({
		margin: 1,
		autoplay: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 2
			}
		}
	});
});