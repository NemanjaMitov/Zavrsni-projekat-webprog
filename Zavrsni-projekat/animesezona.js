var deadline = new Date("Jan 3, 2023 15:37:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("demo").innerHTML = days + "d " 
+ hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


function setCookie(cookieName, cookieValue, cookieLifespan){
    let d = new Date();
    d.setTime(d.getTime() + (cookieLifespan * 24 * 60 * 60 * 1000));
    let expires = d.toUTCString();
    return document.cookie = `${cookieName}=${cookieValue};expires=${expires};path=/;SameSite=Strict;`;
}

function getCookie(cookieName){
    let name = `${cookieName}=`;
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++){
        let cookie = cookieArray[i];
        while(cookie.charAt(0) == ' '){
            cookie = cookie.substring(1);
        }
        if(cookie.indexOf(name) == 0){
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}






const card1 = document.getElementById("kartica1");
const card2 = document.getElementById("kartica2");
const card3 = document.getElementById("kartica3");
const card4 = document.getElementById("kartica4");
const card5 = document.getElementById("kartica5");
const card6 = document.getElementById("kartica6");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped');
});
card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped')
});
card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped')
});
card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped');
});
card5.addEventListener("click", function (e) {
  card5.classList.toggle('is-flipped')
});
card6.addEventListener("click", function (e) {
  card6.classList.toggle('is-flipped')
});


nesto1 = document.getElementById("btn1")
nesto1.onclick = function () {
  nesto1.classList.toggle("planned");
  if (nesto1.classList.contains('planned')) {
    nesto1.innerHTML = "&#10004; added";
    setCookie("btn11",true,14)
  }
  else{
    nesto1.innerHTML = "&#43; Plan to watch";
    setCookie("btn11",false,14)
  }
};
nesto2 = document.getElementById("btn2")
nesto2.onclick = function () {
  nesto2.classList.toggle("planned");
  if (nesto2.classList.contains('planned')) {
    nesto2.innerHTML = "&#10004; added";
    setCookie("btn22",true,14)
  }
  else{
    nesto2.innerHTML = "&#43; Plan to watch";
    setCookie("btn22",false,14)
  }

};
nesto3 = document.getElementById("btn3")
nesto3.onclick = function () {
  nesto3.classList.toggle("planned");
  if (nesto3.classList.contains('planned')) {
    nesto3.innerHTML = "&#10004; added";
    setCookie("btn33",true,14)
  }
  else{
    nesto3.innerHTML = "&#43; Plan to watch";
    setCookie("btn33",false,14)
  }

};
nesto4 = document.getElementById("btn4")
nesto4.onclick = function () {
  nesto4.classList.toggle("planned");
  if (nesto4.classList.contains('planned')) {
    nesto4.innerHTML = "&#10004; added";
    setCookie("btn44",true,14)
  }
  else{
    nesto4.innerHTML = "&#43; Plan to watch";
    setCookie("btn44",false,14)
  }
  
};
nesto5 = document.getElementById("btn5")
nesto5.onclick = function () {
  nesto5.classList.toggle("planned");
  if (nesto5.classList.contains('planned')) {
    nesto5.innerHTML = "&#10004; added";
    setCookie("btn55",true,14)
  }
  else{
    nesto5.innerHTML = "&#43; Plan to watch";
    setCookie("btn55",false,14)
  }
  
};
nesto6 = document.getElementById("btn6")
nesto6.onclick = function () {
  nesto6.classList.toggle("planned");
  if (nesto6.classList.contains('planned')) {
    nesto6.innerHTML = "&#10004; added";
    setCookie("btn66",true,14)
  }
  else{
    nesto6.innerHTML = "&#43; Plan to watch";
    setCookie("btn66",false,14)
  }
  
};

function ocitava(){
    if(getCookie("btn11") === "true"){
        nesto1.classList.add("planned");
        nesto1.innerHTML = "&#10004; added";
    }
    if(getCookie("btn22") === "true"){
        nesto2.classList.add("planned");
        nesto2.innerHTML = "&#10004; added";
    }
    if(getCookie("btn33") === "true"){
        nesto3.classList.add("planned");
        nesto3.innerHTML = "&#10004; added";
    }
    if(getCookie("btn44") === "true"){
        nesto4.classList.add("planned");
        nesto4.innerHTML = "&#10004; added";
    }
    if(getCookie("btn55") === "true"){
        nesto5.classList.add("planned");
        nesto5.innerHTML = "&#10004; added";
    }
    if(getCookie("btn66") === "true"){
        nesto6.classList.add("planned");
        nesto6.innerHTML = "&#10004; added";
    }
    
  
}






