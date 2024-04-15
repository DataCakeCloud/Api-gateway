/**
 * Template Name: template - v1.1.1
 * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if (headerOffset - window.scrollY <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    };
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    };
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener(
      'click',
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    );
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function (el) {
        el.addEventListener(
          'click',
          function () {
            document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aos_init === 'function') {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  // i18next
  let i18nMenus = document.querySelectorAll('.i18n li');
  i18next.init(
    {
      lng: 'en',
      // debug: true,
      resources: {
        en: {
          translation: lang.en
        },
        zh: {
          translation: lang.zh
        }
      }
    },
    function (err, t) {
      // document.getElementById('output').innerHTML = i18next.t('key');
    }
  );

  i18nMenus.forEach(function (el) {
    el.addEventListener(
      'click',
      function () {
        translatePage(el);
      },
      false
    );
  });
  function translatePage(el, initLang) {
    let lang = el ? (el.innerHTML.indexOf('English') > -1 ? 'en' : 'zh') : initLang;
    i18next.changeLanguage(lang, (err, t) => {
      document.getElementById('lang').innerHTML = t('lang');
      document.getElementById('home').innerHTML = t('home');
      document.getElementById('services').innerHTML = t('services');
      document.getElementById('product').innerHTML = t('product');
      document.getElementById('solutions').innerHTML = t('solutions');
      document.getElementById('aboutUs').innerHTML = t('aboutUs');
      document.getElementById('contactUs').innerHTML = t('contactUs');

      document.getElementById('bannerTitle').innerHTML = t('bannerTitle');
      document.getElementById('bannerDescription').innerHTML = t('bannerDescription');
      document.getElementById('start').innerHTML = t('start');
      document.getElementById('efficient').innerHTML = t('efficient');
      document.getElementById('simple').innerHTML = t('simple');
      document.getElementById('save').innerHTML = t('save');
      document.getElementById('freedom').innerHTML = t('freedom');

      document.getElementById('servicesSegment').innerHTML = t('servicesSegment');
      // document.getElementById('cloudConsultation').innerHTML = t('cloudConsultation');
      // document.getElementById('cloudConsultationText').innerHTML = t('cloudConsultationText');
      document.getElementById('cloudDeployment').innerHTML = t('cloudDeployment');
      document.getElementById('cloudDeploymentText').innerHTML = t('cloudDeploymentText');
      document.getElementById('cloudOperations').innerHTML = t('cloudOperations');
      document.getElementById('cloudOperationsText').innerHTML = t('cloudOperationsText');
      document.getElementById('cloudMigration').innerHTML = t('cloudMigration');
      document.getElementById('cloudMigrationText').innerHTML = t('cloudMigrationText');
      document.getElementById('hybridArchitecture').innerHTML = t('hybridArchitecture');
      document.getElementById('hybridArchitectureText').innerHTML = t('hybridArchitectureText');
      // document.getElementById('cloudSecurity').innerHTML = t('cloudSecurity');
      // document.getElementById('cloudSecurityText').innerHTML = t('cloudSecurityText');
      // document.getElementById('cloudGovernance').innerHTML = t('cloudGovernance');
      // document.getElementById('cloudGovernanceText').innerHTML = t('cloudGovernanceText');
      // document.getElementById('CloudNativeBuild').innerHTML = t('CloudNativeBuild');
      // document.getElementById('CloudNativeBuildText').innerHTML = t('CloudNativeBuildText');
      // document.getElementById('devOpsImplementation').innerHTML = t('devOpsImplementation');
      // document.getElementById('devOpsImplementationText').innerHTML = t('devOpsImplementationText');
      // document.getElementById('digitalTransformation').innerHTML = t('digitalTransformation');
      // document.getElementById('digitalTransformationText').innerHTML = t('digitalTransformationText');

      // product
      document.getElementById('productSegment').innerHTML = t('productSegment');
      if (lang === 'zh') {
        document.getElementById('dataCakeImage').src = 'assets/img/datacake-cn.png';
      } else {
        document.getElementById('dataCakeImage').src = 'assets/img/datacake-en.png';
      }
      document.getElementById('dakeCakeText1').innerHTML = t('dakeCakeText1');
      document.getElementById('dakeCakeText2').innerHTML = t('dakeCakeText2');

      // solutions
      document.getElementById('solutionsSegment').innerHTML = t('solutionsSegment');
      document.getElementById('cloudCostOptimization').innerHTML = t('cloudCostOptimization');
      document.getElementById('cloudCostOptimizationText').innerHTML = t('cloudCostOptimizationText');
      document.getElementById('cloudMigration2').innerHTML = t('cloudMigration2');
      document.getElementById('cloudMigrationText2').innerHTML = t('cloudMigrationText2');

      // partners
      document.getElementById('partnersSegment').innerHTML = t('partnersSegment');

      // about us
      document.getElementById('aboutUsSegment').innerHTML = t('aboutUsSegment');
      document.getElementById('aboutUsText1').innerHTML = t('aboutUsText1');
      document.getElementById('aboutUsText2').innerHTML = t('aboutUsText2');
      document.getElementById('aboutUsText3').innerHTML = t('aboutUsText3');
      document.getElementById('aboutUsText4').innerHTML = t('aboutUsText4');
      document.getElementById('aboutUsText5').innerHTML = t('aboutUsText5');

      // bottom
      // document.getElementById('slogan').innerHTML = t('slogan');
      // document.getElementById('navigator').innerHTML = t('navigator');
      // document.getElementById('home1').innerHTML = t('home1');
      // document.getElementById('services1').innerHTML = t('services1');
      // document.getElementById('product1').innerHTML = t('product1');
      // document.getElementById('solutions1').innerHTML = t('solutions1');
      // document.getElementById('aboutUs1').innerHTML = t('aboutUs1');
      // document.getElementById('contactUs1').innerHTML = t('contactUs1');
      // document.getElementById('instantContact1').innerHTML = t('instantContact1');
      // document.getElementById('usefulLinks').innerHTML = t('usefulLinks');
      // document.getElementById('googleCloud').innerHTML = t('googleCloud');
    });
  }
  if (window.navigator.language.startsWith('zh')) {
    translatePage('', 'zh');
  }
});
