$(document).ready(function(){
	
$("#SecondCarouselSection ol li,#second-carousel-next").click(function(e){
var currentId=$(e.currentTarget).attr("id");
$("."+currentId).trigger("click");
});

});