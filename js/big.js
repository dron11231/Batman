$(document).ready(function () {
    let tb = $('.tabs-item')

tb.on('click', function(event) {
event.preventDefault();
let activeContent = $(this).attr('href');
$('.visible').toggleClass('visible');
$(activeContent).toggleClass('visible')
$('.tabs-item-active').toggleClass('tabs-item-active')
$(this).toggleClass('tabs-item-active')
});
});