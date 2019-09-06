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
});
