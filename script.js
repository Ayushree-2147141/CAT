var fullname = document.getElementById('fullname');
var uname = document.getElementById('username');
var pwd = document.getElementById('password');
var span = document.getElementsByTagName('span');
var phone = document.getElementById('phone');
var dob = document.getElementById('birth-date');
var email = document.getElementById('email');
var branch = document.getElementById('branch');

function testname(event)
{
  let code=event.which;
  if(code>47&&code<58)
  {
    span[0].innerText = "Numeric Key hit!"
    return false;
  }  
    
  else
    return true;
    
}

function testbranch(event)
{
  let code=event.which;
  if(code>47&&code<58)
  {
    span[4].innerText = "Numeric Key hit!"
    return false;
  }  
    
  else
    return true;
    
}

function testphonenumber(event)
{
  let code=event.which;
  if(code>64 && code<91)
  {
    span[9].innerText = "Alphabet hit!"
    return false;
  }  
    
  else
    return true;
    
}

function checkname()
{
  const regex = /^([a-zA-Z\s.]+)$/;
  
  if (fullname.value.trim() == "" || fullname.value.trim() == null) 
  {
    span[0].innerText="Blank Name!";
    fullname.style.border="2px red solid";
    span[0].style.color = "red";
    return false;
  } 
  if (regex.test(fullname.value.trim()) ) 
  {     
    span[0].innerText = "Valid Name!";
    span[0].style.color = "green";
    fullname.style.border= "2px green solid";
    return true;
  }
  else 
  {
    fullname.style.border="2px red solid";
    span[0].style.color ="red";
    span[0].innerText = "Invalid Name!";
    return false;
  }     
}

function validateUsername()
{
  const regex = /^([a-zA-Z0-9\.@_]+)$/;
  if(uname.value.trim() == "" || uname.value.trim() == null)
  {
    span[1].innerText = "Blank Username!";
    username.style.border = "2px red solid";
    span[1].style.color= "red";
    return false;
    
  }
  if(regex.test(uname.value.trim()))
  {
    span[1].innerText="Valid username!";
    span[1].style.color = "green";
    // username.style.border= "2px green solid";
    return true;
    
  }
  else
  {
    span[1].innerText = "Invalid Username!";
    username.style.border = "2px red solid";
    return false;
  }
  // return true;
}
 
         
function validatePassword()
{ 
var user = document.getElementById("password").value;
var user2 = document.getElementById("password");

var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{5,20})/;
if (user == "" || user == null)
{
span[2].innerText="Blank password!";
span[2].style.color = "red";
user2.style.border="3px red solid";
return false;
} 
else if(re.test(user.trim()))
{
if(user.trim().length >= 8 && user.trim().length <= 15)
{
span[2].innerText="Strong password!";
// user2.style.border = "3px green solid";
span[2].style.color="green";
return true;
}
else if(user.trim().length > 15)
{
span[2].innerText = "Too long password!";
// user2.style.border = "4px yellow solid";
span[2].style.color = "lime";
return false;
}
else
{
span[2].innerText ="Weak password!"
span[2].style.color = "blue";
return false;
}
}
else
{
span[2].innerText="Invalid Password!";
// user2.style.border = "4px green solid";
span[2].style.color = "red";
return false;
}

}


function validateEmail()
{
  const regex=/^\w+([\.-]?\w+)+@(christuniversity.in|christuniversity.com)$/;
  if(email.value.trim() == "" || email.value.trim() == null)
  {
    span[3].innerText = "Blank Email!";
    email.style.border = "2px red solid";
    span[3].style.color= "red";
    return false;
  }
  if(regex.test(email.value.trim()))
  {
    span[3].innerText = "Valid Email!";
    span[3].style.color="green";
    email.style.border="green"; 
    return true;
  }
  else 
  {
    span[3].innerText = "Invalid Email!";
    email.style.border = "2px red solid";
    return false;
  }
  // return true;
}

function validatePhone()
{
  const regex = /^([0-9])$/;
  if(phone.value.trim() == "" || phone.value.trim() == null)
  {
    span[9].innerText = "Blank Phone-number!";
    phone.style.border = "2px red solid";
    span[9].style.color= "red";
    return false;
  }
  else if(regex.test(phone.value.trim()))
  {
      if(phno.value.length == 10)
      {
        span[9].innerText = "Valid Phone-number!";
        span[9].style.color="green";
        phone.style.border="green";
        return true;
      }
      else
      {
        span[9].innerText = "Invalid Phone!";
        phone.style.border = "2px red solid";
        return false;
      }
    
  }

  else
      {
        span[9].innerText = "Invalid Phone!";
        phone.style.border = "2px red solid";
        return false;
      }

}

function validateBranch()
{
    const regex = /^[A-Za-z]{3,4}$/;
    if (branch.value.trim() == "" || branch.value.trim() == null) 
  {
    span[4].innerText="Blank Branch!";
    branch.style.border ="2px solid red";
    span[4].style.color = "red";
    return false;
  } 
  else if (regex.test(branch.value.trim()) ) 
  {     
    span[4].innerText = "Valid Branch!";
    span[4].style.color = "green";
    branch.style.border ="2px solid green";
    return true;
  }
  else
  {
    branch.style.border="2px red solid";
    span[4].style.color ="red";
    branch.style.border ="2px solid red";
    span[4].innerText = "Invalid Branch Name!";
    return false;
  }
}

function validate()
{

  if(fullname.value == "" || uname.value == "" || pwd.value == "" || email.value == "" || phone.value == "" || branch.value == "")
  {
    checkname();
    validateEmail();
    validatePassword();
    validateBranch();
    validateUsername();
    validatePhone();
  }
  else
  {
    window.open("index1.html","_parent");
    return ;
  }
}
    

localStorage.setItem("phone", phone.value);
document.getElementById("demo").innerHTML = localStorage.getItem("phone");

localStorage.setItem("email", email.value)
document.getElementById("demo1").innerHTML = localStorage.getItem("email");