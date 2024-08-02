"use strict";

const header = document.querySelector("header");
const mainHeader = document.querySelector(".main__header");
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  header.classList.toggle("active");
  mainHeader.classList.toggle("active");
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
});
