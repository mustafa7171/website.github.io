let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


// let btn = document.querySelector(".toggle-menu");
// // let ul = document.querySelector(".our-nav");
// console.log(btn);
// let ul = document.getElementById("our-nav")
// btn.onclick = function (e) {
//   ul.style.display = "flex";
//   if (e.key === "Escape") {
//     ul.style.display = "none";
//   }
// };