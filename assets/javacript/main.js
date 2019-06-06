$(document).ready(() => {

    const card = $(".portfolio-component");
    const langArea = $(".languages-used");
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
            scrollTop: $(href).offset().top - 75}, 1000);
    });

    //add a hover arrow to cards whose height is passed 60px

    const queryLangArea = document.querySelectorAll(".languages-used")

    // for (let i = 0; i < queryLangArea.length; i++) {
    //     const element = queryLangArea[i];
    //     const elementHeight = element.offsetHeight;
    //     console.log(elementHeight);
    //     if (elementHeight > 60){
    //         // element.style.height = "60px";
    //         console.log(element);
    //         console.log(elementHeight);
    //         element.style.color = "red"
    //         createExpandArrow(element);
    //     }
        
    // }

    langArea.each((iteration, item) => {
     
        const langDiv = $(item);
        console.log(item);
        console.log($(item).height());
        // console.log("This is the height: ")
       if (langDiv.height() > 60){
           langDiv.css("height", "60px");
           createExpandArrow(langDiv)
       }
    });

    function createExpandArrow (element) {
        const hoverDiv =  $(`<div class="hover-more"></div>`);
        const arrow =  $(`<span class="downArrow"><i class="fas fa-chevron-down"></i></span>`);

        hoverDiv.append(arrow);
        element.append(hoverDiv);
    }

    function expandEffect() {
        const thisLang = $(this);
        console.log(thisLang);
        console.log("Ready!! ");
    }
    //when you have loaded everything check the cards to see if their height is over 60px;
    $(document).on("load", ".languages-used", expandEffect);
});