import $ from 'jquery'

$(function () {
    $('[data-selection="nav"]').children('*').each(function () {
        $(this).click(function () {
            $(this).addClass('techAnimation').siblings().removeClass('techAnimation')
            let selection = $(this).attr("data-selection")

            $(`[data-selection="content"] [data-selection="${selection}"]`).fadeIn().siblings().hide()
        })
    })

    $('[data-selection="nav"]').children(':first').click()
})