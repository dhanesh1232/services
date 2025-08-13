// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Tab functionality for appointment modal
document.getElementById("newPatientTab").addEventListener("click", function () {
  document.getElementById("newPatientFields").classList.remove("hidden");
  document.getElementById("returningPatientFields").classList.add("hidden");
  this.classList.add("active", "text-blue-600", "border-blue-600");
  this.classList.remove("text-gray-500");
  document
    .getElementById("returningPatientTab")
    .classList.remove("active", "text-blue-600", "border-blue-600");
  document.getElementById("returningPatientTab").classList.add("text-gray-500");
});

document
  .getElementById("returningPatientTab")
  .addEventListener("click", function () {
    document.getElementById("newPatientFields").classList.add("hidden");
    document
      .getElementById("returningPatientFields")
      .classList.remove("hidden");
    this.classList.add("active", "text-blue-600", "border-blue-600");
    this.classList.remove("text-gray-500");
    document
      .getElementById("newPatientTab")
      .classList.remove("active", "text-blue-600", "border-blue-600");
    document.getElementById("newPatientTab").classList.add("text-gray-500");
  });

// Time slot selection
document.querySelectorAll(".time-slot").forEach((slot) => {
  slot.addEventListener("click", function () {
    document
      .querySelectorAll(".time-slot")
      .forEach((s) => s.classList.remove("selected"));
    this.classList.add("selected");
    document.getElementById("selectedTime").value = this.textContent;
  });
});

// Modal Functions
function openModal() {
  document.getElementById("appointmentModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("appointmentModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function openServiceModal(serviceName) {
  // In a real implementation, this would fetch service details from a database
  document.getElementById("serviceModalTitle").textContent = serviceName;

  // Sample content - in reality this would come from your CMS or database
  let serviceContent = "";
  if (serviceName === "General Dentistry") {
    serviceContent = `
    <div class="space-y-4">
      <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
           alt="General Dentistry" class="w-full h-48 object-cover rounded-lg mb-4">
      <p class="text-gray-600">Our general dentistry services focus on maintaining your oral health through preventive care and treatment of common dental issues.</p>
      
      <h4 class="font-semibold text-gray-800 mt-6 mb-2">Services Include:</h4>
      <ul class="list-disc pl-5 space-y-1 text-gray-600">
        <li>Comprehensive dental exams</li>
        <li>Professional teeth cleaning</li>
        <li>Digital X-rays</li>
        <li>Dental fillings</li>
        <li>Root canal therapy</li>
        <li>Periodontal treatment</li>
        <li>Oral cancer screening</li>
      </ul>
      
      <h4 class="font-semibold text-gray-800 mt-6 mb-2">What to Expect:</h4>
      <p class="text-gray-600">During your visit, we'll conduct a thorough examination of your teeth, gums, and mouth, discuss any concerns you have, and recommend a personalized treatment plan if needed.</p>
      
      <div class="mt-6 bg-blue-50 p-4 rounded-lg">
        <h4 class="font-medium text-blue-800 mb-2 flex items-center">
          <i class="fas fa-info-circle mr-2"></i> Pricing Information
        </h4>
        <p class="text-gray-700">Basic Exam & Cleaning: $150-$200<br>Dental Fillings: $150-$400 per tooth</p>
        <p class="text-sm text-gray-600 mt-2">*Prices may vary based on individual needs and insurance coverage.</p>
      </div>
    </div>
  `;
  } else if (serviceName === "Cosmetic Dentistry") {
    serviceContent = `
    <div class="space-y-4">
      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" 
           alt="Cosmetic Dentistry" class="w-full h-48 object-cover rounded-lg mb-4">
      <p class="text-gray-600">Transform your smile with our cosmetic dentistry services designed to enhance the appearance of your teeth while maintaining optimal oral health.</p>
      
      <h4 class="font-semibold text-gray-800 mt-6 mb-2">Services Include:</h4>
      <ul class="list-disc pl-5 space-y-1 text-gray-600">
        <li>Teeth whitening</li>
        <li>Porcelain veneers</li>
        <li>Dental bonding</li>
        <li>Smile makeovers</li>
        <li>Gum contouring</li>
        <li>Invisalign clear aligners</li>
      </ul>
      
      <h4 class="font-semibold text-gray-800 mt-6 mb-2">Before & After:</h4>
      <p class="text-gray-600">We use digital smile design technology to show you a preview of your potential results before beginning treatment.</p>
      
      <div class="mt-6 bg-blue-50 p-4 rounded-lg">
        <h4 class="font-medium text-blue-800 mb-2 flex items-center">
          <i class="fas fa-info-circle mr-2"></i> Pricing Information
        </h4>
        <p class="text-gray-700">Teeth Whitening: $300-$600<br>Porcelain Veneers: $800-$2,000 per tooth<br>Invisalign: $3,000-$8,000</p>
        <p class="text-sm text-gray-600 mt-2">*We offer financing options for cosmetic procedures.</p>
      </div>
    </div>
  `;
  } else {
    // Default content for other services
    serviceContent = `
    <div class="space-y-4">
      <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
           alt="${serviceName}" class="w-full h-48 object-cover rounded-lg mb-4">
      <p class="text-gray-600">Our ${serviceName} services are designed to provide the highest quality care using the latest dental technologies and techniques.</p>
      
      <h4 class="font-semibold text-gray-800 mt-6 mb-2">About This Service:</h4>
      <p class="text-gray-600">Please contact our office for more detailed information about our ${serviceName} services. Our team would be happy to answer any questions you may have and schedule a consultation.</p>
      
      <div class="mt-6 bg-blue-50 p-4 rounded-lg">
        <h4 class="font-medium text-blue-800 mb-2 flex items-center">
          <i class="fas fa-info-circle mr-2"></i> Get More Information
        </h4>
        <p class="text-gray-700">Call us at <a href="tel:+18005551234" class="text-blue-600">1-800-555-1234</a> or request a consultation using the button below.</p>
      </div>
    </div>
  `;
  }

  document.getElementById("serviceModalContent").innerHTML = serviceContent;
  document.getElementById("serviceModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeServiceModal() {
  document.getElementById("serviceModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function openDentistModal(dentistName) {
  // Set the dentist name in the modal title
  document.getElementById("dentistModalTitle").textContent = dentistName;

  // Sample content - in reality this would come from your CMS or database
  let dentistContent = "";
  if (dentistName === "Dr. Sarah Johnson") {
    dentistContent = `
    <div class="md:w-1/3">
      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
           alt="${dentistName}" class="w-full h-auto rounded-lg">
    </div>
    <div class="md:w-2/3">
      <h4 class="text-lg font-semibold text-gray-800 mb-2">General Dentist</h4>
      <div class="flex items-center text-yellow-400 mb-3">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <span class="text-gray-600 ml-2 text-sm">4.7 (128 reviews)</span>
      </div>
      
      <p class="text-gray-600 mb-4">Dr. Johnson has over 12 years of experience in general and cosmetic dentistry. She earned her DDS from Columbia University and is committed to providing gentle, personalized care.</p>
      
      <div class="space-y-3">
        <div class="flex items-start">
          <i class="fas fa-graduation-cap text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Education</h5>
            <p class="text-gray-600 text-sm">Columbia University School of Dental Medicine</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <i class="fas fa-certificate text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Specialties</h5>
            <p class="text-gray-600 text-sm">Preventive Dentistry, Cosmetic Dentistry, Restorative Dentistry</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <i class="fas fa-calendar-alt text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Availability</h5>
            <p class="text-gray-600 text-sm">Monday-Thursday, 9AM-6PM</p>
          </div>
        </div>
      </div>
      
      <div class="mt-6">
        <h5 class="font-medium text-gray-800 mb-2">Patient Reviews</h5>
        <div class="space-y-3">
          <div class="bg-gray-50 p-3 rounded-lg">
            <div class="flex items-center mb-1">
              <div class="flex text-yellow-400 text-sm">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <span class="text-gray-500 text-sm ml-2">- Robert T.</span>
            </div>
            <p class="text-gray-600 text-sm">"Dr. Johnson is the best dentist I've ever had. She explains everything clearly and makes sure you're comfortable."</p>
          </div>
        </div>
      </div>
    </div>
  `;
  } else if (dentistName === "Dr. Michael Chen") {
    dentistContent = `
    <div class="md:w-1/3">
      <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
           alt="${dentistName}" class="w-full h-auto rounded-lg">
    </div>
    <div class="md:w-2/3">
      <h4 class="text-lg font-semibold text-gray-800 mb-2">Orthodontist</h4>
      <div class="flex items-center text-yellow-400 mb-3">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <span class="text-gray-600 ml-2 text-sm">5.0 (96 reviews)</span>
      </div>
      
      <p class="text-gray-600 mb-4">Dr. Chen specializes in orthodontics for children, teens, and adults. He is a certified Invisalign provider and believes in creating beautiful, functional smiles.</p>
      
      <div class="space-y-3">
        <div class="flex items-start">
          <i class="fas fa-graduation-cap text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Education</h5>
            <p class="text-gray-600 text-sm">Harvard School of Dental Medicine, Orthodontic Residency</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <i class="fas fa-certificate text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Specialties</h5>
            <p class="text-gray-600 text-sm">Invisalign, Traditional Braces, Early Interceptive Treatment</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <i class="fas fa-calendar-alt text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Availability</h5>
            <p class="text-gray-600 text-sm">Tuesday-Friday, 8AM-5PM</p>
          </div>
        </div>
      </div>
    </div>
  `;
  } else {
    // Default content for other dentists
    dentistContent = `
    <div class="md:w-1/3">
      <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
           alt="${dentistName}" class="w-full h-auto rounded-lg">
    </div>
    <div class="md:w-2/3">
      <h4 class="text-lg font-semibold text-gray-800 mb-2">Pediatric Dentist</h4>
      <div class="flex items-center text-yellow-400 mb-3">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <span class="text-gray-600 ml-2 text-sm">4.9 (142 reviews)</span>
      </div>
      
      <p class="text-gray-600 mb-4">Dr. Rodriguez specializes in dental care for infants, children, and adolescents, including those with special health care needs.</p>
      
      <div class="space-y-3">
        <div class="flex items-start">
          <i class="fas fa-graduation-cap text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Education</h5>
            <p class="text-gray-600 text-sm">University of Pennsylvania School of Dental Medicine</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <i class="fas fa-certificate text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Specialties</h5>
            <p class="text-gray-600 text-sm">Pediatric Dentistry, Behavior Management, Preventive Care</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <i class="fas fa-calendar-alt text-blue-600 mt-1 mr-3"></i>
          <div>
            <h5 class="font-medium text-gray-800">Availability</h5>
            <p class="text-gray-600 text-sm">Monday-Wednesday, Friday, 9AM-4PM</p>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  document.getElementById("dentistModalContent").innerHTML = dentistContent;
  document.getElementById("dentistModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeDentistModal() {
  document.getElementById("dentistModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function openDentistProfile(dentistName) {
  openDentistModal(dentistName);
}

function openDentistsModal() {
  alert(
    "In a complete implementation, this would show a modal with all dentists and their profiles."
  );
}

function openReviewsModal() {
  alert(
    "In a complete implementation, this would show a modal with all patient reviews."
  );
}

function openFAQModal() {
  alert(
    "In a complete implementation, this would show a modal with the full FAQ section."
  );
}

function openContactModal() {
  alert("In a complete implementation, this would show a contact form modal.");
}

function showConfirmation(appointmentDetails) {
  document.getElementById("appointmentDetailsText").innerHTML =
    appointmentDetails;
  document.getElementById("confirmationModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeConfirmationModal() {
  document.getElementById("confirmationModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// FAQ toggle functionality
document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector("i");

    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  });
});

// Appointment Form handling
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const formData = new FormData(this);
    const name = formData.get("fullName") || "Patient";
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("selectedTime").value;
    const service = document.getElementById("serviceType").value;

    // Create appointment details text
    const appointmentDetails = `
  <strong>Patient:</strong> ${name}<br>
  <strong>Date:</strong> ${date}<br>
  <strong>Time:</strong> ${time}<br>
  <strong>Service:</strong> ${service}<br><br>
  We've sent a confirmation to your email with preparation instructions for your appointment.
`;

    // Show confirmation modal
    showConfirmation(appointmentDetails);

    // Close appointment modal
    closeModal();

    // Reset form
    this.reset();
  });

// Contact Form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Close modal when clicking outside
window.onclick = function (event) {
  const modals = [
    "appointmentModal",
    "serviceModal",
    "dentistModal",
    "confirmationModal",
  ];
  modals.forEach((modalId) => {
    const modal = document.getElementById(modalId);
    if (event.target === modal) {
      if (modalId === "appointmentModal") closeModal();
      if (modalId === "serviceModal") closeServiceModal();
      if (modalId === "dentistModal") closeDentistModal();
      if (modalId === "confirmationModal") closeConfirmationModal();
    }
  });
};
