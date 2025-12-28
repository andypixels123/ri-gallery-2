//TODO: Create thumbnail images, so the user can click on them and see them in a fullscreen format

const fullScreenContainer = document.getElementById("fullscreen-container");
const thumbContainer = document.getElementById("thumbnail-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
let currentImg = 0;

const imageData = [ // image data object
    {
        imageSrc: "./images/autumn-forest.jpg",
        imageAlt: "forest in autumn"
    },
    {
        imageSrc: "./images/forest-track.jpg",
        imageAlt: "misty woodland"
    },
    {
        imageSrc: "./images/mountain-lake.jpg",
        imageAlt: "mountain lake"
    },
    {
        imageSrc: "./images/sunset-lake.jpg",
        imageAlt: "lake at sunset"
    },
    {
        imageSrc: "./images/mountain-pass.jpg",
        imageAlt: "mountain pass"
    }
];

const objL = imageData.length;

function createThumbnails() { // create thumbs
    for (let i = 0; i < objL; i++) {
        const img = document.createElement("img");
        img.src = imageData[i].imageSrc;
        img.alt = imageData[i].imageAlt;
        img.className = "ri";
        img.title = imageData[i].imageAlt;
        img.addEventListener("click", () => { createFullscreenImage(i); });
        thumbContainer.appendChild(img);
    }
}

function createFullscreenImage(i) { // create full image
    fullScreenContainer.innerHTML = "";
    const fullImg = document.createElement("img");
    fullImg.src = imageData[i].imageSrc;
    fullImg.alt = imageData[i].imageAlt;
    fullImg.className = "ri";
    fullImg.ariaLabel = "alternating image";
    fullScreenContainer.appendChild(fullImg);
}

function showPrev() {
    if (currentImg === 0) { // wrap to last image in object 
        currentImg = objL;
    }
    currentImg--;
    createFullscreenImage(currentImg);
}

function showNext() {
    currentImg++;
    if (currentImg === objL) { // wrap to first image in object
        currentImg = 0;
    }
    createFullscreenImage(currentImg);
}

// 37 ArrowLeft
// 39 ArrowRight
// keydown Event // key property

document.addEventListener("keyup", (e) => {
    // if (!e.repeat) { // for 'keydown' event
    if (e) {
        // console.log(e.key);
        switch (e.key) { // match key pressed
            case "ArrowLeft": showPrev();
                break;
            case "p": showPrev();
                break;
            case "ArrowRight": showNext();
                break;
            case "n": showNext();
                break;
            case "1": currentImg = 0; createFullscreenImage(currentImg);
                break;
            case "2": currentImg = 1; createFullscreenImage(currentImg);
                break;
            case "3": currentImg = 2; createFullscreenImage(currentImg);
                break;
            case "4": currentImg = 3; createFullscreenImage(currentImg);
                break;
            case "5": currentImg = 4; createFullscreenImage(currentImg);
        }
    }
});

createThumbnails();
createFullscreenImage(currentImg);