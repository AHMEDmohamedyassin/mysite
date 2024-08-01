import $ from 'jquery'

$(function (){

    let scrolled = 0

    $(window).scroll(function (event) {
        let scrollY = event.currentTarget.scrollY
        let window = $(document).height()


        if(scrollY >= $('[data-section="about"]')?.offset().top && scrollY > scrolled){
            $('[data-section="about"]').find("img").fadeIn(1000)
        }


        $('[data-animate="services"] , [data-animate="pricing"]')?.each(function () {
            if(scrollY >= $(this)?.offset().top - 400 && scrollY > scrolled){
                $(this).css({
                    left : "0"
                })
            }
        })

        if(scrollY > scrolled ) scrolled = scrollY

    })


    $('[data-section="home"] img').animate({scale : 1})
})