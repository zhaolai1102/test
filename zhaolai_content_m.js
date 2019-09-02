$(function(){
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