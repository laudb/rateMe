<!--Slider Fraction-->

$(window).load(function(){
	$('.slider').fractionSlider({
		'fullWidth': 			true,
		'controls': 			true, 
		'pager': 				true,
		'responsive': 			true,
		'dimensions': 			"1380,460",
	    'increase': 			false,
		'pauseOnHover': 		false
	});

});


<!--//Slider Fraction//-->
<!--Tooltip-->
		$('[data-toggle="tooltip"]').tooltip();
<!--//Tooltip//-->

<!--Flip Button whole page-->
$(document).ready(function(){
  $("#btn-top").click(function(){    
    $("#flip-back").show();
    $("#btn-top").hide();

  });
  $("#flip-back").click(function(){
    $("#btn-top").show();
    $("#flip-back").hide();
  });
});
<!--Flip Button whole page-->   

<!--Animation.css-->
	$(window).scroll(function() {
		$('.animate-slideup').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
			
		
		if ($(this).scrollTop() > 550) {
        $('#fixedmenu').fadeIn('slow');
    } else {
        $('#fixedmenu').hide();
    }

		
	});
<!--//Animation.css//-->

<!--Lightbox-->

  $(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false});
  });

<!--//lightbox//-->

<!--Portfolio-->

$(function(){
     
    $('#portfolio').mixitup();
     
});

<!--//Portfolio//-->

<!--flip Whole Page-->

$("#btn-top").on("click",function(e){
	$(".flipbox").flippy({
		direction: "top",
		duration: "750",
		verso: "<iframe src=\"back.html\" frameborder=\"0\" scrolling=\"no\" width=\"100%\" height=\"924\"/></iframe>",
	 });
	 e.preventDefault();
});

<!--//flip Whole Page//-->


<!--Back to top-->
jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});


<!--//Back to top//-->

<!--Hover Dropdown Menu-->
$(document).ready(function(){
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
    });  
});

<!--//Hover Dropdown Menu//-->

<!--Accordion-->
    $("#accordion").collapse();
    $('.panel-title > a').click(function () {
        $('.active .accordain-icon').addClass('icon-plus', 200).removeClass('icon-minus', 200);
        $('.active .accordain-icon').addClass('icon-plus', 200).removeClass('icon-minus', 200);
        $('.panel-title > a').removeClass('selected');
        $(this).addClass('selected');
        $('.active .accordain-icon').removeClass('icon-plus', 200).addClass('icon-minus', 200);
    });
<!--//Accordion//-->

<!--Featured Pricing Class-->

function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 991) {
        $('#featured').removeClass('featured');
    }
    else {
        if (!init) {
            $('#featured').addClass('featured');
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});

<!--//Featured Pricing Class//-->

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



  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49779685-1', 'webyzona.com');
  ga('send', 'pageview');
