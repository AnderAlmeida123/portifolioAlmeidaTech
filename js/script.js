$(document).ready(function () {
  //progress bar
  let containerA = document.getElementById("circleA");
  let circleA = new ProgressBar.Circle(containerA, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 3000,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 55);
      circle.setText(value);
    },
  });

  let containerB = document.getElementById("circleB");
  let circleB = new ProgressBar.Circle(containerB, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 3350,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 230);
      circle.setText(value);
    },
  });

  let containerC = document.getElementById("circleC");
  let circleC = new ProgressBar.Circle(containerC, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 3650,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 88);
      circle.setText(value);
    },
  });

  let containerD = document.getElementById("circleD");
  let circleD = new ProgressBar.Circle(containerD, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 4000,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 350);
      circle.setText(value);
    },
  });

  //   carregar circulos quando chegar neles.

  let dataAreaOffset = $("#data-area").offset();
  let stop = 0;

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();
    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);
      stop = 1;
    }
  });

  // parallax

  setTimeout(function () {
    $("#data-area").parallax({
      imageSrc: "img/cidadeparallax.png",
    });
    $("#apply-area").parallax({
      imageSrc: "img/pattern.png",
    });
  }, 250);

  //   filtro dos botao clicado do portifolio-area
  $(".filter-btn").on("click", function () {
    let type = $(this).attr("id");
    let boxes = $(".project-box");

    $(".main-btn").removeClass("active");
    $(this).addClass("active");

    if (type == "dsg-btn") {
      eachBoxes("dsg", boxes);
    } else if (type == "dev-btn") {
      eachBoxes("dev", boxes);
    } else if (type == "seo-btn") {
      eachBoxes("seo", boxes);
    } else {
      eachBoxes("all", boxes);
    }
  });

  function eachBoxes(type, boxes) {
    if (type == "all") {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut("slow");
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  //   scroll

  let navBtn = $(".nav-item");

  let bannerSection = $("#mainSlider");
  let aboutSection = $("#about-area");
  let servicesSection = $("#services-area");
  let teamSection = $("#team-area");
  let portifolioSection = $("#portifolio-area");
  let contactSection = $("#contact-area");

  let scrollTo = "";

  $(navBtn).click(function () {
    let btnId = $(this).attr("id");

    console.log(btnId);

    if (btnId == "about-menu") {
      scrollTo = aboutSection;
    } else if (btnId == "services-menu") {
      scrollTo = servicesSection;
    } else if (btnId == "team-menu") {
      scrollTo = teamSection;
    } else if (btnId == "portifolio-menu") {
      scrollTo = portifolioSection;
    } else if (btnId == "contact-menu") {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(scrollTo).offset().top - 70,
      },
      1500
    );
  });
});
