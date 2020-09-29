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

	/* keyvisual */
	var w;
	var distance;

	$(window).resize(function(){
		w=$(window).width();

		if(w > 1200){
			distance=w;
		}else{
			distance=1200;
		}
		$(".hero .gallery").css({width:distance*4});
	});
	$(window).trigger("resize");

	$(".direction_nav li.left").click(function(e){
		e.preventDefault();
		$(".hero ul.gallery").prepend($(".hero ul.gallery li").last());
		$(".hero ul.gallery").css({left:"-="+w});
		$(".hero ul.gallery").animate({left:"+="+w}, 500);
	});
	$(".direction_nav li.right").click(function(e){
		e.preventDefault();
		$(".hero ul.gallery").animate({left:"-="+distance}, 500, function(){
			$(".hero ul.gallery").append($(".hero ul.gallery li").first());
			$(".hero ul.gallery").css({left:"+="+distance});
		});
	});

	/* section1 active class */
	$("#section1 .buttero_img").hover(
		function(){
			$("#section1 .buttero_img").addClass("active");
		},
		function(){
			$("#section1 .buttero_img").removeClass("active");
		}
	);
	$("#section1 .pro_bottom .atclip_img").hover(
		function(){
			$("#section1 .pro_bottom .atclip_img").addClass("active");
		},
		function(){
			$("#section1 .pro_bottom .atclip_img").removeClass("active");
		}
	);

	/* section2 active class */
	$("#section2 .heich").hover(
		function(){
			$("#section2 .heich_txt").addClass("active");
		},
		function(){
			$("#section2 .heich_txt").removeClass("active");
		}
	);
	$("#section2 .mimic").hover(
		function(){
			$("#section2 .mimic_txt").addClass("active");
		},
		function(){
			$("#section2 .mimic_txt").removeClass("active");
		}
	);
});