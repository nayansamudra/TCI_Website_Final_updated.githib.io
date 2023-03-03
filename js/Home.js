$(document).ready(function () {

  counter_1 = counter_2 = counter_3 = counter_course_accordion = 1
  index = ''
  $.ajaxSetup({ async: false }); // to stop async
  console.log("ready!");
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggle();
  });

  // $('.accordion-collapse').hide()

  $('.dropdown-toggle').on('click', function () {
    $('.dropdown-menu').toggle();
  })

  $('#heading_One').on('click', function () {
    $('#collapse_Two').removeClass('show in')
    $('#collapse_Three').removeClass('show in')
    $('#heading_Two button').addClass('collapsed')
    $('#heading_Three button').addClass('collapsed')
    $('#heading_Two button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'false')
    $('#heading_One button').attr('aria-expanded', 'true')
    if ($('#collapse_One').hasClass('show')) {
      $('#collapse_One').removeClass('show')
      $('#heading_One button').attr('aria-expanded', 'false')
      $('#heading_One button').addClass('collapsed')
    }
    else {
      $('#collapse_One').addClass('show')
      $('#heading_One button').removeClass('collapsed')
    }
  })
  $('#heading_Two').on('click', function () {
    $('#collapse_One').removeClass('show in')
    $('#collapse_Three').removeClass('show in')
    $('#heading_One button').addClass('collapsed')
    $('#heading_Three button').addClass('collapsed')
    $('#heading_One button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'false')
    $('#heading_Two button').attr('aria-expanded', 'true')
    if ($('#collapse_Two').hasClass('show')) {
      $('#collapse_Two').removeClass('show')
      $('#heading_Two button').attr('aria-expanded', 'false')
      $('#heading_Two button').addClass('collapsed')
    }
    else {
      $('#collapse_Two').addClass('show')
      $('#heading_Two button').removeClass('collapsed')
    }
  })
  $('#heading_Three').on('click', function () {
    $('#collapse_Two').removeClass('show in')
    $('#collapse_One').removeClass('show in')
    $('#heading_Two button').addClass('collapsed')
    $('#heading_One button').addClass('collapsed')
    $('#heading_Two button').attr('aria-expanded', 'false')
    $('#heading_One button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'true')
    if ($('#collapse_Three').hasClass('show')) {
      $('#collapse_Three').removeClass('show')
      $('#heading_Three button').attr('aria-expanded', 'false')
      $('#heading_Three button').addClass('collapsed')
    }
    else {
      $('#collapse_Three').addClass('show')
      $('#heading_Three button').removeClass('collapsed')
    }
  })

  $('.course-accordion').on('click', function () {
    temp = $('.course-accordion').index(this)
    counter_course_accordion += 1
    console.log(temp)
    if (counter_course_accordion % 2 == 0 && counter_course_accordion <= 2) {
      $(this).addClass('active')
      $(this).next().css('max-height', 'fit-content')
    }
    else if (counter_course_accordion > 2) {
      if (temp == index) {
        if ($(this).hasClass('active')) {
          $('.course-accordion').removeClass('active')
          $('.course-panel').css('max-height', '0px')
        }
        else if (!$(this).hasClass('active')) {
          $(this).addClass('active')
          $(this).next().css('max-height', 'fit-content')
        }
      }
      else if (temp != index) {
        $('.course-accordion').removeClass('active')
        $('.course-panel').css('max-height', '0px')
        $(this).addClass('active')
        $(this).next().css('max-height', 'fit-content')
      }
    }
    index = temp
  })

  // const scrollContainer = document.querySelector("main");

  // scrollContainer.addEventListener("wheel", (evt) => {
  //   evt.preventDefault();
  //   scrollContainer.scrollLeft += evt.deltaY;
  // });

  // scroll_counter = 0;
  // lastScrollTop = 0;

  // var wrap = $("main");

  // $(window).bind('mousewheel', function (event) {
  //   if (event.originalEvent.wheelDelta >= 0) {
  //     scroll_counter = 0
  //     console.log('Scroll up - MOVING LEFT');
  //     if ($('#business-studio').scrollLeft < 1000 && $('#business-studio').scrollLeft > 0) {
  //       console.log(scroll_counter);
  //       $($('#business-studio')).scrollLeft(1000)
  //       if (scroll_counter > 15) {
  //         $($('#business-studio')).scrollLeft(0)
  //       }
  //     } else if ($('#business-studio').scrollLeft < 2000 && $('#business-studio').scrollLeft > 1000) {
  //       console.log(scroll_counter);
  //       $($('#business-studio')).scrollLeft(2000)
  //       if (scroll_counter > 10) {
  //         $($('#business-studio')).scrollLeft(1000)
  //       }
  //     } else if ($('#business-studio').scrollLeft < 3000 && $('#business-studio').scrollLeft > 2000) {
  //       console.log(scroll_counter);
  //       $($('#business-studio')).scrollLeft(3000)
  //       if (scroll_counter > 5) {
  //         $($('#business-studio')).scrollLeft(2000)
  //       }
  //     }
  //   }
  // });


  // wrap.on("scroll", function (e) {
  //   // scroll_counter += 1;
  //   // if (this.scrollLeft < 1000 && this.scrollLeft > 0) {
  //   //   console.log(scroll_counter);
  //   //   $(this).scrollLeft(0)
  //   //   if (scroll_counter > 5) {
  //   //     $(this).scrollLeft(1000)
  //   //   }
  //   // } else if (this.scrollLeft < 2000 && this.scrollLeft > 1000) {
  //   //   console.log(scroll_counter);
  //   //   $(this).scrollLeft(1000)
  //   //   if (scroll_counter > 10) {
  //   //     $(this).scrollLeft(2000)
  //   //   }
  //   // } else if (this.scrollLeft < 3000 && this.scrollLeft > 2000) {
  //   //   console.log(scroll_counter);
  //   //   $(this).scrollLeft(2000)
  //   //   if (scroll_counter > 15) {
  //   //     $(this).scrollLeft(3000)
  //   //   }
  //   // }
  // });

  $(window).scroll(function (event) {
    horizontal_scroll_1_start = $("#pinContainer").offset().top == $(window).scrollTop()
    console.log("horizontal_scroll_1_start", horizontal_scroll_1_start)
    if ($(window).width() < 413) {
      if (horizontal_scroll_1_start == true) {
        $('body').css('overflow-x', 'visible !important')
      }
    }
    else if ($(window).width() > 413) {
      $('body').css('overflow-x', 'clip')
    }
  });

  //   $(document).scroll(function(){
  //     $('div').find('#layoutbox').each(function(){
  //         var centerLine = $(window).height()/2;
  //         var divStart = $(this).offset().top;
  //         var divEnd = divStart + $(this).height();
  //         if(divStart < centerLine && divEnd > centerLine){
  //             //do the thing
  //             console.log('u r at center')
  //         } else {
  //             //undo the thing
  //             console.log('u r not at center')
  //         };
  //     });
  // });


  // gsap.registerPlugin(ScrollTrigger);

  // gsap.set(".massiveImage", { backgroundImage: `url(https://source.unsplash.com/random/${innerWidth * 3}x${innerHeight})` })

  // gsap.to(".massiveImage", {
  //   xPercent: -100,
  //   x: () => innerWidth,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".massiveImage",
  //     start: "center center",
  //     end: () => innerWidth * 3,
  //     scrub: true,
  //     pin: true,
  //     invalidateOnRefresh: true,
  //     anticipatePin: 1
  //   }
  // });

  // gsap.registerPlugin(ScrollTrigger);

  // let sections = gsap.utils.toArray(".panel");

  // let scrollTween = gsap.to(sections, {
  //   xPercent: -100 * (sections.length - 1),
  //   ease: "none", // <-- IMPORTANT!
  //   scrollTrigger: {
  //     trigger: "#container",
  //     start: "center center",
  //     end: "right right",
  //     pin: true,
  //     scrub: 0.1,
  //     // snap: directionalSnap(1 / (sections.length - 1)),
  //     end: "+=3000"
  //   }
  // });

  // gsap.set(".box-1, .box-2", { y: 100 });
  // ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

  // // red section
  // gsap.to(".box-1", {
  //   y: -130,
  //   duration: 2,
  //   ease: "elastic",
  //   scrollTrigger: {
  //     trigger: ".box-1",
  //     containerAnimation: scrollTween,
  //     // start: "left center",
  //     toggleActions: "play none none reset",
  //     id: "1",
  //   }
  // });


  // // gray section
  // gsap.to(".box-2", {
  //   y: -120,
  //   backgroundColor: "#1e90ff",
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".box-2",
  //     containerAnimation: scrollTween,
  //     // start: "center 80%",
  //     // end: "center 20%",
  //     scrub: true,
  //     id: "2"
  //   }
  // });

  // // purple section
  // ScrollTrigger.create({
  //   trigger: ".box-3",
  //   containerAnimation: scrollTween,
  //   toggleClass: "active",
  //   // start: "center 60%",
  //   id: "3"
  // });

  // // purple section
  // ScrollTrigger.create({
  //   trigger: ".box-4",
  //   containerAnimation: scrollTween,
  //   toggleClass: "active",
  //   start: "center 60%",
  //   end: "right bottom",
  //   id: "4"
  // });

  // // green section
  // ScrollTrigger.create({
  //   trigger: ".green",
  //   containerAnimation: scrollTween,
  //   start: "center 65%",
  //   end: "right right",
  //   onEnter: () => console.log("enter"),
  //   onLeave: () => console.log("leave"),
  //   onEnterBack: () => console.log("enterBack"),
  //   onLeaveBack: () => console.log("leaveBack"),
  //   onToggle: self => console.log("active", self.isActive),
  //   id: "4"
  // });

  // // only show the relevant section's markers at any given time
  // gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", { autoAlpha: 0 });
  // ["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
  //   ScrollTrigger.create({
  //     trigger: "." + triggerClass,
  //     containerAnimation: scrollTween,
  //     start: "left 30%",
  //     end: i === 3 ? "right right" : "right 30%",
  //     markers: false,
  //     onToggle: self => gsap.to(".marker-" + (i + 1), { duration: 0.25, autoAlpha: self.isActive ? 1 : 0 })
  //   });
  // });

  // // helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
  // // function directionalSnap(increment) {
  // //   let snapFunc = gsap.utils.snap(increment);
  // //   return (raw, self) => {
  // //     let n = snapFunc(raw);
  // //     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
  // //   };
  // // }

  // $(function () { // wait for document ready
  //   // init
  //   var controller = new ScrollMagic.Controller();

  //   // define movement of panels
  //   var wipeAnimation = new TimelineMax()
  //     // animate to second panel
  //     .to("#slideContainer", 0.5, { z: -150 })		// move back in 3D space
  //     .to("#slideContainer", 1, { x: "-25%" })	    // move in to first panel
  //     .to("#slideContainer", 0.5, { z: 0 })			// move back to origin in 3D space
  //     // animate to third panel
  //     .to("#slideContainer", 0.5, { z: -150, delay: 1 })
  //     .to("#slideContainer", 1, { x: "-50%" })
  //     .to("#slideContainer", 0.5, { z: 0 })
  //     // animate to forth panel
  //     .to("#slideContainer", 0.5, { z: -150, delay: 1 })
  //     .to("#slideContainer", 1, { x: "-75%" })
  //     .to("#slideContainer", 0.5, { z: 0 });

  //   // create scene to pin and link animation
  //   new ScrollMagic.Scene({
  //     triggerElement: "#pinContainer",
  //     triggerHook: "onLeave",
  //     duration: "500%"
  //   })
  //     .setPin("#pinContainer")
  //     .setTween(wipeAnimation)
  //     .addIndicators() // add indicators (requires plugin)
  //     .addTo(controller);
  // });

  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $("#Rocket_container")
        .removeClass("container")
        .addClass("container-fluid");
    }
    if ($(window).width() > 1200) {
      $("#Rocket_container")
        .removeClass("container-fluid")
        .addClass("container");
    }
    if ($(window).width() < 413) {
      $("#For_Mobile_View_image-item").removeClass("justify-content-center");
      $('body').css('overflow-x', 'clip')
    }
    if ($(window).width() > 413) {
      $("#For_Mobile_View_image-item").addClass("justify-content-center");
      $('body').css('overflow-x', 'clip')
    }
  });

  if ($(window).width() < 1200) {
    $("#Rocket_container").removeClass("container").addClass("container-fluid");
  }
  if ($(window).width() > 1200) {
    $("#Rocket_container").removeClass("container-fluid").addClass("container");
  }
  if ($(window).width() < 413) {
    $("#For_Mobile_View_image-item").removeClass("justify-content-center");
    $('body').css('overflow-x', 'clip')
  }
  if ($(window).width() > 413) {
    $("#For_Mobile_View_image-item").addClass("justify-content-center");
    $('body').css('overflow-x', 'clip')
  }
});
