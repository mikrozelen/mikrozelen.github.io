window.addEventListener("DOMContentLoaded", () => {

    //slider

    var slider = tns({
        container: '.recept__slider',
        mode: "carousel",
        autoplayButtonOutput: false,
        mouseDrag: true,
        speed: 500,
        controlsContainer: "#custom-control",
        navPosition: "bottom",
        animateOut: "tns-fadeOut",
        responsive: {

            320: {
                items: 1,
                touch: true,
                mouseDrag: true,
                controls: true,
                nav: true,

            },
            900: {
                items: 1,
                touch: true,
                mouseDrag: true,
                controls: true,
                nav: true,

            }
        }
    });

    //anhcor link

    $('a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    // scroll up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    })

    $(document).ready(function () {
        $(".up").click(function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

    });
    
})