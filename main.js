let imagesItems = [...document.querySelectorAll(".img-wrap")];
console.log(imagesItems);
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

/* 監視対象になるとActiveを付与する */
let setItemActive = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

let options = {};

/* API */
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);
