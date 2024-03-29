var mySwiper;
let make_lunbo = () => {
	mySwiper = new Swiper('.swiper-container', {
		autoplay: {
			disableOnInteraction: false,
		},
		loop : true,   
		pagination: {
    		el: '.swiper-pagination',
 		},
	})
};
let change = function(){
	var phoneWidth = parseInt(window.screen.width);
	if (phoneWidth > 750){
		$('html').css({'font-size':'75px'});
	}else{
		$('html').css({'font-size':phoneWidth/10});
	}
}
$(function(){
	change();
	make_lunbo();
	$(window).resize(() => {
		change();
		mySwiper.destroy();
		make_lunbo();
	});
	$('.zd-btn').click(function(){
		let target = $(event.target);
		if(target.text()==='展开'){
			target.empty();
			target.append('<img src="./assets/shousuo1@2x.png" class="zd-pic2">收缩');
		}else{
			target.empty();			
			target.append('<img src="./assets/zhankai1@2x.png" class="zd-pic2">展开');
		}
		let show = $('#'+target.attr('show'));
		show.slideToggle();
	})
});
