// Menu burger

  // document.addEventListener('DOMContentLoaded', function() {
  //   var navbarToggler = document.querySelector('.navbar-toggler');
  //   var dropdownToggle = document.querySelector('.dropdown-toggle');
  //   var dropdownMenu = document.querySelector('.dropdown-menu');
  //   var navItems = document.querySelectorAll('.nav-item');
  //   var dropdownItems = document.querySelectorAll('.dropdown-item');

  //   navbarToggler.addEventListener('click', function() {
  //     dropdownMenu.classList.remove('dropdown-menu-open');
  //   });

  //   dropdownToggle.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     dropdownMenu.classList.toggle('dropdown-menu-open');
  //   });

  //   navItems.forEach(function(navItem) {
  //     navItem.addEventListener('click', function(event) {
  //       if (!event.target.classList.contains('dropdown-toggle') && window.innerWidth < 992) {
  //         navbarToggler.click();
  //       }
  //     });
  //   });

  //   dropdownItems.forEach(function(dropdownItem) {
  //     dropdownItem.addEventListener('click', function() {
  //       if (window.innerWidth < 992) {
  //         dropdownToggle.click();
  //         navbarToggler.click();
  //       }
  //     });
  //   });
  // });

  // ------------------------------------конец работающего кода-----------------------------------------------------


  // document.addEventListener('DOMContentLoaded', function() {
  //   var navbarToggler = document.querySelector('.navbar-toggler');
  //   var dropdownToggle = document.querySelector('.dropdown-toggle');
  //   var dropdownMenu = document.querySelector('.dropdown-menu');
  //   var navItems = document.querySelectorAll('.nav-item');
  //   var dropdownItems = document.querySelectorAll('.dropdown-item');

  //   navbarToggler.addEventListener('click', function() {
  //     dropdownMenu.classList.remove('dropdown-menu-open');
  //   });

  //   dropdownToggle.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     dropdownMenu.classList.toggle('dropdown-menu-open');
  //   });

  //   navItems.forEach(function(navItem) {
  //     navItem.addEventListener('click', function(event) {
  //       if (!event.target.classList.contains('dropdown-toggle') && window.innerWidth < 992) {
  //         navbarToggler.click();
  //       }
  //     });
  //   });

  //   dropdownItems.forEach(function(dropdownItem) {
  //     dropdownItem.addEventListener('click', function() {
  //       if (window.innerWidth < 992) {
  //         dropdownToggle.click();
  //         navbarToggler.click();
  //       }
  //     });
  //   });
  
  //   // Navbar shrink function
  //   var navbarShrink = function () {
  //     const navbarCollapsible = document.body.querySelector('#mainNav');
  //     if (!navbarCollapsible) {
  //       return;
  //     }
  //     if (window.scrollY === 0) {
  //       navbarCollapsible.classList.remove('navbar-shrink')
  //     } else {
  //       navbarCollapsible.classList.add('navbar-shrink')
  //     }
  
  //   };
  
  //   // Shrink the navbar 
  //   navbarShrink();
  
  //   // Shrink the navbar when page is scrolled
  //   document.addEventListener('scroll', navbarShrink);
  
  //   // Activate Bootstrap scrollspy on the main nav element
  //   const mainNav = document.body.querySelector('#mainNav');
  //   if (mainNav) {
  //     new bootstrap.ScrollSpy(document.body, {
  //       target: '#mainNav',
  //       offset: 74,
  //     });
  //   };
  
  //   // Collapse responsive navbar when toggler is visible
  //   const responsiveNavItems = [].slice.call(
  //     document.querySelectorAll('#navbarResponsive .nav-link')
  //   );
  //   responsiveNavItems.map(function (responsiveNavItem) {
  //     responsiveNavItem.addEventListener('click', () => {
  //       if (window.getComputedStyle(navbarToggler).display !== 'none') {
  //         navbarToggler.click();
  //       }
  //     });
  //   });
  // });
  
  // ---------------------конец сборного кода------------------------------


  document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler1 = document.querySelector('.navbar-toggler');
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var navItems = document.querySelectorAll('.nav-item');
    var dropdownItems = document.querySelectorAll('.dropdown-item');
  
    navbarToggler1.addEventListener('click', function() {
      dropdownMenu.classList.remove('dropdown-menu-open');
    });
  
    dropdownToggle.addEventListener('click', function(event) {
      event.preventDefault();
      dropdownMenu.classList.toggle('dropdown-menu-open');
    });
  
    navItems.forEach(function(navItem) {
      navItem.addEventListener('click', function(event) {
        if (!event.target.classList.contains('dropdown-toggle') && window.innerWidth < 992) {
          navbarToggler1.click();
        }
      });
    });
  
    dropdownItems.forEach(function(dropdownItem) {
      dropdownItem.addEventListener('click', function() {
        if (window.innerWidth < 992) {
          dropdownToggle.click();
          navbarToggler1.click();
        }
      });
    });
  
    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
      } else {
        navbarCollapsible.classList.add('navbar-shrink')
      }
  
    };
  
    // Shrink the navbar 
    navbarShrink();
  
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
  
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 74,
      });
    };
  
    // Collapse responsive navbar when toggler is visible
    var navbarToggler2 = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (!event.target.classList.contains('dropdown-toggle') && window.getComputedStyle(navbarToggler2).display !== 'none') {
          navbarToggler2.click();
        }
      });
    });
  });
  

  