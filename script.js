// Fungsi untuk memindah gambar pada card project
function navigateGallery(projectId, direction) {
  var project = document.getElementById(projectId);
  var images = project.querySelectorAll(".project-figure img");
  var currentImage = project.getAttribute("data-current-image");
  currentImage = parseInt(currentImage) + direction;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  } else if (currentImage >= images.length) {
    currentImage = 0;
  }

  project.setAttribute("data-current-image", currentImage);

  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[currentImage].style.display = "block";
}
