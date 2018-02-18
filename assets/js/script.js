window.onload = () => {
  const slideshowWidth = document.querySelector("#slideshow").offsetWidth;
  const slides = document.querySelectorAll(".slide");
  const container = document.querySelector(".slideshow-interno");
  const pages = document.querySelectorAll("#slideshow .slideshow-pagina");
  let currentSlide = 0,
    slideInterval = null;

  slides.forEach((slide, index) => {
    slide.style.width = slideshowWidth;
  });
  pages.forEach((page) => {
    page.onclick = function() {
      let slideNum = this.getAttribute("data-slide");
      goToSlide(slideNum);
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  });
  document.querySelector("#slideshow > .slideshow-interno").style.width = slideshowWidth * 4;
  document.querySelector(".botao-menu").onclick = function() {
    let target = this.getAttribute("data-target");
    document.querySelector(target).classList.toggle("visivel");
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    goToSlide(currentSlide);
  }
  function goToSlide(num) {
    currentSlide = num;
    container.style.marginLeft = -(currentSlide * slideshowWidth);
    document.querySelector(".slideshow-pagina.ativo").classList.remove("ativo");
    document.querySelector(".slideshow-pagina[data-slide='" + currentSlide + "']").classList.add("ativo");
  }

  slideInterval = setInterval(nextSlide, 5000)
}