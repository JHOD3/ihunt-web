if($('#owl-logos')){
    $('#owl-logos').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        lazyLoad: true,
        stageClass:'align-items-center d-flex',
        responsive:{
            0:{
                items:2,
                center: true,
                loop:true,
                margin:10,
                nav:false
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
                items:2,
                center: true,
                loop:true,
                margin:10,
                nav:false
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

if($('#owl-card-blog')){
    $('#owl-card-blog').owlCarousel({
        lazyLoad: true,
        
        itemClass: 'owl-item mx-5 mx-md-4 mx-xxl-3',        
        responsive:{
            0:{
                stageClass:'align-items-center d-flex p-5 mx-md-auto',
                //stageOuterClass: 'owl-stage-outer justify-content-center d-grid',
                items:2,
                center: true,
                loop:true,
                nav:false,
                margin:-15,
                autoWidth: true
            },
            768:{
                stageClass:'align-items-center d-flex mx-md-auto p-4',
                items:3,
                center:false,
                loop:false,
                nav:false,
                margin:50,
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

let elementSelection = document.getElementsByClassName('icono-social');

for(var i = 0; i < elementSelection.length; i++) {
    (function(index) {
        elementSelection[index].addEventListener("mouseover", function() {
            let dataSrc = this.dataset.src;
            let imgSrc = this.getAttribute("src");
            this.setAttribute("src", dataSrc)
            this.dataset.src = imgSrc;
        })

        elementSelection[index].addEventListener("mouseout", function() {
            let dataSrc = this.dataset.src;
            let imgSrc = this.getAttribute("src");
            this.setAttribute("src", dataSrc)
            this.dataset.src = imgSrc;
        })

    })(i);

}

