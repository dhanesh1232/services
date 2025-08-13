// Pexels API key - replace with your own
const UNSPLASH_API_KEY = "your-unsplash-api-key-here";

// Fetch random dentist images from Unsplash
async function fetchDentistImages() {
  try {
    const response = await fetch(
      "https://api.unsplash.com/search/photos?query=dentist&per_page=3",
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    return data.results.map((photo) => ({
      src: {
        medium: photo.urls.regular,
      },
      alt: photo.alt_description || "Dentist image",
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

// Replace placeholder images with Pexels images
async function updateImages() {
  const images = await fetchDentistImages();
  const imgElements = document.querySelectorAll(".dental-img");

  imgElements.forEach((img, index) => {
    if (images[index]) {
      img.src = images[index].src.medium;
      img.alt = images[index].alt;
    }
  });
}

// Smooth scroll functionality
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Testimonial slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((testimonial) => (testimonial.style.display = "none"));
  testimonials[index].style.display = "block";
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Auto-advance testimonials every 4 seconds
setInterval(nextTestimonial, 4000);
showTestimonial(0);

// Contact form submission
document
  .querySelector("#contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted successfully!");
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });

// Initialize image replacement on page load
document.addEventListener("DOMContentLoaded", updateImages);
