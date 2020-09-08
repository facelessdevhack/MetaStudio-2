$(document).ready(function(){

	/*++++Loading++++*/

setTimeout(function(){
	$('body').addClass('loaded');
	$('.loading-section,.hex-loading').fadeOut('slow');
}, 10);

if($('.ancient-header').length>0){
	$('.ancient-header').parallax("50%", 0.5);
}

if($('.music-page').length>0){
	$('.mixx,.mixx2,.mixx3,.mixx4').parallax("50%", 0.2);
}

if($('.studio-page').length>0){
	$('.studio-header').parallax("50%", 0.2);
}

$(".hamburger,.navigate").on('click',function(){
    //$(this).toggleClass("is-active");
		if($(this).hasClass('is-active')){
			$('.hamburger').removeClass("is-active");
			$('.menus,.sm-subscription').removeClass("active");
			$('.overlay-b').removeClass("active");
			if($('.navigate').length>0){$('.hamburger').fadeToggle();}
			}else{
		$('.hamburger').toggleClass("is-active");		
		$('.menus').toggleClass("active");
		$('.overlay-b').toggleClass("active");
		if($('.navigate').length>0){$('.hamburger').fadeToggle();}
		}
  });
$(".sbread-line").on('click',function(){
    //$(this).toggleClass("is-active");
		$('.hamburger').toggleClass("is-active");
		$('.hamburger').fadeIn();
		$('.sm-subscription').toggleClass("active");
		$('.overlay-b').toggleClass("active");
  });	
	
$('.overlay-b').on('click',function(){
    $('.hamburger').removeClass("is-active");
		$('.menus,.sm-subscription').removeClass("active");
		$('.overlay-b').removeClass("active");
		if($('.navigate').length>0){$('.hamburger').fadeToggle();}
  });



$(".go-top,.esc").on('click', function(){
	$('html, body').animate({scrollTop: 0}, 2000, 'easeInOutExpo');
});

$(".faq-list-box b").on('click', function(){
	$(this).toggleClass('closed');
	$(this).next('.fad-details').slideToggle();
});

/*Video*/
if($('video').length>0){
var videoo = $('video').get(0);
$(".video-play .fa-pause").on('click', function(){
	$('video').get(0).pause();
	//$('video').get(1).pause();
	$('.video-play .fa-play,.video-play .fa-pause').fadeToggle(0);
});

$('video').get(0).play();
$('video').get(1).play();
$('video').get(2).play();
$('video').get(3).play();
$('video').get(4).play();

$(".video-play .fa-play").on('click', function(){
	$('video').get(0).play();
	//$('video').get(1).play();
	$('.video-play .fa-play,.video-play .fa-pause').fadeToggle(0);
});
$(".playpause").on('click', function(){
    if( $(".sm-video video").prop('muted') ) {
          $(".sm-video video").prop('muted', false);
					$('.playpause i').toggleClass('fa-volume-up').toggleClass('fa-volume-off');
					
    } else {
      $(".sm-video video").prop('muted', true);
			$('.playpause i').toggleClass('fa-volume-up').toggleClass('fa-volume-off');
		
    }
  });
}

/*Video*/

$(".vv-share").on('click', function(){
	$(this).toggleClass('vv-close');
	$('.vsmedia').toggleClass('vsmin');
});

$(".product-thumbails span").on('mouseover', function(){
	var afterpic=$(this).attr('ap');
	var beforepic=$(this).attr('bp');
	//alert(afterpic);
	$('.ap').attr('src','images/ancient-tuture/preset/'+afterpic);
	$('.bp').attr('src','images/ancient-tuture/preset/'+beforepic);
});


//document.getElementById("zoom-img").addEventListener("wheel", myFunction);
if($(".zoom-img").length>0){
var zioomimg=$(".zoom-img");
var zioomimg2=$(".zoom-img2");
var zioomimg3=$(".zoom-img3");
var zioomimg4=$(".zoom-img4");
//alert(zioomimg.length);

$(window).on('scroll', function() {
	/*First*/
  var wscroll= $(this).scrollTop();
	var imgpos= zioomimg.parent().parent().parent().offset();
	var imgposin= zioomimg.offset();
	var imgheight= zioomimg.height();
	var imgend=parseInt(imgheight)+parseInt(imgpos.top);
	var imgminus=parseInt(wscroll)-parseInt(imgpos.top);
	var iper= imgminus/(imgheight*.01)
	var itransform=(iper)/200+1;
	
	//$(".numn").html((iper)/200+1);
	$(".zoom-img-c").css({'height':imgheight,'margin-bottom':imgheight/3,'position': 'relative'});
	//zioomimg.css({'left': '0','top': '0','width': '100%','height': '100%','position': 'absolute','transform': 'scale3d(1.5, 1.5, 1)'})
	if(wscroll>imgpos.top && wscroll<imgend){
		zioomimg.css({'position': 'absolute','left': '0','top': '0','transform': 'scale3d('+itransform+', '+itransform+', 1)'});
	}
	/*First end*/
	/*Second*/
	
	var imgpos2= zioomimg2.parent().parent().parent().offset();
	var imgposin2= zioomimg2.offset();
	var imgheight2= zioomimg2.height();
	var imgend2=parseInt(imgheight2)+parseInt(imgpos2.top);
	var imgminus2=parseInt(wscroll)-parseInt(imgpos2.top);
	var iper2= imgminus2/(imgheight2*.01)
	var itransform2=(iper2)/200+1;
		
	$(".zoom-img-c2").css({'height':imgheight2,'margin-bottom':imgheight2/4,'position': 'relative'});
	//zioomimg.css({'left': '0','top': '0','width': '100%','height': '100%','position': 'absolute','transform': 'scale3d(1.5, 1.5, 1)'})
	if(wscroll>imgpos2.top-200 && wscroll<imgend2){
		zioomimg2.css({'position': 'absolute','left': '0','top': '0','transform': 'scale3d('+itransform2+', '+itransform2+', 1)'});
	}
	
	/*Second end*/
	
	/**Third*/
	
	var imgpos3= zioomimg3.parent().parent().parent().offset();
	var imgposin3= zioomimg3.offset();
	var imgheight3= zioomimg3.height();
	var imgend3=parseInt(imgheight3)+parseInt(imgpos3.top);
	var imgminus3=parseInt(wscroll)-parseInt(imgpos3.top);
	var iper3= imgminus3/(imgheight3*.01)
	var itransform3=(iper3)/200+1;
		
	$(".zoom-img-c3").css({'height':imgheight3,'margin-bottom':imgheight3/4,'position': 'relative'});
	//zioomimg.css({'left': '0','top': '0','width': '100%','height': '100%','position': 'absolute','transform': 'scale3d(1.5, 1.5, 1)'})
	if(wscroll>imgpos3.top-200 && wscroll<imgend3){
		zioomimg3.css({'position': 'absolute','left': '0','top': '0','transform': 'scale3d('+itransform3+', '+itransform3+', 1)'});
	}
	
	/*Third end*/
	
	/**Third*/
	
	var imgpos4= zioomimg4.parent().parent().parent().offset();
	var imgposin4= zioomimg4.offset();
	var imgheight4= zioomimg4.height();
	var imgend4=parseInt(imgheight4)+parseInt(imgpos4.top);
	var imgminus4=parseInt(wscroll)-parseInt(imgpos4.top);
	var iper4= imgminus4/(imgheight4*.01)
	var itransform4=(iper4)/200+1;
		
	$(".zoom-img-c4").css({'height':imgheight4,'margin-bottom':imgheight4/4,'position': 'relative'});
	//zioomimg.css({'left': '0','top': '0','width': '100%','height': '100%','position': 'absolute','transform': 'scale3d(1.5, 1.5, 1)'})
	if(wscroll>imgpos4.top-200 && wscroll<imgend4){
		zioomimg4.css({'position': 'absolute','left': '0','top': '0','transform': 'scale3d('+itransform4+', '+itransform4+', 1)'});
	}
	
	/*Third end*/
	
});

}

if($(".header-title").length>0){

var oppp=$(".header-title");
//alert(zioomimg.length);

$(window).on('scroll', function() {
	/*First*/
		//alert('sds');
  var wscroll= $(this).scrollTop();
	var whei= $(window).height();
	var opf=(whei-wscroll)/whei;
	
	if(wscroll>0 && wscroll<whei){
		//$(".numn").html(opf);
		$(".header-title").css({'opacity': opf});
	}
	/*First end*/	
	
});

}


if($(".preset-fix").length>0){

var oppp=$(".preset-fix");
//alert(zioomimg.length);

$(window).on('scroll', function() {
	/*First*/
		//alert('sds');
  var wscroll= $(this).scrollTop();
	var whei= $(window).height();
	var opf=(wscroll)/10;
	
	if(wscroll>0 && wscroll<whei){
		//$(".numn").html(opf);
		oppp.css({top: '-'+opf+'px'});
	}
	/*First end*/	
	
});

}

	/*if(zoomimg.top==0){
		
		}*/



/*++++Nav++++*/
/*$('.logo-section').affix({
	offset: {
	top: 42,
	bottom: function () {
	return (this.bottom = $('.top-header').addClass('true'));
		}
	}
});
$(".dropdown").hover(            
	function() {
		$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
		$(this).toggleClass('open');        
	},
	function() {
		$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
		$(this).toggleClass('open');       
	}
);*/

/*Owl Slider*/


$('.p-img').colorbox({rel:'p-img',transition:'fade', innerHeight:'90%'});
$('.open-comparison').colorbox({inline:true,transition:"fade", href:"#comparison2"});
$('.mwatch').colorbox({iframe:true,transition:"fade", innerWidth:'80%', height:'350	'});
$('.dwatch').colorbox({iframe:true,transition:"fade", innerWidth:'80%', height:'80%'});
//$('.sbread-line').colorbox({inline:true,transition:"fade", href:"#email-update", innerWidth:'300'},function(){$(this).colorbox.resize();  });

var wwidth=$(window).innerWidth();
if(wwidth>1350){
	//$('.sbread-line').colorbox({inline:true,transition:"fade", href:"#email-update", innerWidth:'600'});	
	}else{
		$('.p-img').colorbox({rel:'p-img',transition:'fade', innerWidth:'80%', height:'auto'});
		}

/*++++owl team++++*/

	var owlgallery = $("#preset-header,#music-header,#visual-story-list");
  owlgallery.owlCarousel({
      itemsCustom : [
        [0, 1]
      ],
			autoPlay: 3000,
			pagination:true,
			navigation : false,
			animateOut: 'fadeOut',
			animateIn: 'flipInX',
			items:1,
			margin:30,
			stagePadding:30,
			smartSpeed:450
			
  });

$(".app-prev").on('click', function(){owlgallery.trigger('owl.prev');});
$(".app-next").on('click', function(){owlgallery.trigger('owl.next');});


 var owlpost = $("#preset-post");
  owlpost.owlCarousel({
      itemsCustom : [
        [0, 1], [480, 2], [768, 3], [1200, 4]
      ],
			//autoPlay: 3000
			margin:30,
			pagination:false,
			navigation : false
  });


$(".p-left").on('click', function(){owlpost.trigger('owl.prev');});
$(".p-right").on('click', function(){owlpost.trigger('owl.next');});/**/

/*Owl Slider End*/



var ppw=$('.product-picc').width();
var pph=$('.product-picc').height();
var ppH=$('.product-picc').html();
var ppleft=$('.product-picc').offset();
var pptop=$('.product-picc').offset();
if(ppw>1){
	$('.pp').width(ppw).height(pph).html(ppH).css({'left':ppleft.left,'top':pptop.top});	
}

$(".vs-link").on('click', function(){	
	var icleft=$('a.icon-cart').offset();
	var ictop=$('a.icon-cart').offset();
	$('.pp').width(ppw).height(pph).html(ppH).css({'left':ppleft.left,'top':pptop.top});	
	setTimeout(function(){
		$('.pp').addClass('poss');
		$('.pp').css({top:'-350px',left:icleft.left-50});		
		setTimeout(function(){
			$('.pp').removeClass('poss');	
			$('.pp').html('');
			$('.pp').css({top:pptop.top,left:ppleft.left});		
		}, 600);
		
		
		}, 10);
});


$(".close-preset-box").on('click', function(){
	$(this).parent('.preset-shop-head').animate({top:'-500px','opacity':0}, 2000, 'easeInOutExpo');
	$(this).parent('.preset-shop-head').fadeToggle();
});

/*+++++Form Home+++++*/

function changeLang() {
	var selectBox = document.getElementById("change_lang");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	window.location.href = 'http://hidein.net?lang='+selectedValue;
}
/*--------------------------------------- ANIMATION --------------------------------------------*/
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();
});