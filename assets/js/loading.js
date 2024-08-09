window.addEventListener("load", function () {
  const loader = document.querySelector(".loader--con");
  const introSection = document.querySelector(".intro--section");
  const pTag = document.querySelector(".intro--section .animate__animated");
  loader.classList.add("active");
  loader.remove();
  introSection.classList.add("animate__backInDown");
  setTimeout(function () {
    pTag.classList.add("animate__pulse");
  }, 1500);
});
