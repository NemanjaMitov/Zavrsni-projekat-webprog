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


function funkc1(){
    document.getElementById("slicka").src = "./images/wp5116535.jpg";
};
function funkc2(){
    document.getElementById("slicka").src = "./wp4689040.jpg";
};
function funkc3(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp5497686.jpg";
};
function funkc4(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp4689029.jpg";
};
function funkc5(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp5083549.jpg";
};
function funkc6(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp8390843.jpg";
};
function funkc7(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp6805009.jpg";
};
function funkc8(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp5437132.jpg";
};
function funkc9(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp2745324.jpg";
};
function funkc10(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp5407911.jpg";
};
function funkc11(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp4242704.jpg";
};
function funkc12(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp2745391.jpg";
};
function funkc13(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp8390898.jpg";
};
function funkc14(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp8390909.jpg";
};
function funkc15(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp8390970.jpg";
};
function funkc16(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp8005738.jpg";
};
function funkc17(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp8391005.jpg";
};
function funkc18(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp6520063.jpg";
};
function funkc19(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp8391019.jpg";
};
function funkc20(){
    document.getElementById("slicka").src = "https://wallpapercave.com/wp/wp5348838.jpg";
};

var image = document.getElementById('');

image.addEventListener('click', function(){
    changeImage();
});

function changeImage(){
    image.src = 'https://wallpapercave.com/wp/wp5497686.jpg';
}
