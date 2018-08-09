function requestBrochures(){
      var val = [];
      $(':checkbox:checked').each(function(i){
        val[i] = $(this).val();
      });
      return "you ordered: "

    };
    document.getElementById("shoppingcart").innerHTML = requestBrochures
    
function validateForm() {

      var str = "Thank you for joining us, to cofirm your details are as follows: <br>" + $('#fullname').val() + "<br/>" +
              $('#email').val();
      $('#infoDiv').html(str);
}

