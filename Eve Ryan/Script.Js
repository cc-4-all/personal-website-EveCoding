var img = document.getElementById ("gallery-img");
var prev = document.getElementById ("prev");
var next = document.getElementById ("next");

var images = [Languages.jpg, Science.jpg, Art.jpg, Activism.jpg, Media.jpg]

var currentimage = 0

function changeimage(e) {
if (e.target.id == "next" && currentimage !== images.length - 1)
// increment the images (in other words, go to the next one)
currentimage = currentimage + 1;
}

if (e.target.id == "prev" && currentimage !==0) {

    currentimage = currentimage - 1;
}

images.setAttribute("src", "images/" + images [currentimage])
}

prev.addEventListener("click", changeimage)
next.addEventListener("click", changeimage)

