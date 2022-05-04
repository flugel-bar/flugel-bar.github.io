let i = 0;
let images = [];
let time = 3000;

images.push('img/chair.JPG');
images.push('img/feet.JPG');

function changeImg() {
    document.bg.background = images[i];

    if (i < images.length - 1) {
        i++;
    } else i = 0;

    setTimeout("changeImg()", time);
}

window.onload = changeImg;