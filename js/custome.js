


$('document').ready(function(){


    


// Mixitup js
        // var mixer = mixitup('.margin');
        var container =document.querySelector('.margin');

        var mixer = mixitup(container, {
            selectors: {
                control: '[our-mix-control]'
            }
        });

// wow.js=======
        new WOW().init();

        //======= Menu js ===========
        $('.navbar-nav li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
        $('.navbar-nav a[href^="#"]').click(function(e){
            e.preventDefault();

            var target = this.hash;
            $('html, body').animate({
                scrollTop:$(target).offset().top -120
            }, 500);
        });

        //============ ScrollTop============

        $('.top').click(function(){
            $('html, body').animate({
                scrollTop:0
            },1000);
        });
        // $('.top').hide();
        $(window).scroll(function(){
            var ourTop = $(this).scrollTop();

            if(ourTop<500) {
                $('.top').fadeOut();
            }
            else {
                $('.top').fadeIn();
            }


            // Menu fixed
            if(ourTop>200){
                $('body').addClass('fixed');
            }
            else{
                $('body').removeClass('fixed');
            }
        });



    });        