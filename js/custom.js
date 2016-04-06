$(function() {  
				 
				  $('.progress_bar').each(function() {
					var progressbar = $(this),
				    progressLabel = $(this).find( ".progress-label" ),
				    progressvalue = parseInt($(this).text());
					console.log(progressvalue); 
					
				      
				  	progressbar.progressbar({
			      		value: progressvalue,
			      		max:270,
			      		change: function () { 
			      			progressLabel.text( progressbar.progressbar( "value" ) + "%" );
			      		}
			    	});

				 });//SET DEFAULT VALUES 

				

					 $('select').change(function() {
			         var val = $(this).val();
			      	 $('.test').find('.progress-selected').removeClass('progress-selected');	
			      	 	
			      	 	if (val==2) {
			         	 	$("#progressbar2").addClass( "progress-selected" )
			      	 	}

			      	 	else if (val==3) { 
			      	 		$("#progressbar3").addClass( "progress-selected" )
			      	 	}

			      	 	else { 
			      	 		$("#progressbar1").addClass( "progress-selected" )
			      	 	}
			      	});// SELECT THE PROGRESS BAR

		         	  $( "button" ).on( "click", function( event ) {

					  	 	var target = $( event.target );
					  	 	ariavaluenow = parseInt($('.progress-selected').progressbar( "value" ));
				         	
				         	if (ariavaluenow > 100){
				            $('.progress-selected').removeClass('ui-widget-header').addClass('red');
				        	}

				        	if (ariavaluenow > 0 && ariavaluenow < 100) {
				             $('.progress-selected').removeClass('red');
				        	}



				         	if ( target.is( "#neg25" ) ) {
					  			
				      			$('.progress-selected').progressbar( "value", ariavaluenow - 25 );			      		
					        }
					        else if ( target.is( "#neg10" ) ) {
					        	
				      			$('.progress-selected').progressbar( "value", ariavaluenow - 10 );
					        }

					        else if ( target.is( "#pos10" ) ) {
					        	
				      			$('.progress-selected').progressbar( "value", ariavaluenow + 10 );
					        }

					        else if ( target.is( "#pos25" ) ) {
					        	
				      			$('.progress-selected').progressbar( "value", ariavaluenow + 25 );
					        }
				       	});//
			       	  

});//MAIN FUNCTION END