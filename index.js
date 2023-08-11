
// You can use JavaScript/jQuery to control the collapse behavior
// Here, we're toggling the "show" class to trigger the animation
$('.collapse-left').on('show.bs.collapse', function () {
  $(this).addClass('show');
});

$('.collapse-left').on('hide.bs.collapse', function () {
  $(this).removeClass('show');
});

