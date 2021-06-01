
window.addEventListener('load', function(){

    new Glider(document.getElementById('carousel-slide-1'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: false,
        arrows: {
            prev: '#ctaCarouselprevrow',
            next: '#ctaCarouselnextrow',
        }
    });

    new Glider(document.getElementById('carousel-slide-2'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: false,
        arrows: {
            prev: '#ctaCarouselprev',
            next: '#ctaCarouselnext',
        }
    });

    

    
}); 

window.addEventListener('load', function(){

    new Glider(document.getElementById('leadership-carousel'), {
        slidesToShow: 7,
        slidesToScroll: 7,
        draggable: false,
        arrows: {
            prev: '#cta-carousel-prev-leadership',
            next: '#cta-carousel-next-leadership',
        }
    });

});    