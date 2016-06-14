$(function() {

    // Maintaining better position on resize

    var htmlDocument = $('html');
    htmlHeight = htmlDocument.outerHeight(true);
    scroll = $(window).scrollTop();
    position = scroll / htmlHeight;

    // Hamburger menu
    var hamburgerIcon = $("#hamburger")
    var hamburgerMenu = $(".menu");

    hamburgerIcon.on("click", function() {
        hamburgerMenu.toggleClass("hidden");
    });

    //Hidden content showcase:

    //Speciality-section

    var iconDivs = $(".icon-div");

    iconDivs.on("mouseenter ", function() {

        $(this).find("div").toggleClass("content-shown");
        $(this).toggleClass("content-bg");

    });

    iconDivs.on("mouseleave", function() {

        $(this).find("div").toggleClass("content-shown");
        $(this).toggleClass("content-bg");

    });

    //Team-section

    var teamDivs = $(".team-div");

    teamDivs.on("mouseenter", function() {
        $(this).find("p").toggleClass("invisible");
        $(this).find("figure").toggleClass("invisible");

    });

    teamDivs.on("mouseleave", function() {
        $(this).find("p").toggleClass("invisible");
        $(this).find("figure").toggleClass("invisible");
    });

    //FAQ-section

    var faqDivs = $(".FAQ-question");

    $(".answer").hide();
    faqDivs.on("click", function() {
        $(this).find(".answer").slideToggle("slow");
    });

    //Brand-section

    var brandDivs = $(".brand-logo");

    brandDivs.on("mouseenter ", function() {

        $(this).find("p").toggleClass("content-shown");
    });

    brandDivs.on("mouseleave", function() {

        $(this).find("p").toggleClass("content-shown");
    });

    // Mobile-desgin-section

    var learnMoreBtn = $(".btn-holder").find("button");

    learnMoreBtn.on("click ", function() {

        if ($(window).width() >= 1183) {
            $(".mobile-design-section").toggleClass("m-d-section-animate");
            $(".btn-holder").find("div").toggleClass("m-d-content-animate");
        } else {
            $(".btn-holder").find("div").toggleClass("m-d-hidden");
        }
    });

    // -------------------------------------------------------------------------------------------------------------

    //Sticky menu

    var stickyMenu = $(".menu-bar");
    var showcaseSection = $(".showcase-section");
    var stickyMenuTrigger = showcaseSection.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyMenuTrigger) {
            stickyMenu.addClass("sticky");
        } else {
            stickyMenu.removeClass("sticky");
        }

        scroll = $(window).scrollTop();
        position = scroll / htmlHeight;
    });

    // Scroll into view

    var menuBtns = $(".menu-bar").find("a");
    var contactBtn = $(".btn-holder").find("a");
    var stickyMenuHeight = stickyMenu.outerHeight();

    menuBtns.add(contactBtn).on("click", function(event) {

        var scrollToId = $(this).attr('href');
        var sectionOffset = $(scrollToId).offset().top;
        event.preventDefault();

        if ($(window).width() >= 751) {
            $('body').stop().animate({
                scrollTop: sectionOffset - stickyMenuHeight
            }, 500, 'swing');
        } else {
            $('body').stop().animate({
                scrollTop: sectionOffset
            }, 500, 'swing');
        }
    });

    $(window).resize(function() {
        htmlHeight = htmlDocument.outerHeight(true);
        $(window).scrollTop(position * htmlHeight);
        console.log($(window).width());

    });

});
