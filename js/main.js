// De Aguirres Landing Page - Main JavaScript

// ===================================
// HERO CAROUSEL
// ===================================
(function() {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.dot');
  let currentSlide = 0;
  const slideInterval = 5000; // 5 seconds

  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Auto-advance slides
  let autoPlay = setInterval(nextSlide, slideInterval);

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
      
      // Reset auto-play timer
      clearInterval(autoPlay);
      autoPlay = setInterval(nextSlide, slideInterval);
    });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
  });

  carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextSlide, slideInterval);
  });
})();

// ===================================
// MOBILE MENU
// ===================================
(function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
  const closeIcon = mobileMenuBtn?.querySelector('.close-icon');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  if (!mobileMenuBtn || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('active');

    if (isOpen) {
      // Close menu
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    } else {
      // Open menu
      mobileMenu.classList.add('active');
      document.body.classList.add('menu-open');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }
  }

  mobileMenuBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
})();

// ===================================
// NEWSLETTER FORM
// ===================================
(function() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Here you would typically send this to your backend
    console.log('Newsletter signup:', email);
    
    // Show success message
    alert('¡Gracias por suscribirte! Te mantendremos al tanto de nuestras novedades.');
    
    // Reset form
    form.reset();
  });
})();

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
(function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed nav
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
})();

// ===================================
// SCROLL ANIMATIONS
// ===================================
(function() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all main sections
  const animatedSections = document.querySelectorAll('.section-unified, .section-music, .section-musica, .section-redes');
  animatedSections.forEach(el => observer.observe(el));

  // Staggered animations for cards
  const staggerObserver = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, delay);
        delay += 120;
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Staggered animations for cards and tracks
  const staggeredElements = document.querySelectorAll('.musica-track, .redes-card, .serie-video');
  staggeredElements.forEach(el => staggerObserver.observe(el));
})();

// ===================================
// PARALLAX EFFECT
// ===================================
(function() {
  const parallaxElements = document.querySelectorAll('.hero-carousel, .unified-photo-frame, .album-artwork');

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;

        // Subtle parallax for hero
        const heroCarousel = document.querySelector('.hero-carousel');
        if (heroCarousel && scrolled < window.innerHeight) {
          heroCarousel.style.transform = `translateY(${scrolled * 0.3}px)`;
        }

        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ===================================
// MOUSE MOVE EFFECTS
// ===================================
(function() {
  const cards = document.querySelectorAll('.musica-track, .redes-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });
})();

// ===================================
// COUNTER ANIMATION FOR STATS
// ===================================
(function() {
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString() + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString() + '+';
      }
    }, 30);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
          const text = stat.textContent;
          const number = parseFloat(text.replace(/[^0-9.]/g, ''));
          if (text.includes('K')) {
            stat.textContent = '0';
            animateCounter(stat, number);
            stat.dataset.suffix = 'K+';
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);
})();

// ===================================
// SMOOTH REVEAL ON SCROLL
// ===================================
(function() {
  const revealElements = document.querySelectorAll('.unified-main-header, .musica-cta, .redes-cta');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    revealObserver.observe(el);
  });
})();

// ===================================
// FLOATING PLAY BUTTON INTERACTION
// ===================================
(function() {
  const playBtn = document.querySelector('.floating-play-btn');
  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    // Open Spotify player or trigger music playback
    window.open('https://open.spotify.com/intl-es/track/1QgCxxPGkTXZ20m6rA9VOm', '_blank');
  });
})();

// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================
(function() {
  const nav = document.querySelector('.glass-nav');
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      nav.style.background = '#D9C6A6';
      nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
      nav.style.background = '#D9C6A6';
      nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
})();

// ===================================
// LAZY LOAD IMAGES
// ===================================
(function() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
})();

// ===================================
// PREVENT LAYOUT SHIFT
// ===================================
(function() {
  // Add aspect ratio boxes to prevent layout shift during image loading
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    if (!img.complete) {
      img.style.minHeight = '200px';
      
      img.addEventListener('load', () => {
        img.style.minHeight = '';
      });
    }
  });
})();

// ===================================
// PERFORMANCE MONITORING
// ===================================
(function() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
      }, 0);
    });
  }
})();