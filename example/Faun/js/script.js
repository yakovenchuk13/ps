var main = function() { 
    $('body').append('<a href="#header" id="go-top" title="Up">Up</a>');

    $('.icon-menu').click(function() { 
        $('.menu').animate({left: '0px'}, 200); 
        $('body').animate({left: '220px'}, 200); 
    });

    $('.icon-close').click(function() { 
        $('.menu').animate({left: '-220px'}, 200);   
        $('body').animate({left: '0px'}, 200); 
    });

    $(document).click(function(e) {
        if($('.menu').css('left') === '0px'){

            if($(e.target).closest('.menu').length === 0){
                $('.icon-close').click();
            } 
        }       
    });

    $('.menu__item').click(function(){
        $('.icon-close').click()
    });

    //slow scroll
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();   
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;      
        $('html, body').animate({scrollTop: dn}, 1000);
    });  
};

$(document).ready(main);

// Lift Up
$(window).scroll(function() {
    if ($(window).scrollTop() >= '250') $('#go-top').fadeIn('slow')
    else if ($(window).scrollTop() <= '250') $('#go-top').fadeOut('slow')
});




