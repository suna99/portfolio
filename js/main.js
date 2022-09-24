let s = skrollr.init({
  smoothScrolling: true,
});

// document.querySelectorAll(".portfolio_list ul li a").forEach((li) => {
//   li.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(li.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

document.querySelector("a.aboutMe").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 12000,
    left: 0,
    behavior: "smooth",
  });
});

document.querySelector("a.skills").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 19000,
    left: 0,
    behavior: "smooth",
  });
});

document.querySelector("a.javascript").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 26000,
    left: 0,
    behavior: "smooth",
  });
});

document.querySelector("a.siteWorks").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 33000,
    left: 0,
    behavior: "smooth",
  });
});

document.querySelector("a.frontEnd").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 37500,
    left: 0,
    behavior: "smooth",
  });
});

document.querySelector("a.footer").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 41000,
    left: 0,
    behavior: "smooth",
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
  if (scrollTop >= 13500 && scrollTop < 24400) {
    document.querySelector("#nav").classList.add("change");
  } else {
    document.querySelector("#nav").classList.remove("change");
  }
  requestAnimationFrame(scroll);
}
scroll();
