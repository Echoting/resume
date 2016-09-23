$(function(){
	//home部分
	(function(){
		var aA=$('#home').find('ul li a');
		var aLi = $('#home').find('ul li');
		var aLink = $('body').children();
		var backTop = $('#backTop');
		var oP = $('#home').find('.peak');
		var oSpan = $('#home').find('.move');
		
		aA.each(function(index){
			$(this).click(function(){
				var aTop=aLink.eq(index).offset().top;
				$('html,body').animate({ scrollTop: aTop},1000);
			});
		});
		
		backTop.click(function(){
			$('html,body').animate({ scrollTop: 0},1000);
		});

		oP.hover(function(){
			$('#home').find('p').css('color','#666');
			oSpan.stop().animate({width:320},300);
		},function(){
			$('#home').find('p').css('color','rgb(35,35,43)');
			oSpan.stop().animate({width:0},300);
		});

		aLi.each(function(){
			$(this).hover(function(){
				var oSpan = $(this).find('span');
				oSpan.animate({opacity:1, padding: 10},500);
			},function(){
				var oSpan = $(this).find('span');
				oSpan.animate({opacity:0, padding: 0},500);
			});
		});

	})();

	//protifilio部分
	(function(){
		var aLi=$('.pic_list li');
		for(var i=0; i<aLi.length;i++){
			aLi.eq(i).bind("mouseenter mouseleave",
			function (e) {
				var meng = $(this).find('.meng');
				var w = $(this).width();
				var h = $(this).height();
				var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
				var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
				var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
				var eventType = e.type;
				// var dirName = new Array('上方','右侧','下方','左侧');
				if(e.type == 'mouseenter'){
					// $(this).html(dirName[direction]+'进入');
					// console.log(direction);
					if( direction==0){
						meng.css({top: -236, left: 10, display: 'block'});
						meng.stop().animate({top: 10, left: 10},200);
					}
					if( direction==1){
						meng.css({top: 10, left: 353, display: 'block'});
						meng.stop().animate({top: 10, left: 10},200);
					}
					if( direction==2){
						meng.css({top: 236, left: 10, display: 'block'});
						meng.stop().animate({top: 10, left: 10},200);
					}
					if( direction==3){
						meng.css({top: 10, left: -353, display: 'block'});
						meng.stop().animate({top: 10, left: 10},200);
					}
				}else{
					if(direction==0){
						meng.stop().animate({top: -236, left: 10},200,function(){
							meng.css('display','none');
						});
					}
					if(direction==1){
						meng.stop().animate({top: 10, left: 373},200,function(){
							meng.css('display','none');
						});
					}
					if(direction==2){
						meng.stop().animate({top: 256, left: 10},200,function(){
							meng.css('display','none');
						});
					}
					if(direction==3){
						meng.stop().animate({top: 10, left: -353},200,function(){
							meng.css('display','none');
						});
					}
					
					// meng.css('display','none');
				}
			});
		}

	})();

	//featured 部分
	(function(){
		var aLi = $('.featured').find('li');
		var aDiv = aLi.children().find('div');
		for(var i=0;i<aLi.length;i++){
			aLi.eq(i).stop().hover(function(){
				var oDiv = $(this).find('.icon');
				if($(this).index()%2!=0){
					oDiv.css('background','rgb(118,184,82)');
				}else{
					oDiv.css('background','rgb(50,59,67)');
				}
				
				oDiv.removeClass('dot ina');
				oDiv.addClass('pulse');
				// oDiv.animate({'transform':scale(1)},1000);
				// oDiv.animate({'-moz-transform':scale(1)},1000);
				// oDiv.animate({'-webkit-transform':scale(1)},1000);
				
				// oDiv.parent().css('background','rgb(118,184,82)');
			},function(){
				var oDiv = $(this).find('.icon');
				if($(this).index()%2!=0){
					oDiv.css('background','rgb(118,184,82)');
				}else{
					oDiv.css('background','rgb(50,59,67)');
				}
				oDiv.removeClass('pulse');
				oDiv.addClass('dot ina');
			});
		}
	})();


	(function(){
		var aInp = $('.text');
		aInp.each(function(){
			$(this).focus(function(){
				// alert(11);
				$(this).val('');
			});

			$(this).blur(function(){				
				if($(this).val() == ''){
					this.value = this.defaultValue; 
				}
			});
		});
	})();
		
		
});


	$(this).focus(function(){
				// alert(11);
				$(this).val('');
			});

			$(this).blur(function(){				
				if($(this).val() == ''){
					this.value = this.defaultValue; 
				}
			});