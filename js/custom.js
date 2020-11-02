$(function(){
	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height(),
		imgURL = "http://img.khan.co.kr/spko/storytelling/2020/2030-invest-report-2/",
		isMobile = screenWidth <= 800 && true || false,
		isNotebook = (screenWidth <= 1300 && screenHeight < 750) && true || false,
		isMobileLandscape = ( screenWidth > 400 && screenWidth <= 800 && screenHeight < 450 ) && true || false;
	window.onbeforeunload = function(){ window.scrollTo(0, 0) ;}
	var randomRange = function(n1, n2) {
		return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
	};
	$(window).resize(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
    });


	$(".close-ie-block").on("click", function(){
		$(".ie-block-9").hide();
	})


    var ieUnder = false;
    function checkIe(){ 
        var word; 
        if (navigator.userAgent.indexOf("MSIE") >= 0) {
            console.log("ieUNDER 10");
            ieUnder = true;
            return true;
        }else {
            return false;
        }
    } 
    checkIe();


	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/
	$(".aniOb").css({"opacity":0});
	$(".line").animate({"opacity":1, "width":"80%"}, 1200, "easeInOutCubic");
	$(".building").delay(300).animate({"opacity":1, "bottom":"0"}, 1200, "easeInOutCubic");
	$(".chart").delay(600).animate({"opacity":1}, 1200, "easeInOutCubic");
	$(".coin").delay(900).animate({"opacity":1, "right":"-100px"}, 1200, "easeInOutCubic");
	$(".person").delay(1200).animate({"opacity":1, "bottom":"0"}, 1200, "easeInOutCubic");
	$(".money--1").delay(1500).animate({"opacity":1, "left":"35%"}, 1200, "easeOutElastic");
	$(".money--2").delay(1800).animate({"opacity":1, "left":"60%"}, 1200, "easeOutElastic");
	$(".money--3").delay(2100).animate({"opacity":1, "left":"35%"}, 1200, "easeOutElastic");
	$(".money--4").delay(2400).animate({"opacity":1, "left":"30%"}, 1200, "easeOutElastic")
	
	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/





	/*								*/
	/*          CHART FUNCTION      */
	/*								*/
	
	var valueMax = 75;
	var multiple = $(".pole-holder").width() / valueMax;

	function resetPoleGraph(){
		$(".pole-graph").each(function(){
			var $poles = $(this).find(".each-pole");
			for(p=0;p<$poles.length;p++){
				$poles.eq(p).css({"width":"1px"});
				//$poles.eq(p).find(".value").hide();
				$poles.eq(p).find(".value").css({"opacity":"0"});
			}
		});
	}
	resetPoleGraph();


	function makePoleAnimate(polebodyId, pgn){
		var $polebody =  $(polebodyId);
		var $poles = $polebody.find(".each-pole");
		for(p=0;p<$poles.length;p++){
			var ani_width = (($poles.eq(p).find(".value").html().replace("%", "")) * multiple);
			//console.log(ani_width);
			if(ani_width <= 10){
				if(ani_width== 0){
					ani_width =  5
				}else{
					ani_width =  15
				}
				$poles.eq(p).addClass("pole-short")
			};
			$poles.eq(p).delay(pgn*1000+p*200).animate({"width": ani_width+"px"}, 1000, function(){
				$(this).find(".value").animate({"opacity":"1"}, 500);
			});
		}

	};
	
	function setAvrLinePos(){
		$(".avr-line").each(function(i){
			var leftValue = $(this).find("p").html().replace("전체 응답 ", "").replace("%", "");
			leftValue = leftValue*multiple;
			$(this).css({"left":leftValue+"px"})
		});
	}
	setAvrLinePos();


	$(".result-area").hide();
	$(".opt-holder ul li").on("click", function(){
		var $qtb = $(this).parent("ul").parent(".opt-holder").parent(".test-area").parent(".quick-test-box");
		if($(this).hasClass("on")==true || $qtb.hasClass("clicked")==true){
		
		}else{
			$(this).addClass("on");
			$qtb.addClass("clicked");
			$qtb.find(".result-area").fadeIn();
			var $pg = $qtb.find(".pole-graph");
			for(pg=0; pg<$pg.length;pg++){
				var idStr = "#"+ $pg.eq(pg).attr("id");
				makePoleAnimate(idStr , pg);
			};
		}
	});
	/*								*/
	/*          CHART FUNCTION      */
	/*								*/	


	$(".opt-holder").on("mousedown", function(){
		$("#click-01").fadeOut();
	});
	$(".opt-holder").on("touchstart", function(){
		$("#click-01").fadeOut();
	});

	var art_banner_pos = $(".banner-list").offset().top;
	$("#GO_ART_BANNER").on("click", function(){
		$("html, body").animate({scrollTop: art_banner_pos}, 1200, "easeOutCubic");
	});


	function init(){
	}


	$(".loading-page").fadeOut(200, function(){
		init();
	});



	$(window).scroll(function(){
		var nowScroll = $(window).scrollTop();
		var nowScrollWithCon = nowScroll+screenHeight*0.6;
	
		$(".hideme").each(function(i){
			if( $(this).hasClass("shown") == false && nowScroll + screenHeight > $(this).offset().top + $(this).outerHeight()*0.5 ){
				$(this).addClass("shown")
				$(this).stop().animate({"opacity":"1"},500);
			}
		});

	});




});


function sendSns(s) {
  var url = encodeURIComponent(location.href),
	  txt = encodeURIComponent($("title").html());
  switch (s) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
