//----------------Animations with Waypoint JS ----------------------

// Little bit about me portion
$(".wp1").waypoint(
  function () {
    $(".wp1").addClass("animate__animated animate__fadeIn")
  },
  {
    offset: "90%",
  }
)

// What i do
$(".wp2").waypoint(
  function () {
    $(".wp2").addClass("animate__animated animate__fadeIn ")
  },
  {
    offset: "60%",
  }
)
// Experience
$(".wp3").waypoint(
  function () {
    $(".wp3").addClass("animate__animated animate__fadeInLeft ")
  },
  {
    offset: "60%",
  }
)

// Resume Button
$(".wp4").waypoint(
  function () {
    $(".wp4").addClass("animate__animated animate__bounceIn ")
  },
  {
    offset: "50%",
  }
)

//Email icon above footer
$(".wp5").waypoint(
  function () {
    $(".wp5").addClass("animate__animated animate__bounceInDown ")
  },
  {
    offset: "90%",
  }
)

//----------------Animations with Waypoint JS ----------------------

//back to the top text
$("#back-to-top").mouseover(function () {
  $("#back-to-top-copy").animate({ opacity: "1" }, "slow")
})
$("#back-to-top").mouseout(function () {
  $("#back-to-top-copy").animate({ opacity: "0" }, "slow")
})

//navbar collapse
// $(window).scroll(function () {
//   if ($(".navbar").offset().top > 50) {
//     $(".changing-nav-bar").addClass("nav-collapse")
//   } else {
//     $(".changing-nav-bar").removeClass("nav-collapse")
//   }
// })

//navbar collapse but if the device is a mobile device automatically add the collapsing navbar class
//otherwise only add the navar collapse class once you start scrolling

if (window.innerWidth <= 576) {
  $(".changing-nav-bar").addClass("nav-collapse")
} else {
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".changing-nav-bar").addClass("nav-collapse")
    } else {
      $(".changing-nav-bar").removeClass("nav-collapse")
    }
  })
}