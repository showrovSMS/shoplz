/* JS Document */

jQuery(document).ready(function($) {
    "use strict";

    var ctrl = new ScrollMagic.Controller();
    var map;
    var header = $('.header');
    var hamb = $('.hamburger_container_outer');
    var hambActive = false;

    setHeader();

    $(window).on('resize', function() {
        setHeader();
    });

    $(document).on('scroll', function() {
        setHeader();
    });

    initSlider();
    initParallax();
    initHero();
    initHamburger();
    initScrolling();

    function setHeader() {
        if (window.innerWidth < 768) {
            if ($(window).scrollTop() > 100) {
                header.css({ 'height': "60px", "marginTop": "0px", "background": "rgba(255, 255, 255, 1)" });
                hamb.css({ 'height': "60px", "marginTop": "0px" });
            } else {
                header.css({ 'height': "60px", "marginTop": "0px", "background": "transparent" });
                hamb.css({ 'height': "60px", "marginTop": "0px" });
            }
        } else {
            if ($(window).scrollTop() > 100) {
                header.css({ 'height': "80px", "marginTop": "0px", "background": "rgba(255, 255, 255, 1)" });
                hamb.css({ 'height': "80px", "marginTop": "0px" });
            } else {
                header.css({ 'height': "100px", "background": "transparent" });
                hamb.css("height", "100px");
            }
        }

        if (window.innerWidth > 991 && hambActive) {
            fsMenuClose();
        }
    }

    /* Slider */

    function initSlider() {
        var firstparallaxslider = new parallaxSlider({
            wrapperid: 'myparallaxslider', //ID of DIV on page to house slider
            displaymode: { type: 'auto', pause: 3000, cycles: 2, stoponclick: false, pauseonmouseover: false },
            delaybtwdesc: 500, // delay in milliseconds between the revealing of each description layer inside a slide
            navbuttons: [
                "../images/arrow_28.png",
                "../images/arrow_28.png",
                "../images/arrow_28.png",
                "../images/arrow_28.png",
            ],

            activeslideclass: 'selectedslide', // CSS class that gets added to currently shown DIV slide
            orientation: 'h', //Valid values: "h" or "v"
            persist: false, //remember last viewed slide and recall within same session?
            slideduration: 1500 //transition duration (milliseconds)
        });

        var left = $('.main_nav_left');
        var right = $('.main_nav_right');

        left.on('click', function() {
            firstparallaxslider.navigate('back');
        });

        right.on('click', function() {
            firstparallaxslider.navigate('forth');
        });

        var hvr = $('.main_slider_nav');
        var pos = $('.main_nav_position');
        var arrows = $('.main_nav_arrows_inner');

        hvr.on('mouseenter', function() {
            pos.css({ 'transition-delay': '0ms', 'visibility': "hidden", 'opacity': "0" });
            arrows.css({ 'transition-delay': '200ms', 'visibility': 'visible', 'opacity': '1' });
        });

        hvr.on('mouseleave', function() {
            arrows.css({ 'transition-delay': '0ms', 'visibility': 'hidden', 'opacity': '0' });
            pos.css({ 'transition-delay': '200ms', 'opacity': "1", 'visibility': "visible" });
        });
    }

    function initParallax() {
        /* Adding parallax effect to the slider container */
        var homeBcg = $('.slider_container');

        var homeBcgScene = new ScrollMagic.Scene({
                triggerElement: homeBcg,
                triggerHook: 1,
                duration: "100%"
            })
            .setTween(TweenMax.to(homeBcg, 1, { y: '40%', ease: Power0.easeNone }))
            .addTo(ctrl);

        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene, {
            relativeInput: true,
            clipRelativeInput: false,
            hoverOnly: true,
            calibrateX: false,
            calibrateY: true,
            invertX: false,
            invertY: true,
            limitX: false,
            limitY: false,
            scalarX: 5,
            scalarY: 8,
            frictionX: 0.2,
            frictionY: 0.8,
            originX: 0.0,
            originY: 0.0,
            precision: 1,
            pointerEvents: false,
            onReady: function() { alert('ready!'); }
        });

        $('.contact_background').parallax({ imageSrc: 'images/swift_background_2.jpg' });
    }

    function initHero() {
        var heroOverlay = $('.slider_overlay');
        var heroContent = $('.home_content');
        var sliderNav = $('.main_slider_nav');
        var heroSocialContainer = $('.home_social');
        var heroSocial = $('.home_share ul li');

        /* move hero overlay on scroll */
        var heroOverlayScene = new ScrollMagic.Scene({
                triggerElement: heroOverlay,
                triggerHook: 1,
                duration: "100%"
            })
            .setTween(TweenMax.to(heroOverlay, 1, { x: '-7.5%', ease: Power0.easeNone }))
            .addTo(ctrl);

        /* move hero content on scroll */
        var heroContentScene = new ScrollMagic.Scene({
                triggerElement: heroContent,
                triggerHook: 1,
                duration: "100%"
            })
            .setTween(TweenMax.to(heroContent, 1, { x: '-50%', y: '-100%', opacity: '0', ease: Power0.easeNone }))
            .addTo(ctrl);

        /* move slider nav on scroll */
        var sliderNavScene = new ScrollMagic.Scene({
                triggerElement: heroContent,
                triggerHook: 1,
                duration: "100%"
            })
            .setTween(TweenMax.to(sliderNav, 1, { x: '-400%', opacity: '0', ease: Power0.easeNone }))
            .addTo(ctrl);

        /* move social on scroll */
        var heroSocialScene = new ScrollMagic.Scene({
                triggerElement: heroContent,
                triggerHook: 1,
                duration: "100%"
            })
            .setTween(TweenMax.to(heroSocialContainer, 1, { x: '-50%', opacity: '0', ease: Power0.easeNone }))
            .addTo(ctrl);
    }

    function initHamburger() {
        var hamburger = $('.hamburger');

        hamburger.on('click', function() {
            if (hamburger.hasClass('active')) {
                /* animate menu out of view */
                fsMenuClose();
            } else {
                /* animate menu into view */
                fsMenuOpen();
            }
        });
    }

    function fsMenuOpen() {
        var hamburger = $('.hamburger');
        var fsMenu = $('.fs_menu_overlay');
        var fsMenuLeft = $('.fs_menu_left');
        var fsMenuItems = $('.fs_nav ul li');
        var fsSocial = $('.fs_menu_social');
        var div1 = $('.hamburger div:first-child');
        var div2 = $('.hamburger div:last-child');

        hamburger.addClass('active');
        fsMenu.addClass('active');
        var hamburgerRotateIn = TweenMax.to($('.hamburger_container'), 1, { rotation: 360, x: -22, ease: Power2.easeOut });

        if (window.innerWidth < 480) {
            var fsMenuTween1 = TweenMax.staggerTo(fsMenuItems, 0.5, { x: -125, autoAlpha: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        } else if (window.innerWidth < 768) {
            var fsMenuTween2 = TweenMax.staggerTo(fsMenuItems, 0.5, { x: -150, autoAlpha: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        } else {
            var fsMenuTween3 = TweenMax.staggerTo(fsMenuItems, 0.5, { x: -150, autoAlpha: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        }

        fsMenuLeft.addClass('active');
        fsMenu.addClass('active');
        var fsSocIn = TweenMax.to(fsSocial, 0.5, { autoAlpha: 1, ease: Power2.easeOut, delay: 0.7 });
        hambActive = true;
    }

    function fsMenuClose() {
        var hamburger = $('.hamburger');
        var fsMenu = $('.fs_menu_overlay');
        var fsMenuLeft = $('.fs_menu_left');
        var fsMenuItems = $('.fs_nav ul li');
        var fsSocial = $('.fs_menu_social');
        var div1 = $('.hamburger div:first-child');
        var div2 = $('.hamburger div:last-child');

        hamburger.removeClass('active');
        var hamburgerRotateOut = TweenMax.to($('.hamburger_container'), 1, { rotation: 0, x: 0, ease: Power2.easeOut });

        setTimeout(function() {
            fsMenuLeft.removeClass('active');
        }, 200);

        setTimeout(function() {
            fsMenu.removeClass('active');
        }, 300);

        var fsMenuTween4 = TweenMax.staggerTo(fsMenuItems, 0.8, { x: 150, autoAlpha: 0, ease: Power4.easeOut }, 0.06);
        var fsSocOut = TweenMax.to(fsSocial, 0.5, { autoAlpha: 0, ease: Power2.easeOut, delay: 0.2 });
        hambActive = false;
    }

    // How-it-work-slider

    $(document).ready(function() {
        $('.how-app-work-slider-wrapper .slider').bxSlider({
            adaptiveHeight: true,
            auto: false,
            controls: false,
            pause: 3000,
            speed: 500,
            pagerCustom: '#how-app-work-slider-pager'
        });

        var swiper = new Swiper('.appScreenshotCarousel-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            autoplay: false,
            speed: 500,
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            }
        });
    });


    function initScrolling() {
        var links = $('.nav_links');
        links.each(function() {
            var ele = $(this);
            var target = ele.data('scroll-to');
            ele.on('click', function(e) {
                e.preventDefault();
                $(window).scrollTo(target, 1500, { offset: -80, easing: 'easeInOutQuart' });
            });
        });

        var fsMenuLinks = $('.fs_nav_links');
        fsMenuLinks.each(function() {
            var ele = $(this);
            var target = ele.data('scroll-to');
            ele.on('click', function(e) {
                e.preventDefault();
                fsMenuClose();
                $(window).scrollTo(target, 1500, { offset: -80, easing: 'easeInOutQuart' });
            });
        });

        // Scroll To Buttons

        var btn = $('.scroll_to_button');
        btn.each(function() {
            var ele = $(this);
            ele.on('click', function() {
                $(window).scrollTo(ele.data('scroll-to'), 1500, { offset: -80, easing: 'easeInOutQuart' });
            });
        });
    }

});