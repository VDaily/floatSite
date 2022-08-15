class Reviews {
  constructor() {
    try {
      this.testimonial = document.querySelector(".testimonials");
      if (!this.testimonial) throw new Error("Не найден класс testimonials");
      this.switchTab = this.switchTab.bind(this);
      this.testimonial.addEventListener("click", this.switchTab);
    } catch (err) {
      console.log(err.message);
      return;
    }
  }

  switchTab(event) {
    if (!event.target.dataset.reviews) return;
    event.preventDefault();

    let arrReviews = this.testimonial.querySelectorAll(".reviews");

    if (event.target.dataset.reviews === "letter") {
      this.reviewsLetter(event, arrReviews);
    } else if (event.target.dataset.reviews === "video") {
      this.reviewsVideo(event, arrReviews);
    }
  }

  reviewsLetter(event, arrReviews) {
    event.target.parentNode.children[1].classList.remove(
      "testimonials__link_active"
    );
    event.target.classList.add("testimonials__link_active");
    arrReviews[1].classList.add("reviews_disabled");
    arrReviews[0].classList.remove("reviews_disabled");
  }
  reviewsVideo(event, arrReviews) {
    event.target.parentNode.children[0].classList.remove(
      "testimonials__link_active"
    );
    event.target.classList.add("testimonials__link_active");
    arrReviews[0].classList.add("reviews_disabled");
    arrReviews[1].classList.remove("reviews_disabled");
  }
}

new Reviews();
