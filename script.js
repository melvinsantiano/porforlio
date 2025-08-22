// Animate the site title on every page
const title = document.getElementById('title');

if (title) {
  const text = title.textContent;
  title.textContent = ''; // Clear original text

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = 0;
    span.style.display = 'inline-block';
    span.style.transition = 'opacity 0.3s ease';
    span.style.transitionDelay = `${index * 0.1}s`;
    title.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
    }, 50);
  });
}

// Rotating gallery for About page
const slides = document.querySelectorAll('.gallery-slide');
const caption = document.getElementById('gallery-caption');
const captions = ["ME", "I Lift", "I Code"]; // 3 slides

let current = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('prev', 'active', 'next');

    if(index === current) {
      slide.classList.add('active');
    } else if(index === (current - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } else if(index === (current + 1) % slides.length) {
      slide.classList.add('next');
    } else {
      slide.style.opacity = 0;
      slide.style.zIndex = 1;
    }
  });

  caption.textContent = captions[current];
}

// Initialize
updateSlides();

// Rotate every 3 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlides();
}, 3000);
