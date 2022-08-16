if($('#owl-logos')){
    $('#owl-logos').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
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
                items:3,
                nav:false
            },
            1000:{
                items:6,
                nav:false
            } 
        }
    })
}

if($('#owl-logos-2')){
    $('#owl-logos-2').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
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
                items:3,
                nav:false
            },
            1000:{
                items:6,
                nav:false
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
        stageClass:'align-items-center d-flex mx-auto',
        navContainerClass:'owl-nav',
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

/**
 * Iniciando AOS
 */
AOS.init({
    disableMutationObserver: true, 
    throttleDelay: 150,
    debounceDelay: 50, 
    mirror: false,
    once: true
});

/**  
 * Funcion global para la ejecucion de las 
 * otras animacion con lazyload.
*/

lozad('.lozad', {
    load: function(element) {
        if (element.dataset.type == 'lottiefiles'){
            let paused = false;
            let animation = lottie.loadAnimation({
                container: element, 
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: element.dataset.src,
                name: element.dataset.name
            });
            if(element.dataset.loopStart && element.dataset.loopEnd){
                animation.addEventListener("complete", (e) =>{
                    paused = !paused;
                    if(paused) {
                        animation.playSegments([parseInt(element.dataset.loopEnd), parseInt(element.dataset.loopStart)], false);
                    } else {
                        animation.playSegments([parseInt(element.dataset.loopStart), parseInt(element.dataset.loopEnd)], false);
                    }
                })
            }
        }
        if(element.dataset.type == 'image'){
            element.src = element.dataset.src;
        }
    }
}).observe()
//- data-loop-start
//- data-loop-end



/**  
 * Funcion global para la ejecucion de las 
 * animaciones principales de cada pagina. 
*/
const lottiePlayer = document.querySelector('.lottie-player')
let pausedP = false;

if(lottiePlayer != null){
    let animationPrincipal = lottie.loadAnimation({
        container: lottiePlayer, 
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: lottiePlayer.dataset.animationPath,
        name: 'principal',
        progressiveLoad:true,
    });

    animationPrincipal.addEventListener("complete", (e) =>{
        pausedP = !pausedP;
        if(pausedP) {
            animationPrincipal.playSegments([parseInt(lottiePlayer.dataset.loopEnd), parseInt(lottiePlayer.dataset.loopStart)], false);
        } else {
            animationPrincipal.playSegments([parseInt(lottiePlayer.dataset.loopStart), parseInt(lottiePlayer.dataset.loopEnd)], false);
        }
    })
}


multilang.translate({
    'default': 'es',
    'classElements': 'multilanguage',
    'btnClassChange': 'changeLang',
    'attrKey': 'data-lang-key'
});

//  Ver y ocultar contraseña
if($('.view-password')){
    $(document).on('click','.view-password', function(){
        let input = $(this).parent().find('input');
        if(input.attr('type') == 'password'){
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }
    });
}

if($('.changeIdioma')){
    console.log(localStorage.getItem("idioma"))
    if(localStorage.getItem("idioma") == 'es'){
        $('.changeIdioma').attr('data-lang','en');
        $('.changeIdioma').find('span').text('Español');
    }else{
        $('.changeIdioma').attr('data-lang','es');
        $('.changeIdioma').find('span').text('English');
    }
    $('.changeIdioma').on('click', function(e){
        e.preventDefault();
        let idioma = $(this).data('lang');
        localStorage.setItem("idioma",idioma);
        location.reload();
    })
}
