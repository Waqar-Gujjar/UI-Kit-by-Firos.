


var btnUp= document.getElementById('arrow-up')
var btnDown= document.getElementById('arrow-down')
var btnUp1= document.getElementById('arrow-up1')
var btnDown1= document.getElementById('arrow-down1')

var imgMain = document.querySelector('.img-fluid')
var img1 = document.querySelector('.img-fluid2')
var img2 = document.querySelector('.img-fluid3')
var img3 = document.querySelector('.img-fluid4')
var img4 = document.querySelector('.img-fluid5')




if (window.innerWidth<767) {
    imgMain = document.querySelector('.img-fluid1')
}


imgMain.src = img1.src;

btnUp.onclick = moveUp;
btnDown.onclick = moveDown;
btnUp1.onclick = moveUp;
btnDown1.onclick = moveDown;

function moveUp() {
    var temp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = temp;
    imgMain.src = img1.src;
}
function moveDown() {
    var temp = img4.src;
    img4.src = img3.src;
    img3.src = img2.src;
    img2.src = img1.src;
    img1.src = temp;
    imgMain.src = img1.src;
}

