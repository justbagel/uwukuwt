const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const gallery = document.getElementById("cwingeGalleryScreenshots");
const max = 47;
const span = document.getElementsByClassName("close")[0];
var imgs;

span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function() {
  modal.style.display = "none";
}

modalImg.onclick = function(event) {
  event.stopPropagation();
}

for (let i = 1; i <= max; i++) {
  const imgNode = document.createElement("img");
  imgNode.src= "images/cwinge/" + i + ".png";
  imgNode.classList.add("myImg");
  gallery.appendChild(imgNode);
}

imgs = document.querySelectorAll(".myImg");

imgs.forEach(img => img.addEventListener('click', function() {
  modal.style.display = "block";
  modalImg.src = img.src;
}))