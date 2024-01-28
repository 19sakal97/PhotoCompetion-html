(function($){
    $(function(){
        /* Scroll to sections*/
        $(".jq--scroll-Výherní-foto").click(function(){
            $("html, body").animate({scrollTop: $(".jq--Výherní-foto").offset().top}, 1000);
        });
        
         $(".jq--scroll-Naše-tipy").click(function(){
            $("html, body").animate({scrollTop: $(".jq--Naše-tipy").offset().top}, 1000);
        });
        
         $(".jq--scroll-Výherci").click(function(){
            $("html, body").animate({scrollTop: $(".jq--Výherci").offset().top}, 1000);
        });
        
         $(".jq--scroll-Aktuální-kolo").click(function(){
            $("html, body").animate({scrollTop: $(".jq--Aktuální-kolo").offset().top}, 1000);
        });
        
         $(".jq--scroll-kontakt").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 1000);
        });
        
        /*scroll tlačítek u nadpisu*/
         $(".jq--scroll-Chci-soutěžit").click(function(){
            $("html, body").animate({scrollTop: $(".jq--Výherci").offset().top}, 1000);
        });
        
         $(".jq--scroll-Potřebuju-poradit").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 1000);
        });
        
        /* Mobile navigation */
        $(".jq--nav-icon").click(function(){
            $(".nav-background").fadeToggle(600);
            $(".mobile-nav-back").fadeToggle(600);
            $("nav ul").fadeToggle(600);
        });
        
        /* Podmínka pro změnu burgeru na křížek */
        $(".jq--image-hamburger").click(function(){
            
            if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png") 
            {
                $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
            }
            else 
            {
                $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
            }
        });
    });
})(jQuery);
