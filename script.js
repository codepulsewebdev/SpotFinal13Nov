// ===========================
// 🌙 THEME TOGGLE FUNCTIONALITY
// ===========================
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

// Set light mode as default
body.classList.add('light-mode');
localStorage.setItem('theme', 'light');

// Theme switch functionality
if (themeSwitch) {
  themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
}

// ===========================
// 🎈 FLOATING BALLOONS BACKGROUND - SIMPLIFIED
// ===========================
function createFloatingBalloons() {
  const balloonWall = document.getElementById('balloonWall');
  if (!balloonWall) return;

  const colors = ['#1e90ff', '#ff6b6b', '#ffd700', '#32cd32', '#ff4500', '#9400d3'];
  
  // Create fewer balloons for better performance
  for (let i = 0; i < 40; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    const color = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.background = `radial-gradient(circle at 30% 30%, ${color}, #00000020)`;
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.width = (60 + Math.random() * 40) + "px";
    balloon.style.height = (70 + Math.random() * 40) + "px";
    balloon.style.opacity = 0.15 + Math.random() * 0.15;
    balloon.style.animationDuration = (25 + Math.random() * 25) + "s";
    balloon.style.animationDelay = Math.random() * 5 + "s";

    balloonWall.appendChild(balloon);
  }
}

// Initialize balloons
document.addEventListener('DOMContentLoaded', function() {
  createFloatingBalloons();
});


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('show');
  });
}

// ===========================
// 🖼️ IMAGE MODAL FUNCTIONALITY - FIXED
// ===========================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close-btn");

// Initialize image click events
document.addEventListener('DOMContentLoaded', function() {
  const productImages = document.querySelectorAll('.Products-Box img');
  
  productImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      openModal(this);
    });
  });

  // Also make sure close button works
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
});

function openModal(img) {
  if (!modal || !modalImg) {
    console.log('Modal elements not found');
    return;
  }
  
  modal.style.display = "block";
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  
  // Set caption from product name or alt text
  const productName = img.closest('.Products-Box')?.querySelector('.product-name')?.textContent || img.alt;
  if (captionText) {
    captionText.innerHTML = productName;
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal && modal.style.display === "block") {
    closeModal();
  }
});

// ===========================
// 📧 FORM SUBMISSION WITH WHATSAPP
// ===========================
const form = document.querySelector('form[name="customOrder"]');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Get all form values
    const itemType = document.getElementById('itemType')?.value || 'Not specified';
    const customText = document.getElementById('customText')?.value || 'No message';
    const name = document.getElementById('name')?.value || 'Not provided';
    const email = document.getElementById('email')?.value || 'Not provided';
    const phone = document.getElementById('phone')?.value || 'Not provided';

    try {
      // Construct message for WhatsApp
      let message = `🎈 Custom Order Request 🎈\n`;
      message += `Item Type: ${itemType}\n`;
      message += `Custom Message: ${customText}\n`;
      message += `Name: ${name}\n`;
      message += `Email: ${email}\n`;
      message += `Phone: ${phone}\n\n`;
      message += `Sent from Spot On Gifts website`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);

      // WhatsApp URL
      const whatsappNumber = "27713613866";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappURL, "_blank");
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}
document.querySelector('form[name="customOrder"]').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const item = document.getElementById('itemType').value;
  const message = encodeURIComponent(`Hi! I'd like to order a ${item}.\nName: ${name}`);
  window.open(`https://wa.me/27713613866?text=${message}`, '_blank');
});

// ===========================
// 🔖 FOOTER YEAR & SMOOTH SCROLL
// ===========================
const footerYear = document.getElementById('currentYear');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Spot On Gifts website loaded successfully!');
});
