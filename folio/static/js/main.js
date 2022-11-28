(function($){
    "use strict"
    
//navbar
$(window).scroll(function (){
    
    if($(this).scrollTop() > 50){
        $('.navbar').fadeIn('slow').css('display','flex');
    }else{
        $('.navbar').fadeOut('slow').css('display','none');
    }
})


    if($('.typed-text-output').length == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output',{
            strings:typed_strings.split(', '),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop:true
        });
    }

    // $('.navbar-nav a').on('click',function(event){
    //     if(this.hash !==""){
    //         event.preventDefault();
    //         $('html,body').animate({
    //             scrollTop: $(this.hash).offset().top=45
    //         },1500,'easeInOutExpo');

    //         if($(this).parents('.navbar-nav').lenght){
    //             $('.navbar-nav .active').removeClass('active');
    //             $(this).closest('a').addClass('active')
    //         }
    //     }
    // });

    // var portfolioIsotope = $('.portfolio-conatainer').isotope({
    //     itemSelector:'.portfolio-item',
    //     layoutMode:'fitRows'});
    // $('#portfolio-flters li').on('click',function(){
    //     $("#portfolio-filter li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // })

    $('#gallery-all').on('click', function(){
        $('#gallery-all').addClass('active')
        $('#gallery-design').removeClass('active')
        $('#gallery-certificate').removeClass('active')
        $('.designs').show()
        $('.certificates').show()
    })

    $('#gallery-design').on('click', function(){
        $('#gallery-design').addClass('active')
        $('#gallery-all').removeClass('active')
        $('#gallery-certificate').removeClass('active')
        $('.designs').show()
        $('.certificates').hide()
        // console.log("design");
    })

    $('#gallery-certificate').on('click', function(){
        $('#gallery-certificate').addClass('active')
        $('#gallery-design').removeClass('active')
        $('#gallery-all').removeClass('active')
        $('.designs').hide()
        $('.certificates').show()
    })

    $('.skill').waypoint(function(){
        
        $('.progress .progress-bar').each(function(){
            
            $(this).css("width",$(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


})(jQuery);