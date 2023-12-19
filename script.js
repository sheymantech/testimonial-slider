"use strict";

const review = [
  {
    img: "images/img-1.jpg",
    name: "olaniyan sheyi",
    job: "web developer",
    description:
      "my name is sheyi olaniyan born by victorial omolola and iyanda mosses on april 17, thank you.",
  },
  {
    img: "images/img-2.jpg",
    name: "damilola olaniyan",
    job: "product manger",
    description:
      "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has sur",
  },
  {
    img: "images/img-3.jpg",
    name: "victoria omolola",
    job: "UI/UX Designer",
    description:
      "nd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
  },
  {
    img: "images/img-4.jpg",
    name: "emmanuel",
    job: "Data Scientist",
    description:
      "nd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
  },
];

const reviewContainer = document.querySelector(".review-wrapper");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const btnRandom = document.querySelector(".random");
let currentView = 0;
// const reviewContainer = document.querySelector('.review-wrapper')

const htmlLoad = function (currentView) {
  reviewContainer.innerHTML = "";
  let html = [];
  for (const htmlRev of review) {
    html.push(
      `
           <img src="${htmlRev.img}" alt="" />
           <div class="name"><h6>${htmlRev.name}</h6></div>
           <h5 class="job">${htmlRev.job}</h5>
           <p class="description">
             ${htmlRev.description}
             </p>
             `
    );
  }

  currentView;

  reviewContainer.insertAdjacentHTML("afterbegin", html[currentView]);
};

btnNext.addEventListener("click", function () {
  //   console.log(review);

  if (currentView > 3) currentView = 0;
  htmlLoad(currentView++);
});

btnPrev.addEventListener("click", function () {
  //   console.log(review);

  if (currentView === 0) currentView = 3;
  htmlLoad(currentView--);
});

btnRandom.addEventListener("click", function () {
  //   console.log(review);

  currentView = Math.floor(Math.random() * review.length);

  htmlLoad(currentView);
});
