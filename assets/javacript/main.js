$(document).ready(() => {

    const card = $(".portfolio-component");
    const langArea = $(".languages-used");
    let hoverCheck = false;
    // --------------------Smooth Scroll
    var header = $(".header nav");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
            $(".header nav ul.ul-flex li a").css("color", "#fff");
        } else {
            header.removeClass("scrolled");
            $(".header nav ul.ul-flex li a").css("color", "#000");
        }
    });

    $(document).on("click", ".scroll", (event) => {

        event.preventDefault();
        console.log(event);

        var href = event.target.hash;

        console.log($(this.hash));
        console.log(href);

        $("body, html").animate({
            scrollTop: $(href).offset().top - 75
        }, 1000);
    });

    //iterate through language area class and find the ones who exceed the height limit
    langArea.each((iteration, item) => {

        const originalHeight = $(item).height();
        const langDiv = $(item);

        // console.log("This is the height: ")
        if (langDiv.height() > 60) {
            langDiv.css("height", "60px");
            createExpandArrow(langDiv);
        }



    });

    function createExpandArrow(element) {
        const hoverDiv = $(`<div class="hover-more"></div>`);
        const arrow = $(`<span class="downArrow"><i class="fas fa-chevron-down"></i></span>`);

        hoverDiv.append(arrow);
        element.append(hoverDiv);
    }

    function expandEffect(thisDiv) {


        var curHeight = thisDiv.parent().height();
        thisDiv.parent().css("height", "auto");
        var autoHeight = thisDiv.parent().height();

        thisDiv.parent().height(curHeight).animate({
            height: autoHeight
        }, 1000);

    }

    function contractEffect(thisDiv) {
        thisDiv.parent().animate({
            height: "60px"
        }, 1000);
    }


    //when you have loaded everything check the cards to see if their height is over 60px;
    $(".hover-more")
        .mouseenter(function () {
            // if parent height is 60, expand
            console.log($(this).parent().height());
            if ($(this).parent().height() === 60) {
                expandEffect($(this))

            } else if (($(this).parent().height() > 60)) {
                contractEffect($(this));
            }

        })

});