var fullname = document.getElementById('fullname');
var uname = document.getElementById('username');
var pwd = document.getElementById('password');
var span = document.getElementsByTagName('span');
var phone = document.getElementById('phone');
var dob = document.getElementById('birth-date');
var email = document.getElementById('email');
var branch = document.getElementById('branch');
var age = document.getElementById('age');
var address = document.getElementById('Caddress');
var cstate = document.getElementById('Cstate');
var university = document.getElementById('university')

function capital(element){
  let user=element.value;
  const caps = user.charAt(0).toUpperCase() + user.slice(1);
  element.value=caps;
}

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
  // else if(!regex.test(phone.value.trim()))
  // {
  //   span[9].innerText="Mobile number should contain 10  digits only!";
  //   return false;
  // }
  else if(regex.test(phone.value.trim()))
  {
      if(phone.value.length == 10)
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


function validateAddress()
{
  const regex = /^[a-zA-z0-9\s,.-]+$/;

  if(address.value.trim()== "" || address.value.trim() == null)
  {
    span[7].innerText="Blank Address!";
    address.style.border ="2px solid red";
    span[7].style.color = "red";
    return false;
  }

  else if (regex.test(address.value.trim()) ) 
  {     
    span[7].innerText = "Valid Address!";
    span[7].style.color = "green";
    address.style.border ="2px solid green";
    return true;
  }
  else
  {
    address.style.border="2px red solid";
    span[7].style.color ="red";
    address.style.border ="2px solid red";
    span[7].innerText = "Invalid Address!";
    return false;
  }
}

function validateState()
{
  const regex = /^[a-zA-z\s]+$/;

  if(cstate.value.trim()== "" || cstate.value.trim() == null)
  {
    span[6].innerText="Blank state!";
    cstate.style.border ="2px solid red";
    span[6].style.color = "red";
    return false;
  }

  else if (regex.test(cstate.value.trim()) ) 
  {     
    span[6].innerText = "Valid state!";
    span[6].style.color = "green";
    cstate.style.border ="2px solid green";
    return true;
  }
  else
  {
    cstate.style.border="2px red solid";
    span[6].style.color ="red";
    cstate.style.border ="2px solid red";
    span[6].innerText = "Invalid Address!";
    return false;
  }
}

function validateUniversity()
{
  const regex = /^[a-zA-z\s]+$/;

  if(university.value.trim()== "" || university.value.trim() == null)
  {
    span[6].innerText="Blank university name!";
    university.style.border ="2px solid red";
    span[6].style.color = "red";
    return false;
  }

  else if (regex.test(university.value.trim()) ) 
  {     
    span[6].innerText = "Valid university!";
    span[6].style.color = "green";
    university.style.border ="2px solid green";
    return true;
  }
  else
  {
    university.style.border="2px red solid";
    span[6].style.color ="red";
    university.style.border ="2px solid red";
    span[6].innerText = "Invalid University name!";
    return false;
  }
}


function validateAge()
{
const regex = /^[0-9]{2,3}$/;
// const regex2 = /^[a-zA-z]+$/;

if (age.value.trim() == "" || age.value.trim() == null) 
  {
    span[8].innerText="Blank Age!";
    age.style.border ="2px solid red";
    span[8].style.color = "red";
    return false;
  } 
  else if (regex.test(age.value.trim()) ) 
  {     
    if(age.value >= 18 && age.value < 80)
    {
    span[8].innerText = "Valid Age!";
    span[8].style.color = "green";
    age.style.border ="2px solid green";
    return true;
    }
    else if(age.value < 18)
    {
      span[8].innerText = "InValid Age!";
      span[8].style.color = "red";
      age.style.border ="2px solid red";
      return false;
    }
    else
    {
      span[8].innerText = "Too old to register!";
      span[8].style.color = "lime";
      age.style.border ="2px solid lime";
      return false;
    }
    
  }
  else
  {
    branch.style.border="2px red solid";
    span[8].style.color ="red";
    age.style.border ="2px solid red";
    span[8].innerText = "Invalid Age!";
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
    validateAge();
    validateAddress();
    validateState();
    validateUniversity();
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