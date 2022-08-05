if($('#owl-logos')){
    $('#owl-logos').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        lazyLoad: true,
        stageClass:'align-items-center d-flex',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
}

if($('#owl-logos-2')){
    $('#owl-logos-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        lazyLoad: true,
        stageClass:'align-items-center d-flex',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
}

if($('#owl-person')){
    $('#owl-person').owlCarousel({
        margin:10,
        nav:true,
        lazyLoad: true,
        stageClass:'align-items-center d-flex',
        responsive:{
            0:{
                items:1
            }
        }
    })
}
