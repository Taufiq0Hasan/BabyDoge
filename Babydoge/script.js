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


    