$(document).ready(() => {
    //Global variables
    const windowHeight = $(window).height(); // New height
    const windowWidth = $(window).width();

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

        //grab href link
        var href = event.target.hash;

        $("body, html").animate({
            scrollTop: $(href).offset().top - 75
        }, 1000);
    });
    // End of smooth scroll ------------------------------

    //start card hover animations -----------------------------------
    //iterate through language area class and find the ones who exceed the height limit
    langArea.each((iteration, item) => {
        const langDiv = $(item);
        // console.log("This is the height: ")
        if (langDiv.height() > 60) {
            console.log(langDiv);
            langDiv.css("height", "60px");
            createExpandArrow(langDiv);
        } else {
            langDiv.css("height", "60px");
        }
    });

    function createExpandArrow(element) {
        const hoverDiv = $(`<div class="hover-more"></div>`);
        const arrow = $(`<span class="downArrow"><i class="fas fa-chevron-down"></i>more</span>`);
        hoverDiv.append(arrow);
        element.append(hoverDiv);
    }

    function expandEffect(thisDiv) {
        //grab the .language-uses current height t
        var curHeight = thisDiv.parent().height();
        //change the paretn's height so that it has it's natural height
        thisDiv.parent().css("height", "auto");
        //store the natural height number
        var autoHeight = thisDiv.parent().height();
        //emulate the height change.
        thisDiv.parent().height(curHeight).animate({
            height: autoHeight
        }, 750);

    }

    function contractEffect(thisDiv) {
        thisDiv.parent().animate({
            height: "60px"
        }, 750);
    }

    function expandCheck(thisDiv) {
        if (thisDiv.parent().height() === 60) {
            console.log("expandCheck()",thisDiv);
            expandEffect(thisDiv)
        } else if ((thisDiv.parent().height() > 60)) {
            contractEffect(thisDiv);
        }
    }


    //when you have loaded everything check the cards to see if their height is over 60px;
    $(".hover-more").mouseenter(function () {
        // if parent height is 60, expand
        expandCheck($(this));

    });

    $(document).on("click", ".hover-more", function () {
        expandCheck($(this));
    });

});