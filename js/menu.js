
document.querySelector(".menu").addEventListener('change', e => {
  if (e.target.checked === true) {
    document.querySelector("body").classList.add("hidden");
  }
  if (e.target.checked === false) {
    document.querySelector("body").classList.remove("hidden");
  }
});

//header menu
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