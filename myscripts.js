function validateEmailSubmit() { 
  /* code and learning from https://www.w3schools.com/js/js_validation.asp 
  https://stackoverflow.com/questions/44441555/how-do-i-alert-the-user-that-multiple-fields-are-left-blank-in-an-html-form-afte/44441649#44441649*/
  
    var email = document.getElementById('email');
    
    var text = "Please ensure your";
    var valid = true;
    
    if(email.value == "") {
          text+= " email ";
          valid = false;
     } 
         if(!valid){
            text+= "is filled";
            alert(text);
         }
  
        if (valid){
          alert ("Log in successful!");
        }
  
        return true;
    }


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


    
