$('.crs-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false
});
$( ".crs-slider .owl-next").html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
$( ".crs-slider .owl-prev").html('<i class="fa fa-angle-left" aria-hidden="true"></i>');



// Add Class on Shop Page

$('.page-view-1').click(function(){
    $('.pbs-boxes').removeClass('new-layout');
});
$('.page-view-2').click(function(){
    $('.pbs-boxes').addClass('new-layout');
});



 // This button will increment the value
 $('.qtyplus').click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('field');
    var currentVal = parseInt($(this).siblings('input[name=' + fieldName + ']').val());
  
    if (!isNaN(currentVal)) {
        $(this).siblings('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        (this).siblings('input[name=' + fieldName + ']').val(0);
    }
});
$(".qtyminus").click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('field');
    var currentVal = parseInt($(this).siblings('input[name=' + fieldName + ']').val());
  
    if (!isNaN(currentVal) && currentVal > 1) {
        $(this).siblings('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        $(this).siblings('input[name=' + fieldName + ']').val(0);
    }
});