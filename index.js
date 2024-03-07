let counter = 0;
function checkClicks()
{
  counter=counter+1;
  var cvalue = document.getElementById("username").value;
  console.log("Current Counter: "+ counter);
  if (counter <= 1)
  {
     document.getElementById("count").innerHTML = "You have clicked the button: " + parseInt(counter)+ " Time!";
  }
  else
  {
    document.getElementById("count").innerHTML = "You have clicked the button: " + parseInt(counter)+ " Times!";
  }
  
  return counter;
} //End of CheckClicks Function

    function setCookie(cookieName, cookieValue, expirationDays) 
    {
        console.log("Start of setCookie Method!");
        var d = new Date();
        d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        console.log("End of setCookie Method!");
    } //End of setCookie() Function

function getCookie()
{
    //document.cookie = "username=Rushikesh Satpute";
    let cookieList = document.cookie;
    console.log("Start of getCookie Method!");
    let str = String(cookieList);
    console.log("Cookie Lenght: "+ str.length);
    if(str.length > 0)
    {
        //document.getElementById("getcookie").innerHTML = cookieList;
        document.getElementById("getcookie").innerHTML = "CookiesList : " + str;
    }
    else
    {
        document.getElementById("getcookie").innerHTML = "No Cookies Are been set! :(";
    }
    console.log("Get Cookies List: "+ cookieList);
    console.log("End of getCookie Method!");
}

function handleClick() 
{
    let cookieusername = document.getElementById("cookiename").value;
    setCookie("UserNameCookie", cookieusername, 30); // Set a cookie named "exampleCookie" with a value "cookieValue" that expires in 30 days
    alert("Cookie set successfully!");
}
