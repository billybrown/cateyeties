

  // This is a functions that scrolls to #{blah}link
function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top}, 'slow');
}


// after the page loads
$(window).load(function() {
    var featured_ties_length = 3;
    var featured_ties_loc = 1;

	$('#arrow-right').click(function(){
		console.log("length: " + featured_ties_length);
		console.log("loc: " + featured_ties_loc);

		$('.featured-ties li').removeClass('active');
		if (featured_ties_loc < featured_ties_length){
			featured_ties_loc++;
		} else {
			featured_ties_loc = 1;
		}
		$('.tie-' + featured_ties_loc).addClass('active');
	});

	$('#arrow-left').click(function(){
		$('.featured-ties li').removeClass('active');
		if (featured_ties_loc > 1){
			featured_ties_loc--;
		} else {
			featured_ties_loc = featured_ties_length;
		}
		$('.tie-' + featured_ties_loc).addClass('active');
	});

});



// when the window resizes and only once after it resizes
$(window).resize(function () {
});

// when the page loads
$(document).ready(function() {


		$('.site-header .scroll').click(function(e){
      	// Call the scroll function
      	e.preventDefault();
		goToByScroll($(this).attr("data"));         
	});


});
