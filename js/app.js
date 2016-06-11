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

//Speciality showcase

var iconDivs = $(".icon-div");

iconDivs.on("mouseenter",function(){

$(this).find("div").toggleClass("content-shown");
$(this).toggleClass("content-bg");

});

iconDivs.on("mouseleave",function(){

  $(this).find("div").toggleClass("content-shown");
  $(this).toggleClass("content-bg");

});

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

    menuBtns.on("click", function(event) {

        var scrollToId = $(this).attr('href');
        var sectionOffset = $(scrollToId).offset().top;
        var stickyMenuHeight = stickyMenu.outerHeight();
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

    });

});
