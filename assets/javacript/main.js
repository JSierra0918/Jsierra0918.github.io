$(document).ready(() => {

    // var numberOfItems = $(".component-area .component").length;
    // var limitPerPage = 5;
    // var totalPages = Math.round(numberOfItems / limitPerPage);
    // var currentPage =1;

    // //Limit the number of components that will be displayed per page
    // $(".component-area .component").slice(Math.ceil(limitPerPage)).hide();

    // console.log(totalPages);
    // //add the # of Pages
    // for (var i = 1; i <= totalPages; i++) {
    //     //Append a componnet area for each page that exists.
    //     $("#compContainer").append(` <div class="component-area"></div>`);
    //     page++;
    // }

    // //When you click on an arrow, go to the next page
    // $(".right-arrow").on("click", () => {
    //    alert("arrow go to right");

    //     var grandTotal = limitPerPage * currentPage;

    //     for (let i = 0; i < grandTotal; i++) {
    //         $(".component-area .component").eq(i).show();
    //     }

    // });


    // --------------------Smooth Scroll

    var scrollLink = $(".scroll");

    var header = $(".header nav");
  
    $(window).scroll(function() {    
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

        console.log( $(this.hash));
        console.log(href);


        $("body, html").animate({
            scrollTop: $(href).offset().top - 75
        }, 1000);


        // var linkHref = $(this).attr('href');

        // $('html, body').animate({
        //     scrollTop: $(linkHref).offset().top
        // }, 850);
    });
});

