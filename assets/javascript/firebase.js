 
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyB95HHvt9Y67FcllrvjcNvMjYd8bGJK518",
  authDomain: "fir-cruz.firebaseapp.com",
  databaseURL: "https://fir-cruz.firebaseio.com",
  projectId: "fir-cruz",
  storageBucket: "fir-cruz.appspot.com",
  messagingSenderId: "192419918937"
};
firebase.initializeApp(config);
//add event listener to btnLogin
//login stuff

document.getElementById("btnLogin").addEventListener('click', e=> {
var userEmail = document.getElementById("email2").value;
var userPass = document.getElementById("password2").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  

  // ...
});
})

  document.getElementById('signInForm').addEventListener('submit', signIn);



  function signIn(e) {
      e.preventDefault();

      document.querySelector('.alert2').style.display="block";

      setTimeout(function(){
          document.querySelector('.alert2').style.display = 'none';
          document.getElementById('id02').style.display = 'none';
        },3000);

       var modal = document.getElementById('id02');

        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        } 
        document.getElementById('signInForm').reset();
  }



  $(document).ready(function() {
     
          $("#id01").hide();
      });
      $("#signUp").click(function(){
        
          $("#id01").show();
          $("#id02").hide();
      });
  

// end of login stuff
//----------------------------------------------------------------------------
//Start of signup

document.getElementById("btnSignup").addEventListener('click', e=>{
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
   console.log(error.code)
   console.log(error.message);
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

 
   
    

  
  });
})



document.getElementById('signUpForm').addEventListener('submit', signUp);

//sign up form
function signUp(e) {
  e.preventDefault();

document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
  document.getElementById('id01').style.display = 'none';
},3000);

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
} 
// Clear form

document.getElementById('signUpForm').reset();


}


$(document).ready(function() {
 $('#id02').hide();
});
$("#logIn").click(function() {

  $('#id02').show();
  $('#id01').hide();
});

//End of signup stuff 
//-------------------------------------------------------------------------------






function logout(){
firebase.auth().signOut();
}