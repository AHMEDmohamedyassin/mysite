import $ from 'jquery'

$(function (){

    let scrolled = 0

    $(window).scroll(function (event) {
        let scrollY = event.currentTarget.scrollY
        let window = $(document).height()


        if(scrollY + 600 >= $('[data-section="about"]')?.offset().top && scrollY > scrolled){
            $('[data-section="about"]').find("img").animate({
                opacity : 1
            } , 100)
        }


        $('[data-animate="services"] , [data-animate="pricing"]')?.each(function () {
            if(scrollY >= $(this)?.offset().top - 600 && scrollY > scrolled){
                $(this).css({
                    left : "0"
                })
            }
        })

        if(scrollY > scrolled ) scrolled = scrollY

    })


    $('[data-section="home"] img').animate({scale : 1})
})