$(function(){

	//푸터 토글
	$("footer .tel").click(function(){
		$(this).toggleClass('on');
	});

	//탭메뉴 제어
	$(".tab").next("div").find("ul").hide();
	$(".user_list.favor.user").show();
	$(".tab li:eq(0) a").addClass("on");
	$(".tab li a").click(function(){
		var list_val = $(this).parent("li").attr("data-n");
		$(".tab li a").removeClass("on");
		$(this).addClass("on");
		$(".tab").next("div").find("ul").hide();
		$(".user_list.favor."+list_val).show();
	});

	//슬라이드 메뉴 제어
	$('nav').before("<div class='deemed'></div>");

	$('header .menu').click(function(){
		$('.deemed').fadeIn();
		$('nav').animate({"left":"0"},"fast","swing");
	});

	function menu_close(){
		$('nav').animate({"left":"-320px"},"fast","swing",function(){
			$('.slide_menu > ul > li > ul').slideUp(250);
			$('.slide_menu > ul > li').removeClass('on');
		});
		$('.deemed').fadeOut();
	};

	$('.deemed, nav .slide_menu .close').click(function(){
		menu_close();
	});

	$('.slide_menu > ul > li > a.btn').click(function(){
		if($(this).next('ul').css('display') == 'block'){
			$('.slide_menu > ul > li').removeClass('on');
			$('.slide_menu > ul > li > ul').slideUp(250);
		} else {
			$('.slide_menu > ul > li').removeClass('on');
			$(this).parent().addClass('on');
			$('.slide_menu > ul > li > ul').slideUp(250);
			$(this).next('ul').slideDown(250);
		};
	});
});