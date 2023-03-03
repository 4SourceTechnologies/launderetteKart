
// count up function
var runAlready;
var counting;

function startCounter(a) {
  runAlready = true;
  counting = true;
  $(".counter").each(function () {
    var $this = $(this);
    $this.text(a);
    countTo = $this.attr("data-count");
    $({
      countNum: $this.text(),
    }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 8000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          counting = false;
        },
      }
    );
  });
}

$(window).scroll(function () {
  var oTop = $(".counter").offset().top;
  var a = 0;
  if (
    (!runAlready && $(window).scrollTop() > oTop) ||
    (!counting && $(window).scrollTop() < oTop)
  ) {
    startCounter(a);
  }
});

// Count Up function ends here

// mobile navbar
let humburger = document.querySelector(".navbar-toggler");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobileNav");

humburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
});
humburger.addEventListener("blur", function () {
  mobileNav.classList.remove("open");
});
// Mobile nav number function ends here

// Navbar Two postion:fixed upon Scroll
// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 5) {
//       $(".navbar").css("position", "fixed");
//       $(".headerTopWrapper").css("z-index", "1030");
//       $(".navbar").css("top", "0");
//     } else if(scrollY < 5){
//       $(".navbar").css("position", "static")
//       $(".headerTopWrapper").css("position", "relative");
//     }
//   });
// });

window.addEventListener("scroll", function () {
  var headerTop = document.querySelector(".headerTop");
  var nav = this.document.querySelector(".strickyHeader");
  headerTop.classList.toggle("htAnimate", window.scrollY > 0);
  nav.classList.toggle("stricky-fixed", window.scrollY > 1);
});


$(".readMore").click(function () {
  $(".readMoreOverlay").addClass("showUp");
  $(".readMore").toggle();
});

$(".readLess").click(function () {
  $(".readMoreOverlay").removeClass("showUp");
  $(".readMore").toggle();
});

$('.siMain img').click(function(){
 var imgSrc = ($(this)).attr('src');
 $(".clickedImg").attr("src", imgSrc);
 $('.imgClickWrapper').addClass('clicked');
 this.attr('data-enlargeable').addClass('img-enlargeable')
});

$('.zoomBtn').click(function(){
  $('.imgClickInner .body img').toggleClass('zoomClicked');
  $('.imgClickInner .header').addClass('.headerAdj');
   $(this).toggleClass("ck");
})

$('.shareBtn').click(function(){
  $('.shareDiv').toggleClass('sharing');
})

var myDocument = document.documentElement
$('.expandBtn').click(function(){
  if(myDocument.requestFullscreen){
    myDocument.requestFullscreen();
  }

$('.expandBtn').toggleClass('clicked');
$('.imgClickWrapper').toggleClass('fScreen');
$(".expandBtn.clicked").click(function () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});
})

$(".closeBtn").click(function () {
  $(".imgClickWrapper").removeClass("clicked");
  $(".imgClickInner .body img").removeClass("zoomClicked");
  $(".imgClickInner .header").removeClass(".headerAdj");
  $(".zoomBtn").removeClass("ck");
  $(".shareDiv").removeClass("sharing");

  if (document.fullscreenElement)  {
    if (document.exitFullscreen){
      document.exitFullscreen();
    }
  }
});

if ($(window).height() !== screen.height) {
    $('.imgClickWrapper').removeClass('fScreen');
}

var hImg = document.getElementById('designImgHover');

const options = {
  delay: "500",
  threshold: '0.9'
}

const hObserver = new IntersectionObserver(function(
  entries, hObserver){
    entries.forEach(entry => {
      if (entry.isIntersecting){
        hImg.classList.add("ting");
      }
      else {
        return;
      }
    })
  }, options);

  hObserver.observe(hImg);

