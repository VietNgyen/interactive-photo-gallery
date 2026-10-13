function upDate(previewPic) {
    console.log("Triggered upDate event");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    var displayDiv = document.getElementById("image");
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

function setGallery() {
    console.log("Page loaded - initializing tabindex");
    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}