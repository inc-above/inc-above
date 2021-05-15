window.addEventListener('load', function(){
    new Glider(document.getElementById('recordShelfcarousel'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: 'prevCarouselrecord',
            next: 'nextCarouselrecord',
        }
    });
});