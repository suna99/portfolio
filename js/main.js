const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
const section5 = document.querySelector("#section5");
const section6 = document.querySelector("#section6");
const section7 = document.querySelector("#section7");
const section8 = document.querySelector("#section8");

const list_btn = document.querySelector("a.flip-btn");

//버튼 클릭
document.querySelectorAll(".portfolio_list ul li a").forEach(li => {
  li.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

let s = skrollr.init({
  smoothScrolling: true
});



function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //document.querySelector(".scroll").innerHTML = scrollTop;

  if (scrollTop < 1700) {
    document.querySelector(".cover").style.display = 'block';
  } else {
    document.querySelector(".cover").style.display = 'none';
  }

  if (scrollTop < 8000 && scrollTop > 1600) {
    document.querySelector(".sec1_1").style.display = 'flex';
    document.querySelector(".sec1_2").style.zIndex = '9001';
  } else {
    document.querySelector(".sec1_1").style.display = 'none';
    document.querySelector(".sec1_2").style.zIndex = '1000';
  }

  scrollTop >= 2900 ? document.querySelector("#nav").classList.add("change") : document.querySelector("#nav").classList.remove("change");

  if (scrollTop >= 8500) document.querySelector("#nav").classList.remove("change");

  if (scrollTop < 15000) {
    document.querySelector(".sec5_1").style.display = 'block';
  } else {
    document.querySelector(".sec5_1").style.display = 'none';
  }

  scrollTop >= 24520 ? document.querySelector("#nav").classList.add("change") : document.querySelector("#nav").classList.remove("change");

  //document.querySelector("body").addEventListener('mousemove', eyeball);

  // function eyeball(){
  //   const eye = document.querySelectorAll(".eye");
  //   eye.forEach( eye => {
  //     let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
  //     let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

  //     let radian = Math.atan2(event.pageX - x, event.pageY - y);
  //     let rot = (radian * (180 / Math.PI) * -1) + 270;
  //     eye.style.transform = "rotate(" + rot + "deg)";
  //   });
  // }

  requestAnimationFrame(scroll);
}
scroll();


