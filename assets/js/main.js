(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        

    $(".homepage-sliders").owlCarousel({
    	items:1,
    	loop:true,
    	autoplay:false,
    	dots:false,
    	nav:true,
    	navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    })
    $(".product-promotions").owlCarousel({
    	items:1,
    	loop:true,
    	autoplay:false,
    	dots:true,
    	nav:false,
    	
    })

        $(".product-list").masonry();

        $(".menu-trigger").on("click",function(){
            $(".off-canvas-menu, .off-canvas-menu-overly").addClass("active");
            return false;
        })
        $(".menu-close, .off-canvas-menu-overly").on("click",function(){
            // $(".off-canvas-menu, .off-canvas-menu-overly").removeClass("active");
              $(".off-canvas-menu, .off-canvas-menu-overly").removeClass("active");
           
        })


    });



    jQuery(window).load(function(){

        
    });


}(jQuery));	