gsap.registerPlugin(ScrollTrigger);
//gsap.defaults({ ease: "none", duration: 2 });

const parallaxCont = document.getElementById(".parallax_cont");
const parallaxItem = document.querySelector(".content_item");
const rowPage1 = document.querySelector(".row_page1");
const rowPage2 = document.querySelector(".row_page2");
const rowPageWrap1 = document.querySelector(".row_page_wrap1");
const rowPageWrap2 = document.querySelector(".row_page_wrap2");

// window.addEventListener("scroll", () => {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
//   let tl = new TimelineLite();

//   if (scrollTop > document.getElementById("#section2").offsetTop) {
//     tl.set( document.querySelector(".nav"), { className: '+=show' } , "start")
//   } else {
//     tl.to(document.querySelector(".nav"), 1, { display: 'none' });
//   }

// });


//nav
// gsap.set(".nav", { y: -100 });

// const showAnim = gsap.from('.nav', {
//   yPercent: 100,
//   paused: true,
//   duration: 0.3
// }).progress(1);


// ScrollTrigger.create({
//   trigger: "#section2",
//   start: "top top",
//   end: 8000,
//   markers: true,
//   onUpdate: (self) => {
//     self.direction === -1 ? showAnim.play() : showAnim.reverse()
//   }
// });

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  if (scrollTop > window.innerWidth * 3) {
    document.querySelector(".nav").classList.add("show");
  } else {
    document.querySelector(".nav").classList.remove("show");
  }
});

function horizontalScrolling(wrap, page) {
  gsap.to(wrap, {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    invalidateOnRefresh: true,
    scrollTrigger: {
      trigger: page,
      start: "top top",
      markers: true,
      scrub: 1,
      pin: page,
      end: "+=" + (innerWidth * 3)
    },
  });
}

horizontalScrolling(".row_page_wrap1", ".row_page1");
horizontalScrolling(".row_page_wrap2", ".row_page2");
horizontalScrolling(".row_page_wrap3", ".row_page3");
horizontalScrolling(".row_page_wrap4", ".row_page4");


ScrollTrigger.create({
  trigger: '#section3',
  pin: true,
  start: 'top top',
  scrub: 0.5,
  endTrigger: "#section4",
  end: "top bottom",
  pinSpacing: false,
  //markers: true
});

ScrollTrigger.create({
  trigger: '#section5',
  pin: true,
  start: 'top top',
  scrub: 0.5,
  endTrigger: "#section7",
  end: "top bottom",
  pinSpacing: false,
  //markers: true
});


