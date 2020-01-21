// Navigation ACTIVE class
$(document).ready(function () {
    $('.nav-item a[href="' + document.location.pathname + '"]').parent().addClass('active');
});

$(document).ready(function () {
    if (document.location.pathname == '/' || document.location.pathname == '') {
        $('.nav-item a[href="/"]').parent().addClass('active');
    }
});

$(document).ready(function () {
    $('.dropdown-menu a[href="' + document.location.pathname + '"]').addClass('active');

    if ($('.dropdown-item').hasClass("active"))
    {
        $('.nav-item a[href="#"]').parent().addClass('active');
    }
});

$(document).ready(function () {
    $('.navbar-nav a[href="' + document.location.pathname + '"]').addClass('active');
});
