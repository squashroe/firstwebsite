$(document).ready(function() {
  alert("hello-Goodbye");
  $ ('#mailList').css({'background-color': '#154', 'font-size': '200%', 'color':'white'});
});
   
function validateForm() {
      var str = "Thank you for joining us, to cofirm your details are as follows: <br>" + $('#fullname').val() + "<br/>" +
              $('#email').val();
      $('#infoDiv').html(str);
}

function confirmIt()
			{
			   alert("Thank you for your purchase");
			}

brochures = new Array;
			count = 0; 
function requestBrochures(){
  
  selectedBrochure();

  brochureString = "<p>Your shopping cart Contains:</p><table>" ; 

  for (i = 0; i < count; i++)
  {
   brochureString += "<tr><td>" + brochures[i] + "</td></tr>";
  } 
  brochureString += '</table>';

  brochureString += '<FORM NAME="confirm"><input type="button" name="confirm" value="Confirm Requirement" onClick="confirmIt()"></form>';

  // document.getElementById("#shoppingcart").innerHTML = brochureString;
  $('#shoppingcart').html(brochureString);

}

function selectedBrochure() {
  if(document.BrochureChoice.Brochure[0].checked == true)
  {	
   addBrochureToCart("Map of the city");
  }	
  if(document.BrochureChoice.Brochure[1].checked == true)
  {
   addBrochureToCart("South Downs Walks"); 
  }
  if(document.BrochureChoice.Brochure[2].checked == true)
  {
   addBrochureToCart("Local Pubs");
  }
  if(document.BrochureChoice.Brochure[3].checked == true)
  {
   addBrochureToCart("The Marina");
  }
  if(document.BrochureChoice.Brochure[4].checked == true)
  {
   addBrochureToCart("Beach Walks");
  }
  if(document.BrochureChoice.Brochure[5].checked == true)
  {
   addBrochureToCart("Hove and Beyond");
  }
  if(document.BrochureChoice.Brochure[6].checked == true)
  {
  addBrochureToCart("Brighton Pier");
  }
  if(document.BrochureChoice.Brochure[7].checked == true)
  {
  addBrochureToCart("St Peters Cathedral");
  }
  if(document.BrochureChoice.Brochure[8].checked == true)
  {
  addBrochureToCart("RaceCourse");
  }

}

function addBrochureToCart(inputStr)
			{
			   brochures[count] = inputStr; 
			   count++;    
			}

