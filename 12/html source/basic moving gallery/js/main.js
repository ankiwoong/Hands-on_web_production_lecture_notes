/*
$(function(){
	var w=100;
	var amount=-300;

	$("#left").click(function(){
		amount-=w;
		$(".photo").animate({left:amount}, 400, function(){
			amount+=w;
			$(".photo").css({left:amount});
			$(".photo li").first().appendTo(".photo");
		});
	});
	$("#right").click(function(){
		amount+=w;
		$(".photo").animate({left:amount}, 400, function(){
			amount-=w;
			$(".photo").css({left:amount});
			$(".photo li").last().prependTo(".photo");
		});
	});
});
*/

/*
$(function(){
	var w=100;
	var amount=-300;
	var id=setInterval(rightMoving, 5000);

	function rightMoving(){
		amount+=w;
		$(".photo").animate({left:amount}, 400, function(){
			amount-=w;
			$(".photo").css({left:amount});
			$(".photo li").last().prependTo(".photo");
		});
	}
});
*/

$(function(){
	var w=100;
	var amount=-300;
	var id=setInterval(rightMoving, 5000);

	$("#left").click(leftMoving);
	$("#right").click(rightMoving);

	$("#left, #right").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(rightMoving, 5000);
		}
	);

	function leftMoving(){
		amount-=w;
		$(".photo").animate({left:amount}, 400, function(){
			amount+=w;
			$(".photo").css({left:amount});
			$(".photo li").first().appendTo(".photo");
		});
	}
	function rightMoving(){
		amount+=w;
		$(".photo").animate({left:amount}, 400, function(){
			amount-=w;
			$(".photo").css({left:amount});
			$(".photo li").last().prependTo(".photo");
		});
	}
});