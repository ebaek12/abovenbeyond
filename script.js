// script.js

// —————————————————————————————
// TESTIMONIAL SLIDER (only if you actually have slides & arrows…)
// —————————————————————————————
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
  let currentSlide = 0;

  function showSlide(idx) {
    slides.forEach((s,i) => s.classList.toggle('active', i===idx));
  }

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  if (prev) {
    prev.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  }
  if (next) {
    next.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  }


}


// still in script.js, after the slider block

document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.cta-typing');
    if (!cta) return;
  
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cta.classList.add('start');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1   // fire as soon as 10% is visible
    });
  
    obs.observe(cta);
  });
  // back-to-top button
const btn = document.querySelector('.back-to-top');
if (btn) {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const links  = document.querySelector('.nav-links');
  
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);    // animate only once
        }
      });
    }, {
      threshold: 0.2   // fire when 20% of the section is visible
    });
  
    // observe all markers
    document.querySelectorAll('.animate-on-scroll')
      .forEach(el => observer.observe(el));
  });
  // script.js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-on-scroll')
    .forEach(el => observer.observe(el));
    document.addEventListener('DOMContentLoaded', () => {
        const els = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.1 });
        els.forEach(el => obs.observe(el));
      });
      