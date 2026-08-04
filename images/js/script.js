// Set the current year in the footer automatically (runs on every page)
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile menu toggle (runs on every page, since every page has the same header)
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
    });
  });
}

// Contact form handling — only exists on contact.html, so we check it's there first
// NOTE: this currently only shows an alert. To actually receive emails,
// connect this form to a service like Formspree (https://formspree.io)
// or your hosting provider's built-in form handler.
const inquiryForm = document.getElementById('inquiryForm');

if (inquiryForm) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks — this form needs to be connected to an email service before it goes live. See the comment in js/script.js for options.');
    // Example of how you'd send this to Formspree once you have an endpoint:
    //
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Accept': 'application/json' },
    //   body: new FormData(inquiryForm)
    // }).then(response => {
    //   if (response.ok) {
    //     alert('Inquiry sent — we will get back to you shortly.');
    //     inquiryForm.reset();
    //   }
    // });
  });
}

// Staggered scroll-reveal for service cards (only runs if they exist on this page)
const revealCards = document.querySelectorAll('.reveal-card');

if (revealCards.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(revealCards).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 180); // each card appears 180ms after the previous one
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealCards.forEach((card) => revealObserver.observe(card));
}