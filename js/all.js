var CommonEvents = function() {
    this.init = function() {
        this.setPageNameinLocalStorage();
        this.bindStickyMenu();
        this.bindMobileMenu();
        this.bindGetQuotValidation();
        this.bindFileUpload();
        this.bindInquiryFormValidation();
        this.bindTestimonialSlider();
    };
    this.bindInquiryFormValidation = function() {
        $.validator.addMethod("regex", function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        }, "Please enter a valid input");
        $.validator.addMethod('filesize', function(value, element, param) {
            isValid = this.optional(element) || (element.files[0].size <= param * 1000000)
            if (isValid) {
                $(element).parent('.file-upload-wrapper').css({
                    "border-color": "#f3f2f2",
                    "background-color": "#ffffff"
                });
            } else {
                $(element).parent('.file-upload-wrapper').css({
                    "border-color": "#e0b4b4",
                    "background-color": "#fff6f6",
                    "margin-bottom": "12px"
                });
            }
            return isValid;
        }, 'File size must be less than {0} MB');
        if (typeof inquiryCategory != 'undefined') {
            $("#inquiry-selection").val(inquiryCategory);
        }
        const phoneNumberValidationRule = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const nameValidationRule = /^[a-zA-Z ]{2,30}$/;
        if ($("form[name='talk_expert_form']").length > 0) {
            $("form[name='talk_expert_form']").validate({
                ignore: "",
                rules: {
                    name: {
                        required: true,
                        regex: nameValidationRule
                    },
                    phone_number: {
                        regex: phoneNumberValidationRule,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    document_file: {
                        filesize: 2,
                    },
                    category: {
                        required: true,
                    },
                    budget: {
                        required: true,
                    },
                    message: {
                        required: true,
                    },
                    category: {
                        required: true,
                    },
                    budget: {
                        required: true,
                    },
                    capcha_valiation: {
                        capchaRuleExpertForm: true,
                    }
                },
                messages: {
                    name: {
                        required: "Enter your name.",
                        regex: "Enter your valid name."
                    },
                    phone_number: {
                        required: "Enter your phone number.",
                        regex: "Enter a valid phone number."
                    },
                    email: {
                        required: "Enter your email id.",
                        email: "Please enter a email id in valid format."
                    },
                    category: {
                        required: "Select your interested category.",
                    },
                    budget: {
                        required: "Select your budget.",
                    },
                    message: {
                        required: "Enter some brief description about your project.",
                    },
                    capcha_valiation: {
                        capchaRuleExpertForm: "Before submit form validate captcha.",
                    }
                },
            });
        }
    };
    this.setPageNameinLocalStorage = function() {
        if (typeof pageName === "undefined" || pageName == "") {
            localStorage.removeItem("pageFrom");
        } else {
            if (pageName == "Contact US") {
                page = localStorage.getItem("pageFrom");
                if (page) {
                    $('.redirect_from_page').val(page);
                }
            } else {
                localStorage.setItem("pageFrom", pageName);
            }
        }
    };
    this.bindMobileMenu = function() {
        (function($) {
            $(function() {
                $('.show-tab nav ul li.has-child > .main-link').click(function(e) {
                    $(this).siblings('.show-tab .nav-dropdown').slideToggle();
                    $(this).siblings('.show-tab .nav-sub-dropdown').slideDown();
                    if ($(this).hasClass('open-menu')) {
                        $('.show-tab .nav-sub-dropdown').slideUp();
                        $('.show-tab .nav-sub-dropdown div.sub-link').removeClass('open-menu');
                    }
                    $(this).toggleClass('open-menu');
                    $('.show-tab .nav-dropdown').not($(this).siblings()).slideUp();
                    $('.show-tab .nav-sub-dropdown').not($(this).siblings()).slideUp();
                    $('.show-tab .main-link').not($(this)).removeClass('open-menu');
                    $('.show-tab .sub-link').removeClass('open-menu');
                    e.stopPropagation();
                });
                $('.show-tab nav ul li.has-sub-child > .sub-link').click(function(e) {
                    $(this).siblings('.show-tab .nav-dropdown').slideToggle();
                    $(this).toggleClass('open-menu');
                    $('.show-tab .nav-dropdown').not($(this).siblings()).slideUp();
                    $('.show-tab .sub-link').not($(this)).removeClass('open-menu');
                    e.stopPropagation();
                });
                $('.show-tab #nav-toggle').click(function() {
                    $('.show-tab nav ul.nav-list').toggleClass('active-header');
                });
                $('.show-tab  #nav-toggle').on('click', function() {
                    this.classList.toggle('active');
                    $("body").toggleClass("sticky");
                });
            });
        })(jQuery);
    };
    this.bindStickyMenu = function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 300) {
                $('.main-header').addClass('fixed-header');
            } else {
                $('.main-header').removeClass('fixed-header');
            }
        });
    };
    this.bindFileUpload = function() {
        $("form").on("change", ".file-upload-field", function() {
            $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
        });
    };
    this.bindGetQuotValidation = function() {
        $("#get-quote-form").validate();
        $('#get-quote-form').submit(function() {
            if ($("#get-quote-form .file-upload-field").hasClass("error")) {
                $("#get-quote-form .file-upload-wrapper").css({
                    "border-color": "#e0b4b4",
                    "background-color": "#fff6f6",
                    "margin-bottom": "12px"
                });
            }
        });
    };
    this.bindTestimonialSlider = function() {
        $(document).ready(function() {
            $('.testimonial-slider').slick({
                centerMode: true,
                arrows: true,
                slidesToScroll: 1,
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });
            $('.testimonial-contact.testimonial-slider').slick({
                arrows: true,
                slidesToScroll: 1,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 1000,
            });
        });
    };
    this.init();
}
$(document).ready(function() {
    new CommonEvents();
})
var ServicePageEvent = function() {
    this.init = function() {
        this.bindServiceSideBarLink();
        this.bindOtherEvents();
    };
    this.bindServiceSideBarLink = function() {
        $(document).ready(function() {
            $('.service-side-bar ul li a').filter(function() {
                return this.href === location.href;
            }).parent().addClass('active');
        });
    }
    $(document).ready(function() {
        bindInquiryForm('contact_us_form_small');
    });
    this.bindOtherEvents = function() {
        $('.collapse-header').click(function() {
            $('.collapse-item').addClass('bg-color');
            $(".plusminus").text('+');
            $('.collapse-item').slideUp();
            if ($(this).hasClass('active')) {
                $(this).next().slideUp();
                $(this).removeClass('active');
                $('.collapse-item').removeClass('bg-color');
                $(".plusminus").text('+');
            } else {
                $(this).next().slideDown();
                $('.collapse-header').removeClass('active');
                $(this).addClass('active');
                $(this).children(".plusminus").text('-');
            }
        });
        $(".tech-btn").click(function(e) {
            $('html, body').animate({
                scrollTop: $("#getInTouch").offset().top
            }, 1000);
            e.preventDefault();
            setTimeout(function() {
                $("#contact_us_form_footer #focusInput").focus();
            }, 1000);
        });
        var html = '';
        for (var i = 1; i <= 12; i++) {
            html += '<div class="shape-container--' + i + ' shape-animation"><div class="random-shape"></div></div>';
        }
        document.querySelector('.rounded-animated-bg .shape').innerHTML += html;
        var $allShapes = $("[class*='shape-container--']");
        $(document).ready(function() {
            $('.celebration-details li:first-child').addClass('active');
            $('.wcg-gellary').hide();
            $('.wcg-gellary:first').show();
            $('.celebration-details li').click(function() {
                $('.celebration-details li').removeClass('active');
                $(this).addClass('active');
                $('.wcg-gellary').hide();
                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn();
                return false;
            });
            $('.update-sub-category').click(function() {
                $('html, body').animate({
                    scrollTop: $("#getInTouch").offset().top
                }, 800, 'swing');
            });
            if ($(window).width() < 992) {
                $(".blog-list-sec .wcg-gellary").hide();
                $(".blog-list-sec #celeb-1").show();
                $(".celebration-details #filterCeleb").change(function() {
                    $('.blog-list-sec .wcg-gellary').hide();
                    $('#' + $(this).val()).show();
                });
            }
        });
    };
    this.init();
};
var HomePageEvent = function() {
    this.init = function() {
        this.bindMainCaraouselSlider();
        this.bindBlockAnimation();
        this.bindClientlider();
        this.bindAboutUsCounterEvent();
    };
    this.bindMainCaraouselSlider = function() {
        $('.home-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1200,
            autoplay: true,
            cssEase: 'ease-in-out',
            infinite: true
        });
    };
    this.bindBlockAnimation = function() {
        var slow = 35;
        var medium = 20;
        var fast = 15;
        var veryfast = 10;
        var docHeight = $(document).height();
        var docWidth = $(document).width();
        $(document).mousemove(function(event) {
            var docHeight = $(document).height();
            var docWidth = $(document).width();
            var x = event.pageX;
            var y = event.pageY;
            $("#shape-1").offset({
                top: (docHeight / 50) + y / slow,
                left: (docWidth / 1.8) + x / slow
            });
            $("#shape-2").offset({
                top: (docHeight / 12) + y / fast,
                left: (docWidth / 4) - x / medium
            });
            $("#shape-3").offset({
                top: (docHeight / 50) - y / fast,
                left: (docWidth / 8) - x / fast
            });
            $("#shape-4").offset({
                top: (docHeight / 15) - y / medium,
                left: (docWidth / 2) - x / medium
            });
            $("#shape-5").offset({
                top: (docHeight / 20) - y / medium,
                left: (docWidth / 1.08) + x / medium
            });
        });
    };
    this.bindClientlider = function() {
        $('.process-slider').slick({
            centerMode: false,
            arrows: true,
            slidesToScroll: 1,
            slidesToShow: 4,
            infinite: false,
            responsive: [{
                breakpoint: 1899,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    };
    this.bindAboutUsCounterEvent = function() {
        var counted = 0;
        $(window).scroll(function() {
            var oTop = $('.about-grid').offset().top - window.innerHeight;
            if (counted == 0 && $(window).scrollTop() > oTop) {
                $('.counter').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count'),
                        countFrom = 0;
                    $({
                        countNum: countFrom
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                });
                counted = 1;
            }
        });
        if ($(window).width() > 1199) {
            $(function() {
                $(window).scroll(function() {
                    var leftgear = document.getElementById("about-counter");
                    var st = ($(this).scrollTop() + 200);
                    var outerbox = $('.about-grid').offset().top;
                    var mianDiv = $('.about-grid').height();
                    if (st > outerbox && ((st - outerbox) < 240)) {
                        leftgear.style.transform = "translateY(-" + (st - outerbox) + "px)";
                    }
                }).scroll();
            })
        };
    };
    this.init();
};

function bindNotFound() {
    $(document).ready(function() {
        var html = '';
        for (var i = 1; i <= 12; i++) {
            html += '<div class="shape-container--' + i + ' shape-animation"><div class="random-shape"></div></div>';
        }
        document.querySelector('.shape').innerHTML += html;
    });
};

function bindAboutUsPage() {
    var counted = 0;
    $(window).scroll(function() {
        var oTop = $('.history-grid').offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count'),
                    countFrom = 0;
                $({
                    countNum: countFrom
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            counted = 1;
        }
    });
};

function bindHirePage() {
    bindInquiryForm('contact_us_form_small');
    this.init = function() {
        this.bindScroll();
        if ($('.counter').length > 0) {
            this.bindCounter();
        }
        if ($('.celebration-filter').length > 0) {
            this.bindServiceTab();
        }
        if ($('.testimonial-section').length > 0) {
            this.bindTestimonialSlider();
        }
    };
    this.bindScroll = function() {
        $(".cta-btn").click(function(e) {
            $('html, body').animate({
                scrollTop: $("#getInTouch").offset().top
            }, 1000);
            e.preventDefault();
            setTimeout(function() {
                $("#contact_us_form_footer #focusInput").focus();
            }, 1000);
        });
    };
    this.bindCounter = function() {
        var counted = 0;
        if (counted == 0) {
            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count'),
                    countFrom = 0;
                $({
                    countNum: countFrom
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            counted = 1;
        }
    };
    this.bindServiceTab = function() {
        $('.celebration-details li:first-child').addClass('active');
        $('.wcg-gellary').hide();
        $('.wcg-gellary:first').show();
        $('.celebration-details li').click(function() {
            $('.celebration-details li').removeClass('active');
            $(this).addClass('active');
            $('.wcg-gellary').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        if ($(window).width() < 992) {
            $(".blog-list-sec .wcg-gellary").hide();
            $(".blog-list-sec #celeb-1").show();
            $(".celebration-details #filterCeleb").change(function() {
                $('.blog-list-sec .wcg-gellary').hide();
                $('#' + $(this).val()).show();
            });
        }
    }
    this.init();
};

function bindCaseStudyDetailPage() {
    $(document).ready(function() {
        $(".arcticles-img a").fancybox();
    });
};

function bindInquiryForm(fromId, requestForLabel = '') {
    if (typeof inquiryCategory != 'undefined') {
        $(".inquiry-catgory").val(inquiryCategory);
    }
    if (requestForLabel != '') {
        $("#" + fromId).find('.request_for').val(requestForLabel);
    } else if (typeof requestFor != 'undefined') {
        $("#" + fromId).find('.request_for').val(requestFor);
    }
    const nameValidationRule = /^[a-zA-Z ]{2,30}$/;
    const phoneNumberValidationRule = /^[0-9_.-/(/)]{5,20}$/;
    if ($("#" + fromId).length > 0) {
        $("#" + fromId).validate({
            ignore: "",
            rules: {
                first_name: {
                    required: true,
                    regex: nameValidationRule
                },
                last_name: {
                    required: true,
                    regex: nameValidationRule
                },
                phone_number: {
                    required: true,
                    regex: phoneNumberValidationRule
                },
                email: {
                    required: true,
                    email: true
                },
                category: {
                    required: true,
                },
                message: {
                    required: true,
                },
                capcha_valiation: {
                    capchaRuleContactUs2: true,
                },
                document_file: {
                    extension: "docx|rtf|doc|pdf",
                    filesize: 2
                }
            },
            messages: {
                first_name: {
                    required: "Enter your first name.",
                    regex: "Enter your valid name."
                },
                last_name: {
                    required: "Enter your last name.",
                    regex: "Enter your valid name."
                },
                phone_number: {
                    required: "Enter your phone number."
                },
                email: {
                    required: "Enter your email id.",
                    email: "Enter your valid email id."
                },
                message: {
                    required: "Enter brief description about your project requirement.",
                },
                capcha_valiation: {
                    capchaRuleContactUs2: "Before submit form, validate captcha.",
                },
                document_file: {
                    extension: "We accept only doc, docx, rtf and pdf file format.",
                    filesize: "Your file size should be a less than 2MB."
                }
            },
        })
    }
}

function bindContactUsPage() {
    $(document).ready(function() {
        $('ul.tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
        bindInquiryForm('contact_us_form');
    });
};

function bindLifeAtWCG() {
    $(document).ready(function() {
        $('.celebration-details li:first-child').addClass('active');
        $('.wcg-gellary').hide();
        $('.wcg-gellary:first').show();
        $('.celebration-details li').click(function() {
            $('.celebration-details li').removeClass('active');
            $(this).addClass('active');
            $('.wcg-gellary').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        if ($(window).width() < 992) {
            $(".blog-list-sec .wcg-gellary").hide();
            $(".blog-list-sec #celeb-1").show();
            $(".celebration-details #filterCeleb").change(function() {
                $('.blog-list-sec .wcg-gellary').hide();
                $('#' + $(this).val()).show();
            });
        }
    });
};
var Portfolio = function() {
    this.init = function() {
        this.bindPortfolioEvent();
    };
    this.bindPortfolioEvent = function() {
        $(document).ready(function() {
            var $container = $('.grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: '.our-work .portfolio-box'
                }
            });
            var $optionSets = $('#filters'),
                $optionLinks = $optionSets.find('a');
            $optionLinks.click(function() {
                var $this = $(this);
                if ($this.hasClass('selected')) {
                    return false;
                }
                var $optionSet = $this.parents('#filters');
                $optionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector
                });
                return false;
            });
            $("#filters li a").click(function() {
                $(this).parent().addClass('active').siblings().removeClass('active');
                $('ul').toggleClass('expanded');
            });
        });
    };
    this.init();
};
var PortfolioDetail = function() {
    this.init = function() {
        this.bindPortfolioDetailEvent();
    };
    this.bindPortfolioDetailEvent = function() {
        $(document).ready(function() {
            var swiper = new Swiper(".portfolio-web-slider", {
                effect: "coverflow",
                grabCursor: true,
                loop: true,
                breakpoints: {
                    0: {
                        centeredSlides: true,
                        slidesPerView: 1,
                        slidesPerView: "auto",
                        spaceBetween: 60,
                        coverflowEffect: {
                            rotate: 15,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true
                        },
                    },
                    768: {
                        centeredSlides: true,
                        slidesPerView: 3,
                        slidesPerView: "auto",
                        spaceBetween: 0,
                        coverflowEffect: {
                            rotate: 15,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true
                        },
                    },
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
            });
            var swiper = new Swiper(".portfolio-app-slider", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                autoplay: {
                    delay: 2500,
                },
                coverflowEffect: {
                    rotate: 15,
                    stretch: 0,
                    depth: 50,
                    modifier: 2
                },
                spaceBetween: 50,
                loop: true,
                pagination: {
                    el: ".swiper-pagination"
                },
                breakpoints: {
                    576: {
                        coverflowEffect: {
                            depth: 30
                        },
                        spaceBetween: 30,
                    }
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
            });
        });
    };
    this.init();
};

function ThankYou() {
    $(document).ready(function() {
        var html = '';
        for (var i = 1; i <= 20; i++) {
            html += '<div class="shape-container--' + i + ' shape-animation"><div class="random-shape"></div></div>';
        }
        var $allShapes = $("[class*='shape-container--']");
    });
};

function CareerList() {
    var html = '';
    for (var i = 1; i <= 20; i++) {
        html += '<div class="shape-container--' + i + ' shape-animation"><div class="random-shape"></div></div>';
    }
    document.querySelector('.rounded-animated-bg .shape').innerHTML += html;
    var $allShapes = $("[class*='shape-container--']");
};

function CareerDetail() {
    $(document).ready(function() {
        $(".thank-you-box").hide();
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 600) {
                $('.right-description').addClass('fixed-header');
            } else {
                $('.right-description').removeClass('fixed-header');
            }
        });
        $.validator.addMethod('capchaRuleJobApply', function(value, element, params) {
            if (grecaptcha.getResponse(window.gcapchaApplyJobForm)) {
                return true;
            } else {
                return false;
            }
        });
        const phoneNumberValidationRule = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const nameValidationRule = /^[a-zA-Z ]{2,30}$/;
        const noticePeriodValidationRule = /^[a-zA-Z ]{2,30}$/;
        $("#job-apply-form").validate({
            ignore: "",
            rules: {
                name: {
                    required: true,
                    regex: nameValidationRule
                },
                phone_number: {
                    regex: phoneNumberValidationRule,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                resume_file: {
                    required: true,
                    extension: "docx|rtf|doc|pdf",
                    filesize: 2
                },
                expected_salary: {
                    required: true
                },
                capcha_valiation: {
                    capchaRuleJobApply: true,
                },
                city: {
                    regex: nameValidationRule
                },
                state: {
                    regex: nameValidationRule
                },
                qualification: {
                    regex: nameValidationRule
                },
                passing_year: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Enter your name.",
                    regex: "Enter your valid name."
                },
                phone_number: {
                    required: "Enter your phone number.",
                    regex: "Enter your valid phone number."
                },
                email: {
                    required: "Enter your email id.",
                    email: "Enter your valid email id."
                },
                resume_file: {
                    required: "Upload your resume file.",
                    extension: "We accept only doc, docx, rtf and pdf file format.",
                    filesize: "Your file size should be a less than 2MB."
                },
                company_name: {
                    required: $("input[name=company_name]").data("message")
                },
                expected_salary: {
                    required: "Please enter your expected salary per month."
                },
                capcha_valiation: {
                    capchaRuleJobApply: "Before submit form, validate captcha.",
                },
                city: {
                    regex: "Enter your valid City."
                },
                state: {
                    regex: "Enter your valid State."
                },
                qualification: {
                    regex: "Enter your valid Qualification."
                },
                passing_year: {
                    required: "Select your passing year.",
                }
            },
            submitHandler: function(form) {
                var l = Ladda.create(document.querySelector('#tost_message'));
                l.start();
                event.preventDefault();
                var formData = new FormData($('#job-apply-form')[0]);
                $.ajax({
                    type: "POST",
                    url: '/jobs/apply',
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    dataType: "json",
                    success: function(data) {
                        switch (data.code) {
                            case 200:
                                $('#job-apply-form')[0].reset();
                                $(".file-upload-wrapper").attr("data-text", "Select your file!");
                                $(".career-details .jobdesc-box .right-description").addClass("static-div");
                                $("#careerform").remove();
                                $(".thank-you-box").show();
                                $('html, body').animate({
                                    scrollTop: eval($(".career-details .jobdesc-box .right-description").offset().top - 100)
                                }, 500);
                                break;
                            case 403:
                            case 500:
                                $.toast({
                                    heading: 'Error',
                                    text: data.message,
                                    showHideTransition: 'slide',
                                    icon: 'error',
                                    position: 'top-right',
                                    hideAfter: 5000
                                });
                                break;
                        }
                        l.stop();
                    },
                    error: function(data) {
                        console.log(data);
                    }
                });
            },
        });
        $('#job-apply-form').submit(function(event) {
            if ($("#job-apply-form .file-upload-field").hasClass("error")) {
                $("#job-apply-form .file-upload-wrapper").css({
                    "border-color": "#e0b4b4",
                    "background-color": "#fff6f6",
                    "margin-bottom": "12px"
                });
            } else {
                $("#job-apply-form .file-upload-wrapper").css({
                    "border-color": "#f3f2f2",
                    "background-color": "#ffffff"
                });
            }
        });
    });
};

function TechnologyPage() {
    $(".tech-btn").click(function(e) {
        $('html, body').animate({
            scrollTop: $("#getInTouch").offset().top
        }, 1000);
        e.preventDefault();
        setTimeout(function() {
            $("#contact_us_form_footer #focusInput").focus();
        }, 1000);
    });
};
var gcapchaExpertForm;
var gcapchaApplyJobForm;
var gcapchaContactUsForm;

function onloadCallback() {
    if ($('#gcapcha-apply').length) {
        window.gcapchaApplyJobForm = grecaptcha.render('gcapcha-apply', {
            'sitekey': gcapchaKey,
            'theme': 'light'
        });
    }
    if ($('#gcapcha-expert').length) {
        window.gcapchaExpertForm = grecaptcha.render('gcapcha-expert', {
            'sitekey': gcapchaKey,
            'theme': 'light'
        });
    }
    if ($('#gcapcha-contactus').length) {
        window.gcapchaContactUsForm = grecaptcha.render('gcapcha-contactus', {
            'sitekey': gcapchaKey,
            'theme': 'light'
        });
    }
};

function blogHomeScript() {
    $('.grid').isotope({
        itemSelector: '.grid-item',
    });
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    var filterFns = {
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    $('.filters-select').on('change', function() {
        var filterValue = this.value;
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    $('.toc-box li a').click(function(e) {
        e.preventDefault();
        var target = ('#' + $(this).data('id'));
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing');
    });
}