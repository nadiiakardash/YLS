"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('./slick/slick'); // const Parallax = require('parallax-js');
//
// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene, {
//   relativeInput: true
// });

/* ---- particles.js config ---- */


if ((0, _jquery["default"])('*').is('.block-values')) {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 270,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#b189dc"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#b189dc"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#b189dc",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
} //


if ((0, _jquery["default"])('*').is('.about-yls')) {
  var scrollFunction = function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
      document.getElementById("footer-main").style.zIndex = "44";
      document.getElementById("phone-animation").style.position = "fixed";
      document.getElementById("phone-animation").style.bottom = "20px";
      document.getElementById("individ-block").style.paddingTop = "70px";
      var mql = window.matchMedia('all and (max-width: 353px)');

      if (mql.matches) {
        document.getElementById("phone-animation").style.right = "-20px";
      }
    } else {
      // document.getElementById("individ-block").style.marginTop = "134px";
      document.getElementById("phone-animation").style.position = "relative";
      document.getElementById("phone-animation").style.bottom = "0px";
      document.getElementById("phone-animation").style.marginTop = "-100px";
      document.getElementById("individ-block").style.paddingTop = "20px";
      var mql = window.matchMedia('all and (max-width: 353px)');

      if (mql.matches) {
        document.getElementById("phone-animation").style.right = "0px";
      }
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };
} //


if ((0, _jquery["default"])('*').is('.courses_page')) {
  var _scrollFunction = function _scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
      document.getElementById("footer-main").style.zIndex = "44";
      document.getElementById("phone-animation").style.position = "fixed";
      document.getElementById("phone-animation").style.bottom = "20px";
      var mql = window.matchMedia('all and (max-width: 353px)');

      if (mql.matches) {
        document.getElementById("phone-animation").style.right = "-20px";
      }
    } else {
      // document.getElementById("individ-block").style.marginTop = "134px";
      document.getElementById("phone-animation").style.position = "relative";
      document.getElementById("phone-animation").style.bottom = "0px";
      document.getElementById("phone-animation").style.marginTop = "-100px";
      var mql = window.matchMedia('all and (max-width: 353px)');

      if (mql.matches) {
        document.getElementById("phone-animation").style.right = "0px";
      }
    }
  };

  window.onscroll = function () {
    _scrollFunction();
  };
} // pre
// if ($('*').is('#main-container')) {
// function loadData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000);
//   })
// }
// loadData()
//   .then(() => {
//     let preloaderEl = document.getElementById('preloader');
//     preloaderEl.classList.add('hidden');
//     preloaderEl.classList.remove('visible');
//   });
// }
//


window.btnOver = function () {
  btnOver();
};

function btnOver() {
  document.getElementById("bg-hover").style.transform = "rotate(-4deg)";
}

window.btnOut = function () {
  btnOut();
};

function btnOut() {
  document.getElementById("bg-hover").style.transform = "rotate(0deg)";
} //


window.btnOver2 = function () {
  btnOver2();
};

function btnOver2() {
  document.getElementById("bg-hover2").style.transform = "rotate(-4deg)";
}

window.btnOut2 = function () {
  btnOut2();
};

function btnOut2() {
  document.getElementById("bg-hover2").style.transform = "rotate(0deg)";
} //


window.btnOver3 = function () {
  btnOver3();
};

function btnOver3() {
  document.getElementById("bg-hover3").style.transform = "rotate(-4deg)";
}

window.btnOut3 = function () {
  btnOut3();
};

function btnOut3() {
  document.getElementById("bg-hover3").style.transform = "rotate(0deg)";
} //


window.btnOver4 = function () {
  btnOver4();
};

function btnOver4() {
  document.getElementById("bg-hover4").style.fontSize = "17px";
  var mql = window.matchMedia('all and (max-width: 700px)');

  if (mql.matches) {
    document.getElementById("bg-hover4").style.fontSize = "13px";
  }
}

window.btnOut4 = function () {
  btnOut4();
};

function btnOut4() {
  document.getElementById("bg-hover4").style.fontSize = "16px";
  var mql = window.matchMedia('all and (max-width: 700px)');

  if (mql.matches) {
    document.getElementById("bg-hover4").style.fontSize = "12px";
  }
} //


window.btnOver5 = function () {
  btnOver5();
};

function btnOver5() {
  document.getElementById("bg-hover5").style.transform = "rotate(-4deg)";
}

window.btnOut5 = function () {
  btnOut5();
};

function btnOut5() {
  document.getElementById("bg-hover5").style.transform = "rotate(0deg)";
} //


window.btnOver6 = function () {
  btnOver6();
};

function btnOver6() {
  document.getElementById("bg-hover6").style.fontSize = "17px";
  var mql = window.matchMedia('all and (max-width: 700px)');

  if (mql.matches) {
    document.getElementById("bg-hover6").style.fontSize = "13px";
  }
}

window.btnOut6 = function () {
  btnOut6();
};

function btnOut6() {
  document.getElementById("bg-hover6").style.fontSize = "16px";
  var mql = window.matchMedia('all and (max-width: 700px)');

  if (mql.matches) {
    document.getElementById("bg-hover6").style.fontSize = "12px";
  }
} //text writer


(0, _jquery["default"])(document).ready(function () {
  (0, _jquery["default"])('.single-item').slick({
    prevArrow: (0, _jquery["default"])('.prev-slider-video'),
    nextArrow: (0, _jquery["default"])('.next-slider-video')
  });
  (0, _jquery["default"])('.multiple-items').slick({
    prevArrow: (0, _jquery["default"])('.prev-slider-img'),
    nextArrow: (0, _jquery["default"])('.next-slider-img')
  });
  (0, _jquery["default"])('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (0, _jquery["default"])('.prev-slider-program'),
    nextArrow: (0, _jquery["default"])('.next-slider-program')
  }); //popup

  var elementts = (0, _jquery["default"])('.modal-overlay-page, .modal-page');
  (0, _jquery["default"])('.modal-btn-page').click(function () {
    elementts.addClass('active-page');
  });
  (0, _jquery["default"])('.close-modal-page').click(function () {
    elementts.removeClass('active-page');
  }); //popupphone

  var element = (0, _jquery["default"])('.modal-overlay-call, .modal-call');
  (0, _jquery["default"])('.modal-btn-call').click(function () {
    element.addClass('active-call');
  });
  (0, _jquery["default"])('.close-modal-call').click(function () {
    element.removeClass('active-call');
  }); //

  (0, _jquery["default"])(".call-phone2").click(function () {
    (0, _jquery["default"])(".search-items").css("opacity", "0");
  });
  (0, _jquery["default"])(".close-modal-call").click(function () {
    (0, _jquery["default"])(".search-items").css("opacity", "1");
  }); //

  (0, _jquery["default"])(".call-phone2").click(function () {
    (0, _jquery["default"])(".search-mobile-cours").css("opacity", "0");
  });
  (0, _jquery["default"])(".close-modal-call").click(function () {
    (0, _jquery["default"])(".search-mobile-cours").css("opacity", "1");
  });
}); // });
//

if ((0, _jquery["default"])('*').is('.about-yls')) {
  var PopTime = function PopTime() {
    document.getElementById("popupTime").style.display = "block";
  };

  setTimeout(PopTime, 9000);
} //adaptive slider
// var mql = window.matchMedia('(min-width: 820px) and (max-width: 1380px)');
// if (mql.matches) {
//     $('.autoplay').slick({
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 prevArrow: $('.prev-slider-program'),
//                 nextArrow: $('.next-slider-program'),
//               });
// }
// var mql = window.matchMedia('all and (max-width: 820px)');
// if (mql.matches) {
//     $('.autoplay').slick({
//                 slidesToScroll: 1,
//                 slidesToShow: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 prevArrow: $('.prev-slider-program'),
//                 nextArrow: $('.next-slider-program'),
//               });
// }


if ((0, _jquery["default"])('*').is('.welcome-txt')) {
  var textWriter = function textWriter(node, ms) {
    var text = node.textContent;
    var index = 0;
    var textToShowArray = ['Welcome to'];
    var textToShow = text;

    function reverse() {
      var step = ms / textToShow.length;
      var interval = setInterval(function () {
        textToShow = textToShow.slice(0, textToShow.length - 1);
        node.textContent = textToShow;

        if (textToShow.length === 0) {
          clearTimeout(interval);
          textToShow = textToShowArray[index];
          index++;
          forward();
        }
      }, step);
    }

    function forward() {
      var step = ms / textToShow.length;
      var length = textToShow.length;
      var copyText = textToShow;
      var currentIndex = 1;
      var interval = setInterval(function () {
        textToShow = copyText.slice(0, currentIndex);
        currentIndex++;
        node.textContent = textToShow;
      }, step);
    }

    reverse();
  };

  var textTime = 1100;
  var textNode = document.querySelector('.welcome-txt');
  textWriter(textNode, textTime);
  (0, _jquery["default"])(".yls-txt").delay(2000).fadeIn();
} //


window.closepopTime = function () {
  closepopTime();
};

function closepopTime() {
  document.getElementById("popupTime").style.display = "none";
} //


window.BigVideo = function () {
  BigVideo();
};

function BigVideo() {
  document.getElementById("big_video").style.zIndex = "3";
  document.getElementById("big_video").style.opacity = "1";
  document.getElementById("img-bg").style.opacity = "0";
} // -


window.BigGallery = function () {
  BigGallery();
};

function BigGallery() {
  document.getElementById("img_modal").style.display = "block";
  document.getElementById("social-network").style.opacity = "0";
  document.getElementById("text-follow").style.opacity = "0";
  document.getElementById("phone-animation").style.opacity = "0";
} //


window.closeGallery = function () {
  closeGallery();
};

function closeGallery() {
  document.getElementById("img_modal").style.display = "none";
  document.getElementById("social-network").style.opacity = "1";
  document.getElementById("text-follow").style.opacity = "1";
  document.getElementById("phone-animation").style.opacity = "1";
} //


window.BigGallery2 = function () {
  BigGallery2();
};

function BigGallery2() {
  document.getElementById("img_modal2").style.display = "block";
  document.getElementById("social-network").style.opacity = "0";
  document.getElementById("text-follow").style.opacity = "0";
  document.getElementById("phone-animation").style.opacity = "0";
} //


window.closeGallery2 = function () {
  closeGallery2();
};

function closeGallery2() {
  document.getElementById("img_modal2").style.display = "none";
  document.getElementById("social-network").style.opacity = "1";
  document.getElementById("text-follow").style.opacity = "1";
  document.getElementById("phone-animation").style.opacity = "1";
} //


window.BigGallery3 = function () {
  BigGallery3();
};

function BigGallery3() {
  document.getElementById("img_modal3").style.display = "block";
  document.getElementById("social-network").style.opacity = "0";
  document.getElementById("text-follow").style.opacity = "0";
  document.getElementById("phone-animation").style.opacity = "0";
} //


window.closeGallery3 = function () {
  closeGallery3();
};

function closeGallery3() {
  document.getElementById("img_modal3").style.display = "none";
  document.getElementById("social-network").style.opacity = "1";
  document.getElementById("text-follow").style.opacity = "1";
  document.getElementById("phone-animation").style.opacity = "1";
} //


window.openNav = function () {
  openNav();
};

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("myNav").style.position = "fixed";
  document.getElementById("main-container").style.opacity = "0";
}

window.closeNav = function () {
  closeNav();
};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myNav").style.position = "none";
  document.getElementById("main-container").style.opacity = "1";
} //video  slider 1


if ((0, _jquery["default"])('*').is('.single-item')) {
  var setupControl = function setupControl() {
    var myVideo = document.getElementById("video-in-block");

    if (myVideo.canPlayType) {
      myVideo.removeAttribute("controls");
      myVideo.addEventListener("ended", endPlayback, false);
      myVideo.addEventListener("play", function () {
        document.getElementById("start").disabled = true;
        document.getElementById("pause").disabled = false;
      }, false);
      myVideo.addEventListener("pause", function () {
        document.getElementById("start").disabled = false;
        document.getElementById("pause").disabled = true;
      }, false);
      document.getElementById("start").addEventListener("click", startPlayback, false);
      document.getElementById("pause").addEventListener("click", pausePlayback, false);
    }
  };

  var startvideo = function startvideo() {
    document.getElementById("start").style.display = "none";
    document.getElementById("pause").style.display = "inline"; // myVideo.setAttribute("controls");
  };

  var pausevideo = function pausevideo() {
    document.getElementById("start").style.display = "inline";
    document.getElementById("pause").style.display = "none";
  };

  var startPlayback = function startPlayback() {
    document.getElementById("video-in-block").play();
  };

  var pausePlayback = function pausePlayback() {
    document.getElementById("video-in-block").pause();
  };

  var endPlayback = function endPlayback() {
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("pause").style.display = "none";
    document.getElementById("start").style.display = "inline";
  };

  document.addEventListener("DOMContentLoaded", setupControl, false);

  window.startvideo = function () {
    startvideo();
  };

  window.pausevideo = function () {
    pausevideo();
  };
} // SCROLL TO TOP


(0, _jquery["default"])('.todown').click(function () {
  (0, _jquery["default"])('body,html').animate({
    scrollTop: 0
  }, 1000);
  return false;
}); //animation
// SLIDER COURSES ABOUT

(0, _jquery["default"])('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true,
  asNavFor: '.slider-nav',
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>'
});
(0, _jquery["default"])('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true
}); // CALC

(0, _jquery["default"])('.stepwrap1 .next-step').click(function () {
  (0, _jquery["default"])('.stepnum').addClass('stephide');
  (0, _jquery["default"])('.stepwrap2').removeClass('stephide');
  (0, _jquery["default"])('.stepshead__box').removeClass('active');
  (0, _jquery["default"])('.stepshead__box.box1').addClass('check');
  (0, _jquery["default"])('.stepshead__box.box2').addClass('active');
}); // -2

(0, _jquery["default"])('.stepwrap2 .prev-step').click(function () {
  (0, _jquery["default"])('.stepnum').addClass('stephide');
  (0, _jquery["default"])('.stepwrap1').removeClass('stephide');
  (0, _jquery["default"])('.stepshead__box').removeClass('active');
  (0, _jquery["default"])('.stepshead__box').removeClass('check');
  (0, _jquery["default"])('.stepshead__box.box1').addClass('active');
});
(0, _jquery["default"])('.stepwrap2 .next-step').click(function () {
  (0, _jquery["default"])('.stepnum').addClass('stephide');
  (0, _jquery["default"])('.stepwrap3').removeClass('stephide');
  (0, _jquery["default"])('.stepshead__box').removeClass('active');
  (0, _jquery["default"])('.stepshead__box.box1, .stepshead__box.box2').addClass('check');
  (0, _jquery["default"])('.stepshead__box.box3').addClass('active');
}); // -3

(0, _jquery["default"])('.stepwrap3 .prev-step').click(function () {
  (0, _jquery["default"])('.stepnum').addClass('stephide');
  (0, _jquery["default"])('.stepwrap2').removeClass('stephide');
  (0, _jquery["default"])('.stepshead__box').removeClass('active').removeClass('check');
  (0, _jquery["default"])('.stepshead__box.box1').addClass('check');
  (0, _jquery["default"])('.stepshead__box.box2').addClass('active');
});
(0, _jquery["default"])('.stepwrap3 .next-step').click(function () {
  (0, _jquery["default"])('.stepnum').addClass('stephide');
  (0, _jquery["default"])('.stepwrap4').removeClass('stephide');
  (0, _jquery["default"])('.stepshead__box').removeClass('active');
  (0, _jquery["default"])('.stepshead__box.box1, .stepshead__box.box2, .stepshead__box.box3').addClass('check');
  (0, _jquery["default"])('.stepshead__box.box4').addClass('active');
}); // 4

(0, _jquery["default"])('.stepwrap4 .prev-step').click(function () {
  (0, _jquery["default"])('.stepnum').addClass('stephide');
  (0, _jquery["default"])('.stepwrap3').removeClass('stephide');
  (0, _jquery["default"])('.stepshead__box').removeClass('active').removeClass('check');
  (0, _jquery["default"])('.stepshead__box.box1, .stepshead__box.box2').addClass('check');
  (0, _jquery["default"])('.stepshead__box.box3').addClass('active');
});
(0, _jquery["default"])(document).ready(function () {
  if ((0, _jquery["default"])(window).width() < 768) {
    (0, _jquery["default"])('.sidebar-filter__cont .title').click(function () {
      (0, _jquery["default"])(this).next().slideToggle();
      (0, _jquery["default"])(this).parent().toggleClass('rotatebefore');
    });
  }

  (0, _jquery["default"])(window).resize(function () {
    if ((0, _jquery["default"])(window).width() < 768) {
      (0, _jquery["default"])('.sidebar-filter__cont .title').click(function () {
        (0, _jquery["default"])(this).next().slideToggle();
        (0, _jquery["default"])(this).parent().toggleClass('rotatebefore');
      });
    }
  });
});