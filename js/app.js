console.log("hey girl");

var current_link;

$(document).ready(function(){
	$(".button-collapse").sideNav();

	$(".navbar-fixed a").click(function() {
		console.log("hey");
		if(!$(this).hasClass("active")){
			current_link = this;
			$(".section:visible").fadeOut(1300, function() { 
				$(".navbar-fixed a").removeClass("active");  
				$(current_link).addClass("active");
				var new_link = $($(current_link).attr("href"));
				new_link.fadeIn(1300);
			});
		}
		return false;
	})
});