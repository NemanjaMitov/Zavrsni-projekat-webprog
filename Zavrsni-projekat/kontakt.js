const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 1)+"px; left: "+(e.pageX - 1)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


function ValidirajEmail(input) {

  var karakteri = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(karakteri)) {
    return true;
  } else {
    return false;
  }

}

function proveri(){
  let mejl = ValidirajEmail(document.getElementById("email"))
  let ime = false
  let prezime = false
  const checkbox = document.querySelector('input[type="checkbox"]');

  if(document.getElementById("ime").value != ""){
    ime = true;
  }
  if(document.getElementById("prezime").value != ""){
    prezime = true;
  }
 
  if (checkbox.checked) {
    if(Boolean(ime) == false && Boolean(prezime) == false && Boolean(mejl) == false){
      alert("Polja ime i prezime nisu unesena i format E-Mail-a nije ispravan.")
    }
    else if(Boolean(ime) == false && Boolean(prezime) == false && Boolean(mejl)){
      alert("Polja ime i prezime nisu unesena.");
    }
    else if(Boolean(ime) == false && Boolean(prezime) && Boolean(mejl) == false){
      alert("Polje ime nije uneseno i format E-Mail-a nije ispravan.");
    }
    else if(Boolean(ime) && Boolean(prezime) == false && Boolean(mejl) == false){
      alert("Polje prezime nije uneseno i format E-Mail-a nije ispravan.");
    } 
    else if(Boolean(ime) && Boolean(prezime) && Boolean(mejl) == false){
      alert("Format E-Mail-a nije ispravan.");
    } else if(Boolean(ime) && Boolean(prezime) == false && Boolean(mejl)){
      alert("Polje prezime nije uneseno.");
    }
    else if(Boolean(ime) == false && Boolean(prezime) && Boolean(mejl)){
      alert("Polje ime nije uneseno.");
    }
    else if(Boolean(ime) && Boolean(prezime) && Boolean(mejl)){
      alert("Poslali ste poruku.");
    }
  }
  else {
    alert('Niste prihvatili da posaljete poruku');
  }


}




