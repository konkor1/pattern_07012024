document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.querySelector('.image-container');
    var overlay = document.getElementById('overlay');
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    var mainImage = document.getElementById('mainImage');
    var closeModal = document.getElementById('closeModal');

    imageContainer.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalImage.src = mainImage.src;
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
  

  