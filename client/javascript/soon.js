    
<!--Tooltip-->
		$('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
<!--//Tooltip//-->
    
<!--Animation.css-->
	$(window).scroll(function() {
		$('.animate-slideup').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
	});
<!--//Animation.css//-->

<!--countdown-->  
$(function () {
	var countDay = new Date();
	countDay = new Date('October 25, 2014 00:01:00');
	$('#Countdown').countdown({until: countDay, 
	format: 'DHMS',
	layout: 
							'<ul id="values" class="list-inline counter_numbers">'+
								'<li id="counter_days">{dnnn}<p class="date_label">{dl}</p></li>'+
								'<li id="counter_hours">{hnn}<p class="date_label">{hl}</p></li>'+
								'<li id="counter_minutes">{mnn}<p class="date_label">{ml}</p></li>'+
								'<li id="counter_seconds" class="pulse">{snn}<p class="date_label">{sl}</p></li>'+							
							'</ul>'
		});
	$('#year').text(countDay.getFullYear());
});
<!--//countdown//-->

<!--Style switcher-->

$(document).ready(function() {
    $('#switcher').styleSwitcher({
             useCookie: true
        });
});



$(document).ready(function(){
  $("#boxed").click(function(){    
		$("body").css({"width":"85%", "margin":"0 auto"});
  });
  $("#fluid").click(function(){    
		$("body").css({"width":"auto", "margin":"auto"});
  }); 
  $("#bg1").click(function(){
		$("html").css({"background":"url(images/switcher/bg1.png) repeat"});
  });
  $("#bg2").click(function(){
		$("html").css({"background":"url(images/switcher/bg2.png) repeat"});
  });
  $("#bg3").click(function(){
		$("html").css({"background":"url(images/switcher/bg3.png) repeat"});
  });
  $("#bg4").click(function(){
		$("html").css({"background":"url(images/switcher/bg4.png) repeat"});
  });
  $("#bg5").click(function(){
		$("html").css({"background":"url(images/switcher/bg5.png) repeat"});
  });             
  $("#bg6").click(function(){
		$("html").css({"background":"url(images/switcher/bg6.png) repeat"});
  });
  $("#reset").click(function(){
		$("body").removeAttr("style");
		$("html").removeAttr("style");
  });    
  
});



$(function(){
	$('.slide-out-div').tabSlideOut({
		tabHandle: '.handle',                     //class of the element that will become your tab
		pathToTabImage: 'images/cog.png', //path to the image for the tab //Optionally can be set using css
		imageHeight: '40px',                     //height of tab image           //Optionally can be set using css
		imageWidth: '40px',                       //width of tab image            //Optionally can be set using css
		tabLocation: 'left',                      //side of screen where tab lives, top, right, bottom, or left
		speed: 300,                               //speed of animation
		action: 'click',                          //options: 'click' or 'hover', action to trigger animation
		topPos: '250px',                          //position from the top/ use if tabLocation is left or right
		leftPos: '20px',                          //position from left/ use if tabLocation is bottom or top
		fixedPosition: true                      //options: true makes it stick(fixed position) on scroll
	});

});


<!--//Style switcher//-->