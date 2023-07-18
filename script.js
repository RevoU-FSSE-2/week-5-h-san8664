var name = prompt("Enter your name");
document.getElementById("nama").innerText = name;

//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

//check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
    //display:block
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

//efek scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("nav").addClass("putih");
      $("nav img.hitam").show();
      $("nav img.putih").hide();
    } else {
      $("nav").removeClass("putih");
      $("nav img.hitam").hide();
      $("nav img.putih").show();
    }
  });
});

// IMAGE GALLERY

document.querySelectorAll(".gallery-container img").forEach((image) => {
  image.onclick = function () {
    document.querySelector(".popup-gallery").style.display = "block";
    document.querySelector(".popup-gallery img").src =
      image.getAttribute("src");
    document.querySelector("nav").style.display = "none";

    // const noScroll = function () {
    //   window.scrollTo(0, 0);
    // };

    // window.addEventListener("scroll", noScroll);
    document.body.style.overflow = "hidden";
  };
});

document.querySelector(".popup-gallery i").onclick = function () {
  document.querySelector(".popup-gallery").style.display = "none";
  document.querySelector("nav").style.display = "flex";
  document.body.style.overflow = "auto";
};
