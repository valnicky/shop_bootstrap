let tooltipButton = document.getElementById('tooltipButton');
let showMore = document.getElementById('showMore');

$(document).ready(function() {
    //dropdown options
    $(".dropdown-toggle").dropdown({
        "offset": -90,
        "flip": false,
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
        html: true
    });

    //toast
    /*$('.toast').toast({
      delay: 5000,
      autohide: false
    });*/

    //collapse
    $('.collapse').collapse({
        toggle: true
    });

    //carousel
    $('.carousel').carousel({
        interval: 3000
    });


});

//popovers
function viewPopovers() {
    $('#pop1').popover('toggle');
}

function showTooltips() {
    $('[data-toggle="tooltip"]').tooltip('toogle');
}

$('[data-toggle="tooltip"]').on('show.bs.tooltip', function() {
    tooltipButton.innerHTML = 'Hide Tooltips';
})

$('[data-toggle="tooltip"]').on('hide.bs.tooltip', function() {
    tooltipButton.innerHTML = 'Show Tooltips';
})

//let salesMessage = setInterval(toastNotify, 3000);

/*function toastNotify() {
  $('.toast').toast('show');
  
  clearInterval(salesMessage);
}*/

//collapse
function expandAll() {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('show');
}

function closeAll() {
    $('#collapseOne, #collapseTwo ').collapse('hide');
}

$('#history').on('shown.bs.collapse', function() {
    showMore.innerHTML = 'Show Less';
})

$('#history').on('hidden.bs.collapse', function() {
    showMore.innerHTML = 'Show More';
})

//carousel
function gotoThumbnails(e){
    $('.carousel').carousel(e);
}

function orderSlide(e){
    $('.carousel').carousel(e);
}