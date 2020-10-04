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
    placement: 'bottom',
    offset: 70
  });
  
  //popover
  $('[data-toggle="popover"]').popover({
      
  });
  
});
