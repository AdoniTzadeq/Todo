
// login(a,b,displayTodo());

// setTimeout(function displayTodo(){

 
//  if(a==b){

//  //direct to the main page

//   window.location.href = "F:\Full stack\case study javascript\mainpage.html";
//   return true;
// }

 

//  else{

//   return false;
//  }
// },3000);




// setTimeout(function login(a,b,myCallback){

  
//   let a= true
//   let b=true;
// myCallback(a,b);
//   //click the login button and pass the a and b values for comparison
   
// },2000);



  

validate('main','pass',anothername){
    let userformat= /(?<name>Admin)$/g
    let passformat= /(?<name>1234)/g
    
    let username = document.getElementById("main");
    let user= username.value;
    let password = document.getElementById("pass");
let passw= password.value;
let log_error = document.getElementById('log_error')

if(user.match(userformat) && passw.match(passformat)){
    log_error.innerHTML = " <p id='real'>Login successful</p>";
}
 else{
  log_error.innerHTML = " <p id='real'>Invalid login</p>";
  }
}
    

    function display(log_error){
        
         
        window.location.href = "F:\Full stack\case study javascript\mainpage.html";
    }

   