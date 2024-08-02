window.addEventListener("load", function () {
  const loader = document.querySelector(".loader--con");
  const introSection = document.querySelector(".intro--section");
  const pTag = document.querySelector(".intro--section p");
  loader.classList.add("active");
  loader.remove();
  introSection.classList.add("animate__backInDown");
  setTimeout(function () {
    pTag.classList.remove("hidden");
  }, 1500);
  pTag.classList.add("animate__backInUp");
});
