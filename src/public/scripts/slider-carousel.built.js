$(document).ready(function() {
    var slider = $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    }); 
    $('#goToPrevSlide').click(function(){
        slider.goToPrevSlide(); 
    });
    $('#goToNextSlide').click(function(){
        slider.goToNextSlide(); 
    });
});



$(document).ready(function() {
    var slider = $('#publicMethods2').lightSlider({
        autoWidth:true,
        loop:false
    });
    $('#goToPrevSlide2').click(function(){
        slider.goToPrevSlide(); 
    });
    $('#goToNextSlide2').click(function(){
        slider.goToNextSlide(); 
    });
});


