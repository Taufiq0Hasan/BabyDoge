const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    
  
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    mobileNav.classList.toggle('open');
    document.body.classList.toggle('mobile-nav-open');
  });

 
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.classList.remove('mobile-nav-open');
      });
    });
  }

 
  document.addEventListener('click', function (e) {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileNav.classList.remove('open');
      document.body.classList.remove('mobile-nav-open');
    }
  });
});


