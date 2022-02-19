const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const ImageNum = Math.floor(Math.random() * images.length);
const chosenImage = images[ImageNum];
document.body.style.color = "whitesmoke";

const bgImage = document.createElement("img");
bgImage.id = "bg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);