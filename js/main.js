//버튼 클릭
// document.querySelectorAll(".portfolio_list ul li a").forEach((li) => {
//   li.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(li.getsAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

let s = skrollr.init({
  smoothScrolling: true,
});

menu
$(document).ready(function () {
  s = skrollr.init({
    forceHeight: false,
    smoothScrolling: true,
    smoothScrollingDuration: 150
  });

  skrollr.menu.init(s, {
    easing: 'outCubic',
    animate: true,
    duration: 1000
  });
});

// scroll
function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelector(".scroll").innerHTML = Math.trunc(scrollTop);

  if (scrollTop < 2700) {
    document.querySelector(".cover").style.display = "block";
  } else {
    document.querySelector(".cover").style.display = "none";
  }

  if (scrollTop >= 10500) {
    document.querySelector(
      ".section2 .sub_desc_wrap:first-child p .text_line:first-child"
    ).style.animation = "text_line 0.5s ease-in-out 0s forwards";
    document.querySelector(
      ".section2 .sub_desc_wrap:first-child p .text_line:last-child"
    ).style.animation = "text_line 0.5s ease-in-out 1s forwards";
    document.querySelector(
      ".section2 .sub_desc_wrap:last-child p .text_line"
    ).style.animation = "text_line 0.5s ease-in-out 2s forwards";
  } else {
    document.querySelector(
      ".section2 .sub_desc_wrap:first-child p .text_line:first-child"
    ).style.animation = "none";
    document.querySelector(
      ".section2 .sub_desc_wrap:first-child p .text_line:last-child"
    ).style.animation = "none";
    document.querySelector(
      ".section2 .sub_desc_wrap:last-child p .text_line"
    ).style.animation = "none";
  }

  // (header, section1) z-index 변화
  if (scrollTop < 8100 && scrollTop > 2600) {
    document.querySelector(".header").style.display = "flex";
    document.querySelector(".sec1").style.zIndex = "9001";
  } else {
    document.querySelector(".header").style.display = "none";
    document.querySelector(".sec1").style.zIndex = "1000";
  }

  // (section4) z-index 변화 : 버튼 활성
  if (scrollTop < 24000 && scrollTop > 19900) {
    document.querySelector(".section4").style.zIndex = "9001";
  } else {
    document.querySelector(".section4").style.zIndex = "4000";
  }

  // nav.change
  if (scrollTop < 24400 && scrollTop > 13500) {
    document.querySelector("#nav").classList.add("change");
  } else {
    document.querySelector("#nav").classList.remove("change");
  }

  if (scrollTop < 40000 && scrollTop >= 37500) {
    document.querySelector("#nav").classList.add("change");
  } else {
    document.querySelector("#nav").classList.remove("change");
  }

  requestAnimationFrame(scroll);
}
scroll();
