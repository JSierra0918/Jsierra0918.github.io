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
 langArea.each((int, element) => {
    // console.log(element);
    console.log($(this).height());
 })

    function expandEffect() {
        const thisLang = $(this);
        console.log(thisLang);
        console.log("Ready!! ");
    }
    //when you have loaded everything check the cards to see if their height is over 60px;
    $(document).on("load", ".languages-used", expandEffect);
});