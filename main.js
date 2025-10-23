$('.showFilters').on('click', function(){
    if($('.filters-list').is(':visible')){
        $('.filters-list').slideUp()
        $('.showFilters').text('Show filters')
    } else{
        $('.filters-list').slideDown()
        $('.showFilters').text('Hide filters')
    }

    // this will block the default behaviour of the #href jumping to the top of the page
    return false
})

$('.filters-list a').on('click', function(){
    var info = $(this).attr('data-filter')

    console.log(info)

    $('.product').hide()
    $(info).show()

    $('.filters-list a').removeClass('selected2')
    $(this).addClass('selected2')

    return false
})