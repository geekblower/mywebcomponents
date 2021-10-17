const $el = document.querySelector(".user-card");

// Loading finished
setTimeout(() => {
    $el.classList.remove("skeleton");
    $el
      .querySelectorAll(".hide-text")
      .torEach((el) => el.classList.remove("hide-text"));
}, 1500);