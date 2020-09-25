$(document).ready(function () {
    //dropdown options
    $(".dropdown-toggle").dropdown({
        offset: -90,
        flip: false,
    });

    //tooltip
    $('[data-toggle="tooltip"]').tooltip({
        delay: {
            show: 2000,
            hide: 1000
        },
    });
});