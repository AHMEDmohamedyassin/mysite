import $ from 'jquery'

$(function () {
    $(window).scroll(function (event) {

        // showing and hidding header on scrolling
        if(event.currentTarget.scrollY > 200)
            $('[data-animate="header"]').addClass('scroll_header')
        else $('[data-animate="header"]').removeClass('scroll_header')

        // progress bar
        let page_height = $(document).innerHeight() - $(window).innerHeight()
        let scroll_height = event.currentTarget.scrollY 
        $(`[data-animate="header_progress_bar"]`).css({
            width : (scroll_height/page_height)*100 + "%"
        })


        // header links activate
        $(`[data-section]`).each(function(){
            if($(this).offset().top - ($(window).innerHeight()/2) <= scroll_height)
                $(`[data-link="${$(this).attr("data-section")}"]`).addClass('active_link').siblings().removeClass('active_link')
        })
    })


    // links animate
    $(`[data-link]`).click(function () {
        $("html").animate({
            scrollTop : ($(`[data-section="${$(this).attr("data-link")}"]`)?.offset()?.top )
        })
    })



    // side menu
    let sidemenu = $("[data-animate='side_menue']")
    //close Menu function
    function closeSideMenu(){
        sidemenu.animate({
            right : `-500px`
        } , 200 , function () {
            $(this).parent().fadeOut(100)
        })
    }
    // close side menu
    $(`[data-animate="close_side_menu"]`).click(closeSideMenu)
    sidemenu.find('li').click(closeSideMenu)
    sidemenu.parent().click(function (event){
        if(event.target == $(this)[0]) closeSideMenu()
    })
    // open side menu
    $(`[data-animate="open_side_menu"]`).click(300 , function () {
        sidemenu.parent().fadeIn(100 , function () {
            sidemenu.animate({
                right : 0
            } , 200)
        })
    })

    // open side menu
})