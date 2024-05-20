function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locoscroll();

function page2Animation(){
    gsap.from(".elem h1",{
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 47%",
            end:"top 46%",
            markers:true,
            scrub:2
        }
    })
}
page2Animation()

function page2Animation() {
    gsap.from(".elem h1", {
      y: 120,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",
        scrub: 6,
        
      },
    });
  
    gsap.from("#page2-top h2", {
      y: 120,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",
        scrub: 6,
      },
    });
  
    function page2Animation() {
        gsap.from(".elem ", {
          y: 120,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 6,
            
          },
        });
      
        gsap.from("#page2-top h2", {
          y: 120,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 6,
          },
        });
      
      
        gsap.from(".footer__links", {
          y: 120,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: ".footer",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 6,
          },   
        });
      
        gsap.from("#page4-top", {
          y: 50,
          stagger: 0,
          duration: 1,
          scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 70%",
            end: "top 50%",
            scrub: 2,
          },   
        });
        
        var tl = gsap.timeline();
        tl.from(".container", {
          x:300,
          stagger: 5,
          duration: 7,
          scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 47%",
            end: "top 20%",
            scrub: 5,
            
          },   
        });
      }
      page2Animation();
  }
  page2Animation();



  function loader(){
    var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
tl.to("#loader h3", {
  x: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
tl.to("#loader", {
  opacity: 0,
  display: "none",
});

tl.from("#page1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger:0.2,
  duration:.5,
});
}
loader()


// gallery

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});