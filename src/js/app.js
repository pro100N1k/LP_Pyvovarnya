import { detectBrowser } from './_helpers';


import 'slick-carousel';
import 'jquery-validation';
import 'jquery.maskedinput/src/jquery.maskedinput';
import '@fancyapps/fancybox';
import '../../node_modules/malihu-custom-scrollbar-plugin';
import '../../node_modules/jquery-mousewheel';
import '../../node_modules/parallax-js'

import './_svg-img';
import './_tabs';
import './_certificates';
import './_case-slider';
import './_custom-scroll';
import './_Parallax';
import parralax from './_Parallax.js';
import Map from './_map';

class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        // INIT YOUR PLUGINS
        if ($('#mouse').length > 0) {
            parralax();
        }

        if($(window).width() < 1024) {
            $('.home-section').addClass('home-section-mobile');
            $('video').remove();

            console.log($(window));
        }
        if($(window).width() > 1024) {
            $('.home-section').removeClass('home-section-mobile');
            $('video').add();
        }

        $(window).on('scroll', function() {
            const nav = $('.fixed-menu');
            let scroll = $(window).scrollTop();
            if( scroll <= 100) {
                nav.removeClass('fixed-menu-scroll');
            } else {
                nav.addClass('fixed-menu-scroll')
            }
        }) ;


    };

    static initializeModules() {
        // INIT YOUR MODULES
        $('input[type="tel"]').mask('+7(999) 999-9999');
        const MapModule = new Map();
        $('.fancybox').fancybox();


        $(".case-slider-item-text__wrapper").mCustomScrollbar();

        $('.btn-catalog').on('click',function(e) {
            e.preventDefault();

            let _this = $(this);
            let link = _this.attr('href');
            let wrapper = _this.closest('.catalog-item-wrapper');
            // let price = wrapper.find('.catalog-item-desc__price').text();
            let title = wrapper.find('.catalog-item__title').eq(0).text();
            let img = wrapper.find('img').attr('src');
            let text = wrapper.find('.catalog-item-desc__text').html();

            let modal = $('#modal-product');
            modal.find('.modal-product__title').text(title);
            modal.find('.modal-product-info').html(text);
            // modal.find('#input-product-price').val(price);
            modal.find('#input-product-name').val(title);
            // modal.find('.modal-product__price').text(price);
            modal.find('img').attr('src',img);

            $.fancybox.open($('#modal-product'));
        });

        $('.case-btn-feedback').on('click',function(e) {
            // e.preventDefault();

            let _this = $(this);
            let link = _this.attr('href');
            let wrapper = _this.closest($('.case-slider-item'));
            let title = wrapper.find($('.case-slider-item-text__title')).text();
            let img = wrapper.find('.case-slider-item-img__main img').attr('src');
            let modal = $('#modal-feedback');

            modal.find('.modal-feedback-head__title').text(title);
            modal.find('img').attr('src',img);

            // $.fancybox.open($(link));
        }) ;
        $('.case-btn-form').on('click',function() {
            // e.preventDefault();
            let _this = $(this);
            let link = _this.attr('href');
            let wrapper = _this.closest($('.case-slider-item'));
            let title = wrapper.find($('.case-slider-item-text__title')).text();
            let modal = $('#modal-project');

            modal.find('#input-case-title').val(title);

            // $.fancybox.open($(link));
        });

        $('.offer-tab-item').on('click',function() {
            let _link = $(this);
            let _linkVal = _link.text();
            let wrapper = _link.closest('.offer');
            let title = wrapper.find('#offer-form-title__value');
            console.log(title);
            title.text(_linkVal);
            wrapper.find($('#offer-title__value')).val(_linkVal);
        });

        $('.button--to-bottom').on('click', function (e) {
            e.preventDefault();

            let id  = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });

        $('.menu-bar').on('click',function() {
            let wrapper = $('.menu-mobile');

            if($(this).is('.active:not(.back)')) {
                $(this).addClass('back');
            } else if ($(this).is('.back')) {
                $(this).removeClass('back');
            } else {
                $(this).addClass('active');
            }

            if(!wrapper.hasClass('menu-mobile-active')) {
                wrapper.addClass('menu-mobile-active');
            } else {
                wrapper.removeClass('menu-mobile-active');
            }
        });
        $('.menu-mobile a').on('click',function() {
            $('.menu-mobile').removeClass('menu-mobile-active');
            $('.menu-bar').removeClass('active');
        });


    };

    static detectBrowser() {
        document.body.setAttribute('data-browser', detectBrowser());
    }

    static init() {
        this.detectBrowser();
        this.initializePlugins();
        this.initializeModules();
    }
};

const App = new Application();