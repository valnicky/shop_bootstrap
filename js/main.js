let tooltipButton = document.getElementById("tooltipButton");
let showMore = document.getElementById("showMore");
let video1 = document.getElementById("video1");

$(document).ready(function () {
  //dropdown options
  $(".dropdown-toggle").dropdown({
    offset: -90,
    flip: false,
  });

  //tooltip
  $('[data-toggle="tooltip"]').tooltip({
    delay: {
      show: 1000,
      hide: 1000,
    },
    html: true,
    placement: "bottom",
    offset: 70,
  });

  //pop over
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
    html: true,
  });

  //toast
  /*$('.toast').toast({
      delay: 5000,
      autohide: false
    });*/

  //collapse
  $(".collapse").collapse({
    toggle: true,
  });

  //carousel
  $(".carousel").carousel({
    interval: 3000,
  });

  //modal
  $(".modal").modal({
    show: false,
    backdrop: "static",
  });
});

//popovers
function viewPopovers() {
  $("#pop1").popover("toggle");
}

function showTooltips() {
  $('[data-toggle="tooltip"]').tooltip("toogle");
}

$('[data-toggle="tooltip"]').on("show.bs.tooltip", function () {
  tooltipButton.innerHTML = "Hide Tooltips";
});

$('[data-toggle="tooltip"]').on("hide.bs.tooltip", function () {
  tooltipButton.innerHTML = "Show Tooltips";
});

//let salesMessage = setInterval(toastNotify, 3000);

/*function toastNotify() {
  $('.toast').toast('show');
  
  clearInterval(salesMessage);
}*/

//collapse
function expandAll() {
  $("#collapseOne").collapse("show");
  $("#collapseTwo").collapse("show");
}

function closeAll() {
  $("#collapseOne, #collapseTwo ").collapse("hide");
}

$("#history").on("shown.bs.collapse", function () {
  showMore.innerHTML = "Show Less";
});

$("#history").on("hidden.bs.collapse", function () {
  showMore.innerHTML = "Show More";
});

//carousel
function gotoThumbnails(e) {
  $(".carousel").carousel(e);
}

function orderSlide(e) {
  $(".carousel").carousel(e);
}

$('[data-spy="scroll"]').on("activate.bs.scrollspy", function (e, obj) {
  if (obj.relatedTarget == "#section2") {
    alert("Section 2");
  }
});

video1.onpause = function () {
  $("#about1").modal("toggle");
};

function resumeVideo() {
  $("#about1").modal("toggle");
  video1.play();
}

$(".modal").on("shown.bs.madal", function (e) {
  video1.pause();
});

$(".modal").on("hidden.bs.modal", function (e) {
  video1.play();
});

 
function besmall() {
localStorage.clear();
    localStorage.setItem("text","1rem");
    let small = localStorage.getItem("text");
 let grow =  document.getElementById('grow');
  grow.style.fontSize = small;
}

function bemedium() {
   localStorage.clear();
    localStorage.setItem("text", "1.3rem");
      let medium = localStorage.getItem("text");
  let grow =  document.getElementById('grow');
  grow.style.fontSize = medium;
}

function belarge() {
    localStorage.clear();
    localStorage.setItem("text", "1.6rem");
      let large = localStorage.getItem("text");
  let grow =  document.getElementById('grow');
  grow.style.fontSize = large;
}

function getActive(elem){
let lists =  document.getElementsByClassName('nav-item');
for(let i = 0; i < lists.length; i++){
  lists[i].classList.remove('active');
}
  elem.classList.toggle('active');
}