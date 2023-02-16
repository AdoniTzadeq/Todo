  
// document.getElementById("submitBtn").addEventListener("click", display());

validate(user,passw);


function validate(user,passw) {
    // alert("Im clicked"); 

    let userformat= /(?<name>Admin)$/g
    let username = document.getElementById("main");
    let user= username.value;
     
    
    let username_error = document.getElementById('user_error')
    console.log(username.value)

   
let passformat= /(?<name>1234)$/g
let password = document.getElementById("pass");
let passw= password.value;
 

let pass_error = document.getElementById('pass_error')
let log_error = document.getElementById('log_error')
console.log(password.value)
  
//   if (user.match(userformat)){

//     username_error.innerHTML = "<p id='book'>Validated!</p>";
//     return false;


// }

//   else if(!user.match(userformat)){

//     username_error.innerHTML = " <p id='real'>Enter a valid username!</p>";
//     return true;
//   }


// if (passw.match(passformat)){

// pass_error.innerHTML = "<p id='book'>Validated!</p>";
// return false;


// }

// else if(!passw.match(passformat)){

// pass_error.innerHTML = " <p id='real'>Enter a valid password</p>";
// return true;
// }

if(!passw.match(passformat) || user.match(!userformat)){
  

  // window.location.href="\html\mainpage.html";
  // window.location.replace("\html\mainpage.html");

  log_error.innerHTML = " <p id='real'>Invalid login</p>";

  // log_error.innerHTML = "<a href='F:\Full stack\case study javascript\html\mainpage.html'> </a>;";

}
else{

  display();
}

}

function display(){

  
  log_error.innerHTML = "<a href='F:\Full stack\case study javascript\html\mainpage.html'> </a>;";



}

