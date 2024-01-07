


var menuLinks = document.querySelectorAll('.nav-link.dropdown-toggle');
var dropdownMenus = document.querySelectorAll('.dropdown-menu');

var delayToShow = 300; 
var delayToHide = 300; 

menuLinks.forEach(function(menuLink) {
  var dropdownMenu = menuLink.nextElementSibling;
  var showTimeout, hideTimeout;

  menuLink.addEventListener('mouseover', function() {
    clearTimeout(hideTimeout);
    showTimeout = setTimeout(function() {
      dropdownMenu.classList.add('show');
    }, delayToShow);
  });

  menuLink.addEventListener('mouseout', function() {
    clearTimeout(showTimeout);
    hideTimeout = setTimeout(function() {
      dropdownMenu.classList.remove('show');
    }, delayToHide);
  });

  dropdownMenu.addEventListener('mouseover', function() {
    clearTimeout(hideTimeout);
    showTimeout = setTimeout(function() {
      dropdownMenu.classList.add('show');
    }, delayToShow);
  });

  dropdownMenu.addEventListener('mouseout', function() {
    clearTimeout(showTimeout);
    hideTimeout = setTimeout(function() {
      dropdownMenu.classList.remove('show');
    }, delayToHide);
  });
});

