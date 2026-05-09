const loadingSpinner = document.getElementById('loadingSpinner');
const topBtn = document.getElementById('topBtn');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const typingText = document.querySelector('.typing-text');
const typingTextValue = 'Happy Birthday Chairman Richard Umoh';

function hideLoader() {
  if (!loadingSpinner) return;
  loadingSpinner.classList.add('hidden');
  setTimeout(() => {
    if (loadingSpinner) {
      loadingSpinner.style.display = 'none';
    }
  }, 400);
}

window.addEventListener('load', hideLoader);

window.addEventListener('DOMContentLoaded', () => {
  if (loadingSpinner) {
    setTimeout(hideLoader, 1200);
  }

  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }

  if (typingText) {
    let index = 0;
    typingText.innerHTML = '';

    function typeEffect() {
      if (index < typingTextValue.length) {
        typingText.innerHTML += typingTextValue.charAt(index);
        index += 1;
        setTimeout(typeEffect, 80);
      }
    }

    typeEffect();
  }
});