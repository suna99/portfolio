//const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
const section5 = document.querySelector("#section5");
const section6 = document.querySelector("#section6");
const section7 = document.querySelector("#section7");
const section8 = document.querySelector("#section8");

//버튼 클릭
document.querySelectorAll(".portfolio_list ul li a").forEach(li => {
  li.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(li.getsAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

let s = skrollr.init({
  smoothScrolling: true
});

// scroll
function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelector(".scroll").innerHTML = Math.trunc(scrollTop);

  if (scrollTop < 2700) {
    document.querySelector(".cover").style.display = 'block';
  } else {
    document.querySelector(".cover").style.display = 'none';
  }

  if (scrollTop >= 10500) {
    document.querySelector('.section2 .sub_desc_wrap:first-child p .text_line:first-child').style.animation = "text_line 0.5s ease-in-out 0s forwards";
    document.querySelector('.section2 .sub_desc_wrap:first-child p .text_line:last-child').style.animation = "text_line 0.5s ease-in-out 1s forwards";
    document.querySelector('.section2 .sub_desc_wrap:last-child p .text_line').style.animation = "text_line 0.5s ease-in-out 2s forwards";
  } else {
    document.querySelector('.section2 .sub_desc_wrap:first-child p .text_line:first-child').style.animation = "none";
    document.querySelector('.section2 .sub_desc_wrap:first-child p .text_line:last-child').style.animation = "none";
    document.querySelector('.section2 .sub_desc_wrap:last-child p .text_line').style.animation = "none";
  }

  if (scrollTop < 8100 && scrollTop > 2600) {
    document.querySelector(".header").style.display = 'flex';
    document.querySelector(".sec1").style.zIndex = '9001';
  } else {
    document.querySelector(".header").style.display = 'none';
    document.querySelector(".sec1").style.zIndex = '1000';
  }

  if (scrollTop < 18800 && scrollTop > 16000) {
    document.querySelector(".section4").style.zIndex = '9001';
  } else {
    document.querySelector(".section4").style.zIndex = '4000';
  }

  if (scrollTop < 30000 && scrollTop >= 13500) {
    document.querySelector("#nav").classList.add("change");
  } else {
    document.querySelector("#nav").classList.remove("change");
  }

  // if (scrollTop >= 35500) {
  //   document.querySelector("#nav").classList.add("change");
  // } else {
  //   document.querySelector("#nav").classList.remove("change");
  // }

  // if (scrollTop > 17900 && scrollTop < 26000) {
  //   document.querySelector(".sec5_1").style.display = 'block';
  // } else {
  //   document.querySelector(".sec5_1").style.display = 'none';
  // }


  // document.querySelector("body").addEventListener('mousemove', eyeball);

  // function eyeball() {
  //   let eye = document.querySelectorAll(".eye");
  //   eye.forEach(eye => {
  //     let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
  //     let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

  //     let radian = Math.atan2(event.pageX - x, event.pageY - y);
  //     let rot = (radian * (180 / Math.PI) * -1) + 270;
  //     eye.style.transform = "rotate(" + rot + "deg)";
  //   })
  // }

  requestAnimationFrame(scroll);
}
scroll();

function stars(count, querySelector) {
  const star_count = count;
  const cloud_wrap = document.querySelector(querySelector);
  let i = 0;

  while (i < star_count) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)

    const size = Math.random() * 4;
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = 2 + size + 'px';
    star.style.height = 2 + size + 'px';

    const duration = Math.random() * 2;

    star.style.animationDuration = 2 + duration + "s";
    star.style.animationDelay = duration + "s";

    cloud_wrap.appendChild(star);
    i++
  }
}
stars(50, ".cloud_wrap");
stars(110, ".star_bg");
