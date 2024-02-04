(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();
        // sticky header
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('#header-area').addClass("sticky");
            } else {
                $('#header-area').removeClass("sticky");
            }
        });
        // sticky header
        // carousel interval
        $('.carousel').carousel({
            interval: 3000 * 10
        });
       // carousel interval
       // account dropdown
        var $slideup = $(".account-list .my-account");
        $slideup.on('click', function () {
            if(!($(this).hasClass("current"))){
                $slideup.removeClass("current").next("ul").slideUp();
            }
            $(this).toggleClass("current");
            $(this).next("ul").slideToggle("slow");
            return false;
        });
       // account dropdown
       // datetimepicker
        $('#date').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY - HH:mm' });
        $('#date1').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY - HH:mm' });
        $('#date2').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY - HH:mm' });
        $('#date3').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY - HH:mm' });
        $('#date4').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY - HH:mm' });
        $('#date5').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY - HH:mm' });
        $('#date6').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY - HH:mm' });
        $('#date7').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY - HH:mm' });
        $('#date8').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date9').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date10').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date11').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date12').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date13').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date14').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date15').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date16').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date17').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date18').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date19').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date20').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
        $('#date21').bootstrapMaterialDatePicker({ format : 'DD MMMM YYYY', time: false });
       // datetimepicker
       // select 2
        $(".js-example-basic-single").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single1").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single2").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single3").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single4").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single5").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single6").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single7").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single8").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single9").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single10").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single11").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single12").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single13").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single14").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single15").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single16").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single17").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single18").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single19").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single20").select2({minimumResultsForSearch: -1});
        $(".js-example-basic-single21").select2({minimumResultsForSearch: -1});
       // select 2
       // logo carousel
        $("#logo-carousel").owlCarousel({
            autoPlay: true,
            items: 6,
            touchDrag: true,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            paginationSpeed: 1000,
            slideSpeed: 1000,
            pagination: false,
            navigation: false
        });
        // logo carousel
        // train news carousel
        $("#train-news-carousel").owlCarousel({
            autoPlay: true,
            items: 3,
            touchDrag: true,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            paginationSpeed: 1000,
            slideSpeed: 1000,
            pagination: true,
            navigation: false
        });
        // train news carousel
        // special trains carousel
        $("#special-trains-carousel").owlCarousel({
            autoPlay: true,
            items: 3,
            touchDrag: true,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            paginationSpeed: 1000,
            slideSpeed: 1000,
            pagination: true,
            navigation: false
        });
        // special trains carousel
        // similar hotel carousel
        $("#similar-hotels-carousel").owlCarousel({
            autoPlay: true,
            items: 3,
            touchDrag: true,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            paginationSpeed: 1000,
            slideSpeed: 1000,
            pagination: true,
            navigation: false
        });
        // similar hotel carousel
        // Testimonial Carousel starts //
        $("#testimonial-carousel").owlCarousel({
            autoPlay: true,
            items: 1,
            loop:true,
            touchDrag: true,
            stopOnHover: true,
            paginationSpeed: 1000,
            slideSpeed: 1000,
            pagination: true,
            navigation: false,
            singleItem: true
        });
        // Testimonial Carousel ends //
        // check box , radio button
        $('.targer-input').checkRadioTweak();
        // check box , radio button
        // more filters
        // $('.more-filters').click(function(){
        //     $('#search-results').addClass('more-filters-open');
        // });
        $('.more-filters').click( function() {
            $("#search-result-top").toggleClass("more-filters-open");
        } );
        // more filters
        // show avaibility
        $(".close-avl-btn").click(function(){
            $(".show-avaibility").slideUp(1000);
        });

        $(".show-avl-btn").click(function(){
            $(".show-avaibility").slideDown(1000);
        });
        // show avaibility
        // flight details open
        $(".details-close").click(function(){
            $("#flight-details-open").slideUp(1000);
        });

        $(".details-open").click(function(){
            $("#flight-details-open").slideDown(1000);
        });
        // flight details open
        // seat details open
        $("#close-seats").click(function(){
            $(".view-seats-area").slideUp(1000);
        });

        $("#view-seats").click(function(){
            $(".view-seats-area").slideDown(1000);
        });
        // seat details open
        // Testimonial Carousel starts //
        $("#company-carousel").owlCarousel({
            autoPlay: true,
            items: 2,
            loop:true,
            touchDrag: true,
            stopOnHover: true,
            paginationSpeed: 1000,
            slideSpeed: 1000,
            pagination: true,
            navigation: false
        });
        // Testimonial Carousel ends //
        // links area //
        $('.top-links-wrap a').on('click', function (event) {
            event.preventDefault();
            $('html, body').stop(true,true).animate({
                scrollTop: $($(this).attr('href')).position().top -0
            }, 1000);
        });
        // links area //
        // object fit
        $(function () { objectFitImages() });
        // object fit
        // image gallery thumb scroll
        $(".details-inner-indicators").niceScroll({
            scrollspeed: 80,
            mousescrollstep: 80,
            cursorwidth: "0px",
            emulatetouch: false
        });
        // image gallery thumb scroll
    });
    // loader
    $(window).on('load', function(e) {
        $("#loading").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
    })
    // loader
}(jQuery));	