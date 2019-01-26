var randNum = Math.round(Math.exp(Math.random()*Math.log(100-0+1)));
		console.log(randNum);

		var userClick = "";

		

		$(document).ready(function() {

		    $('#promptUser').on('click', function(e){
				

			userClick = $('#inUserClick').val();
			console.log("User Score:" + userScore);
					
				  
			if(userScore == randNum){
			    console.log("user guess is correct");
			    alert("That's right! Play again.");
				
			    }  
				else{
				console.log("user score is incorrect");
				alert("Not quite. Try again.");
					
				}

			});
		});
		
				
				

			/*generate new random number each on button click */
        $("#Diamond").on("click", function(){
            var randNum = Math.round(Math.exp(Math.random()*Math.log(100-0+1)));
			console.log(randNum); /*(return random number to console for cheating)*/            
        })
        $("#Spade").on("click", function(){
            var randNum = Math.round(Math.exp(Math.random()*Math.log(100-0+1)));
			console.log(randNum); /*(return random number to console for cheating)*/            
        })
        $("#Heart").on("click", function(){
            var randNum = Math.round(Math.exp(Math.random()*Math.log(100-0+1)));
			console.log(randNum); /*(return random number to console for cheating)*/            
        })
        $("#Club").on("click", function(){
            var randNum = Math.round(Math.exp(Math.random()*Math.log(100-0+1)));
			console.log(randNum); /*(return random number to console for cheating)*/            
        })