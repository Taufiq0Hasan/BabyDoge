const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Optional: Animate once
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    
    document.addEventListener('DOMContentLoaded', function () {
      const hamburger = document.getElementById('hamburger-menu');
      const mobileNav = document.getElementById('mobile-nav');
      hamburger.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
        document.body.classList.toggle('mobile-nav-open');
      });
      
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          document.body.classList.remove('mobile-nav-open');
        });
      });
    });


