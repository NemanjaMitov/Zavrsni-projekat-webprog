
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




function promenibr(){
    let tl = document.getElementById("radius1").value
    let tr = document.getElementById("radius2").value
    let br = document.getElementById("radius3").value
    let bl = document.getElementById("radius4").value
   let slika = document.getElementById("headshot")
   slika.style.borderTopLeftRadius = tl +"px";
   slika.style.borderTopRightRadius = tr +"px";
   slika.style.borderBottomRightRadius = br+"px";
   slika.style.borderBottomLeftRadius = bl+"px";
   document.getElementById("radius1").value = "";
   document.getElementById("radius2").value = "";
   document.getElementById("radius3").value = "";
   document.getElementById("radius4").value = "";
}