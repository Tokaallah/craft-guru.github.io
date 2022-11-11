// -----------------------------------------------------------------------------
// WHEN DOCUMENT IS READY
// -----------------------------------------------------------------------------
$(document).ready(function(){

    // -----------------------------------------------------------------------------
    // DESKTOP NAVIGATION BAR
    // -----------------------------------------------------------------------------
    function animateDesktopNavigationBar(){
        let desktopNavigatoinBar = $('.desktop-navigation-bar');
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 1) {
                desktopNavigatoinBar.addClass('scrolled');
            } else{
                desktopNavigatoinBar.removeClass('scrolled');
            }
        });
    }
    animateDesktopNavigationBar();

    // -----------------------------------------------------------------------------
    //MOBILE NAVIGATION BAR
    // -----------------------------------------------------------------------------
    function showHideMobileNavMenu(){
        let hamburgerMenuBtn = $('.hamburger-menu');
        let mobileNavigationMenu = $('.mobile-navbar');
        let mobileNavOverlay = mobileNavigationMenu.find('.mobile-nav-overlay');
        let mobileNavCloseBtn = mobileNavigationMenu.find('.mobile-nav-btn');
        var mobileNavdropdownMenu = mobileNavigationMenu.find('li.dropdown');
        hamburgerMenuBtn.on('click', function(){
            mobileNavigationMenu.addClass('show');
        });
        mobileNavCloseBtn.on('click', function(){
            mobileNavigationMenu.removeClass('show');
        });
        mobileNavdropdownMenu.on('click', function(){
            $(this).toggleClass('show');
        });    
        mobileNavOverlay.on('click', function(){
            mobileNavigationMenu.removeClass('show');
        });
    }
    showHideMobileNavMenu();

    // -----------------------------------------------------------------------------
    // LAST UPDATE
    // -----------------------------------------------------------------------------
    function dateModify() {
        var x = document.lastModified;
        document.getElementById("dateModified").innerHTML = x;
    }
    dateModify();

    // -----------------------------------------------------------------------------
    // SCROLL TO TOP BUTTON
    // -----------------------------------------------------------------------------
    function initalizeScrollToTopButton(){
        let scrollToTop = $('.scroll-to-top');
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 700) {
                scrollToTop.addClass("show");
            } else{
                scrollToTop.removeClass("show");
            }
        });
        scrollToTop.on('click', function(){
            $('body, html').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    initalizeScrollToTopButton();
});