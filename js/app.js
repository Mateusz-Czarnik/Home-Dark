$(function() {

    // Maintaining better position on resize

    var htmlDocument = $('html');
    var htmlHeight = htmlDocument.outerHeight(true);
    var scroll = $(window).scrollTop();
    var position = scroll / htmlHeight;

    $(window).resize(function() {
        htmlHeight = htmlDocument.outerHeight(true);
        $(window).scrollTop(position * htmlHeight);

        if (window.matchMedia("(min-width: 768px)").matches) {
            movableDiv.css("top", "0px");
        } else {
            movableDiv.css("top", -lastSelected);
        }
        if (window.matchMedia("(min-width: 1200px)").matches) {
            $(".btn-holder").find("div").addClass("m-d-hidden");
        }
    });

    // Hamburger menu
    var hamburgerIcon = $("#hamburger");
    var hamburgerMenu = $(".menu");

    hamburgerIcon.on("click", function() {
        hamburgerMenu.toggleClass("hidden");

        stickyMenu.find("a").on("click", function() {
            hamburgerMenu.addClass("hidden");
        });
    });

    //Hidden content showcase:

    //Speciality-section

    var iconDivs = $(".icon-div");

    iconDivs.on("mouseenter mouseleave", function() {

        $(this).find("div").toggleClass("content-shown");
        $(this).toggleClass("content-bg");
    });

    //Team-section

    var teamDivs = $(".team-div");

    teamDivs.on("mouseenter mouseleave", function() {
        $(this).find("p").toggleClass("invisible");
        $(this).find("figure").toggleClass("invisible");
    });

    //FAQ-section

    var faqDivs = $(".FAQ-question");

    $(".answer").hide();
    faqDivs.on("click", function() {
        $(this).find(".answer").slideToggle("slow");
    });

    //Works-filter

    var featuredBtns = $(".featured-btns");

    featuredBtns.on("click", function() {
        var featuredBtnsTag = $(this).data("tag");

        if ($(this).index() == 0) {
            worksDivs.removeClass("hidden").removeClass("works-spread");
            worksDivs.parent().removeClass("works-center");
        } else {
            worksDivs.each(function() {
                var workTag = $(this).data("tag");

                worksDivs.addClass("works-spread");
                worksDivs.parent().addClass("works-center");

                if (workTag.indexOf(featuredBtnsTag) == -1) {
                    $(this).addClass("hidden");
                } else {
                    $(this).removeClass("hidden");
                }
            });
        }
    });

    //Works-section

    var worksDivs = $(".works");

    worksDivs.on("mouseenter mouseleave", function() {

        $(this).find("figure").toggleClass("hidden");
    });

    //Brand-section

    var brandDivs = $(".brand-logo");

    brandDivs.on("mouseenter mouseleave", function() {

        $(this).find("p").toggleClass("content-shown");
    });

    // Mobile-desgin-section

    var learnMoreBtn = $(".btn-holder").find("button");

    learnMoreBtn.on("click ", function() {

        if (window.matchMedia("(min-width: 1200px)").matches) {
            $(".mobile-design-section").toggleClass("m-d-section-animate");
            $(".btn-holder").find("div").toggleClass("m-d-content-animate");
        } else {
            $(".btn-holder").find("div").toggleClass("m-d-hidden");
        }
    });

    //Article section

    var fullContentSection = $(".article-fullContent");
    $(".gg").hide();

    fullContentSection.on("click ", function() {

        $(".gg").slideToggle();
    });

    // -------------------------------------------------------------------------------------------------------------

    // Plan desc selection
    var planSelectors = $(".planSelect");
    var planDescTables = $(".plan-desc");
    var changeableColorEl = planDescTables.find(".changeable");
    var changeableBgEl = planDescTables.find(".changeable-bg");

    planSelectors.on("click", function() {

        var currTable = $(this).closest("table");

        changeableColorEl.removeClass("colored");
        changeableBgEl.removeClass("bg-colored");

        currTable.find(".changeable").addClass("colored");
        currTable.find(".changeable-bg").addClass("bg-colored");
    });

    //Plan length
    var planLengthOptions = $(".plan-length").find("span");
    var durationChange = $(".duration-change");
    var priceChange = $(".price-change");

    planLengthOptions.on("click", function() {

        planLengthOptions.removeClass("selected");
        $(this).addClass("selected");

        if ($(this).data("duration") == "year") {
            durationChange.text("/year");

            priceChange.each(function() {
                $(this).text(($(this).data("price")) * 9);
            });
        } else {
            durationChange.text("/mo");

            priceChange.each(function() {
                $(this).text($(this).data("price"));
            });
        }
    });

    //Plan type
    var planTypeOptions = $(".plan-options").find("span");
    var movableDiv = $(".movable");
    var tableHeight = 433;
    var lastSelected;

    planTypeOptions.on("click", function() {

        var num = $(this).data("number");

        planTypeOptions.removeClass("selected");
        $(this).addClass("selected");
        movableDiv.css("top", -(tableHeight * num));

        lastSelected = (tableHeight * num);
    });

    // -------------------------------------------------------------------------------------------------------------

    //Vertical slider

    var nextBtn = $("#nextQuote");
    var prevBtn = $("#prevQuote");
    var quotationsList = $(".vertical-slider").find("ul");
    var quotations = quotationsList.find("li");
    var quotationsHeight = quotations.outerHeight();
    var currentPicture = 0;

    nextBtn.on("click", function() {
        if (currentPicture >= 0 && currentPicture <= quotations.length - 2) {
            currentPicture++;
            quotationsList.animate({
                top: "-=" + quotationsHeight
            }, 1000);
        }
    });

    prevBtn.on("click", function() {
        if (currentPicture >= 1) {
            currentPicture--
            quotationsList.animate({
                top: "+=" + quotationsHeight
            }, 1000);
        }
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

    //Email inpunt

    var emailInput = $(".footer-mail-content").find("input");
    var emailBase = []; // to simulate mail database

    emailInput.on("keypress", function(event) {

        var dialogDiv = $("#dialog");
        var dialogText = $("#dialog-text");

        if (event.which == 13) {
            if (emailInput.val().indexOf("@") != -1 && emailInput.val().indexOf(".") != -1 && emailBase.indexOf(emailInput.val()) == -1) {
                dialogText.text("Thank you for subscribing to our newsletter!");
                $.ui.dialog.prototype._focusTabbable = function() {};
                dialogDiv.dialog();
                emailBase.push(emailInput.val());
                emailInput.val("");
            } else {
                if (emailBase.indexOf(emailInput.val()) != -1) {
                    dialogText.text("Email already in database.");
                    $.ui.dialog.prototype._focusTabbable = function() {};
                    dialogDiv.dialog();

                } else {
                    dialogText.text("Your email form is incorrect. Don't forget about '@' and '.' signs.");
                    $.ui.dialog.prototype._focusTabbable = function() {};
                    dialogDiv.dialog();

                }
            }
        }
    });

    // Scroll into view

    var menuBtns = $(".menu-bar").find("a");
    var footerBtns = $(".footer-nav").find("a");
    var contactBtn = $(".btn-holder").find("a");
    var howWeWorkBtn = $(".showcase-section").find("a");
    var stickyMenuHeight = 75;

    menuBtns.add(contactBtn).add(howWeWorkBtn).add(footerBtns).on("click", function(event) {

        var scrollToId = $(this).attr('href');
        var sectionOffset = $(scrollToId).offset().top;
        event.preventDefault();

        if (window.matchMedia("(min-width: 768px)").matches) {
            $('body').stop().animate({
                scrollTop: sectionOffset - stickyMenuHeight
            }, 500, 'swing');
        } else {
            $('body').stop().animate({
                scrollTop: sectionOffset
            }, 500, 'swing');
        }
    });
});
