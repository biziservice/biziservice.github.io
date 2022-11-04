var opacity = 0;
 var incOpacity = 1; 
 var delay = 50;
var i = 0;
 var iMax = $(".scroller").children().length; 
 function changeScroller() {
 opacity = 0;
 incOpacity = 1;
$('.scroller').css("opacity", opacity);
$(".i-scroller").each(function( index ) {
 if(index == i) { 
 $(this).css("display", "block");
 } else { 
 $(this).css("display", "none");
 }
 });
i++;
 // cek if i = max
 if(i == iMax) {
 i = 0;
 }
fadeIn();
setTimeout(changeScroller, 5000);
 }
function fadeIn() { 
 opacity = incOpacity / delay; 
 if(incOpacity <= delay) {
 $('.scroller').css("opacity", opacity); 
 setTimeout(fadeIn, 100);
 incOpacity++; 
 } 
 }
changeScroller();