const titleText = "Coffee Shop";
const paragraphText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et beatae maxime eum quos perspiciatis exercitationem minima, necessitatibus esse voluptate id maiores ipsam debitis ad, magni quod deserunt ea vero ex.";

const titleEl = document.getElementById("title");
const paragraphEl = document.getElementById("paragraph");

let titleIndex = 0;
let paragraphIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        titleEl.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 300);
    } else {
        setTimeout(typeParagraph, 500); // jeda sebelum lanjut ke paragraf
    }
}

function typeParagraph() {
    if (paragraphIndex < paragraphText.length) {
        paragraphEl.textContent += paragraphText.charAt(paragraphIndex);
        paragraphIndex++;
        setTimeout(typeParagraph, 50);
    }
}

typeTitle();