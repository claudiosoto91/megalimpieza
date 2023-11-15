$(document).ready(function() {
 
    $("#owl-combos").owlCarousel({
        items: 4,
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [800,2], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0;
        itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option

        // Navigation
        navigation : true,
        navigationText : ["<<",">>"],
    });
   
  });