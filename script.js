

$(function(){

	// PLAYER DRAGGING GALLERY

	$('.galleryPlayer').flickity({
        draggable: true,
        autoPlay: true,
        contain: true
    });

	// SMOOTH SCROLL ON CLICK

	$('a').smoothScroll({
        easing: 'swing'
      });


	// GALLERY FILTER

	$('a.allToggle').on('click',function() {
	    $('.indexItem').addClass('on').removeClass('off');
	});

	$('a.playersToggle').on('click',function() {
	    $('.players').addClass('on').removeClass('off');
	    $('.action').removeClass('on').addClass('off');
	   	$('.ice').removeClass('on').addClass('off');
	});

	$('a.actionToggle').on('click',function() {
	    $('.action').addClass('on').removeClass('off');
	    $('.players').removeClass('on').addClass('off');
	    $('.ice').removeClass('on').addClass('off');
	});

	$('a.iceToggle').on('click',function() {
	    $('.ice').addClass('on').removeClass('off');
	    $('.players').removeClass('on').addClass('off');
	    $('.action').removeClass('on').addClass('off');
	});

	// FLIP CARD GAME - RYAN C. JAVASCRIPT CLASS PROJECT

	// User hovers over tiles and clicks card they think is right

	// Once clicked, display to the user if they got it right or wrong

	// Remove the container of question and cards and show user new set of questions

	// Update the counter display at bottom to show which are wrong vs. right

	// Once hitting the end, display the results of their quiz

	let finalScore = 0;
	let userName = "";

	$(function(){
		$("form").on('submit', function(e) {
			e.preventDefault();
			userName = $('input[type=text]').val();
			$(".name-container").addClass('hide');
			$(".question-1").removeClass('hide');
		})
	});

	$(function(){ // QUESTION 1
		$('a.guess-1').on('click', function(e) {
			e.preventDefault();
			if ($(this).hasClass("guess-1a")) {
				$(".answer-1").addClass("red");
				$(".question-1").addClass('hide');
				$(".game-intro").append(`<p class="feedback">Incorrect. Loading next question...</p>`);
				setTimeout(
					function(){
						$(".question-2").removeClass('hide');
						$(".feedback").remove();
					}, 1500);

			} else if ($(this).hasClass("guess-1b")) {
				$(".answer-1").addClass("red");
				$(".question-1").addClass('hide');
				$(".game-intro").append(`<p class="feedback">Incorrect. Loading next question...</p>`);
				setTimeout(
					function(){
						$(".question-2").removeClass('hide');
						$(".feedback").remove();
					}, 1500);
			} else {
				$(".answer-1").addClass("green");
				$(".question-1").addClass('hide');
				$(".answer-counter").addClass('correct-1');
				$(".game-intro").append(`<p class="feedback">Correct! Loading next question...</p>`);
				setTimeout(
					function(){
						$(".question-2").removeClass('hide');
						$(".feedback").remove();
					}, 1500);
				finalScore = finalScore + 1;
			}
		});
	});

	$(function(){ // QUESTION 2
		$('a.guess-2').on('click', function(e) {
			e.preventDefault();
			if ($(this).hasClass("guess-2b")) {
				$(".answer-2").addClass("red");
				$(".question-2").addClass('hide');
				$(".game-intro").append(`<p class="feedback">Incorrect. Loading next question...</p>`);
				setTimeout(
					function(){
						$(".question-3").removeClass('hide');
						$(".feedback").remove();
					}, 1500);
			} else if ($(this).hasClass("guess-2c")){
				$(".answer-2").addClass("red");
				$(".question-2").addClass('hide');
				$(".game-intro").append(`<p class="feedback">Incorrect. Loading next question...</p>`);
				setTimeout(
					function(){
						$(".question-3").removeClass('hide');
						$(".feedback").remove();
					}, 1500);
			} else {
				$(".answer-2").addClass("green");
				$(".question-2").addClass('hide');
				$(".answer-counter").addClass('correct-2');
				$(".game-intro").append(`<p class="feedback">Correct! Loading next question...</p>`);
				setTimeout(
					function(){
						$(".question-3").removeClass('hide');
						$(".feedback").remove();
					}, 1500);		
				finalScore = finalScore + 1;
			}
		});
	});

	$(function(){ // QUESTION 3
		$('a.guess-3').on('click', function(e) {
			e.preventDefault();
			if($(this).hasClass("guess-3a")) {
				$(".answer-3").addClass("red");
				$(".question-3").addClass('hide');
				$(".game-intro").append(`<p class="feedback">Incorrect. Loading results...</p>`);
				setTimeout(
					function(){
						$(".score").removeClass('hide');
						$(".feedback").remove();
					}, 1500);
				$(".score").append(`<p class="tally">You got ${finalScore}/3 correct, ${userName}</p>`);
			} else if ($(this).hasClass("guess-3b")) {
				$(".answer-3").addClass("red");
				$(".question-3").addClass('hide');
				$(".game-intro").append(`<p class="feedback">Incorrect. Loading results..</p>`);
				setTimeout(
					function(){
						$(".score").removeClass('hide');
						$(".feedback").remove();
					}, 1500);
				$(".score").append(`<p class="tally">You got ${finalScore}/3 correct, ${userName}</p>`);
			} else {
				$(".answer-3").addClass("green");
				$(".question-3").addClass('hide');
				$(".answer-counter").addClass('correct-3');
				$(".game-intro").append(`<p class="feedback">Correct! Loading results...</p>`);
				setTimeout(
					function(){
						$(".score").removeClass('hide');
						$(".feedback").remove();
					}, 1500);
				finalScore = finalScore + 1;
				$(".score").append(`<p class="tally">You got ${finalScore}/3 correct, ${userName}</p>`);
			}
		});
	});
	}); // DOCUMENT READY ENDS

// Leaderboard setup

// 	const scores = [];
//     const scoresAdd = (namePlayer,scorePlayer) =>{
//         scores.push(
//             {
//                 name:namePlayer,
//                 score:scorePlayer
//             }
//                 );
//     }
  
//    for (let i =0; i<scores.length;i++) {
//        console.log(scores[i].name);
//        console.log(scores[i].score);
//    }
