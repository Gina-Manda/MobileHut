$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})