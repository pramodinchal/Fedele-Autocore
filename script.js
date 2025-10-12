// ======================================================
// GLOBAL STYLE INJECTION
// ======================================================
const globalStyle = document.createElement("style");
globalStyle.textContent = `
.modal {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.modal.show {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
}
.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}
.modal.show .modal-content { transform: scale(1); }

.upload-area {
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.upload-area:hover, .upload-area.dragover {
  border-color: #ea580c;
  background-color: #fef7f0;
}

.faq-answer { 
  max-height: 0; 
  overflow: hidden; 
  transition: max-height 0.3s ease-out; 
}
.faq-answer.open { 
  max-height: 200px; 
}

.city-button.active {
  background-color: #1e40af !important;
  color: white !important;
  transform: translateY(-2px) scale(1.05);
}

.header { 
  transition: transform 0.3s ease; 
}

.modal-open {
  overflow: hidden;
}

@media (max-width: 768px) {
  .nav.active {
    display: flex;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background-color: #1e40af;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .nav.active .nav-link {
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
}
`;
document.head.appendChild(globalStyle);

// ======================================================
// MOBILE MENU - FIXED VERSION
// ======================================================
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("overlay");
    
    if (!isMobileMenuOpen) {
        // Open menu
        mobileMenu.classList.remove("hidden");
        overlay.classList.remove("hidden");
        setTimeout(() => {
            mobileMenu.classList.remove("translate-x-full");
            mobileMenu.classList.add("translate-x-0");
        }, 10);
        document.body.style.overflow = "hidden";
    } else {
        // Close menu
        closeMobileMenu();
    }
    
    isMobileMenuOpen = !isMobileMenuOpen;
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("overlay");
    
    // Close all dropdowns first
    document.querySelectorAll("#mobile-menu ul ul").forEach(d => {
        d.classList.add("hidden");
    });
    
    // Reset all arrows
    document.querySelectorAll("#mobile-menu button span").forEach(span => {
        span.textContent = "+";
    });
    
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    
    setTimeout(() => {
        mobileMenu.classList.add("hidden");
    }, 300);
    
    document.body.style.overflow = "";
    isMobileMenuOpen = false;
}

// Enhanced dropdown toggle for mobile with arrow rotation
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const isOpen = !dropdown.classList.contains("hidden");
    
    // Close all dropdowns first
    document.querySelectorAll("#mobile-menu ul ul").forEach(d => {
        d.classList.add("hidden");
    });
    
    // Reset all arrows to '+'
    document.querySelectorAll("#mobile-menu button span").forEach(span => {
        span.textContent = "+";
    });
    
    // Toggle the clicked dropdown
    if (!isOpen) {
        dropdown.classList.remove("hidden");
        // Change arrow to '-' for the opened dropdown
        const button = document.querySelector(`button[onclick="toggleDropdown('${id}')"]`);
        if (button) {
            const arrow = button.querySelector('span');
            if (arrow) arrow.textContent = "−";
        }
    }
}

// ======================================================
// QUOTE MODAL FUNCTIONS
// ======================================================
function openQuoteModal() {
    const modal = document.getElementById("quoteModal");
    if (!modal) return;
    
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
    document.body.classList.add("modal-open");
}

function closeQuoteModal() {
    const modal = document.getElementById("quoteModal");
    if (!modal) return;
    
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }, 300);
    
    // Reset form and uploads
    const quoteForm = document.getElementById("quoteForm");
    if (quoteForm) quoteForm.reset();
    resetFileUpload();
    
    // Hide success/error messages
    const successMsg = document.getElementById("successMessage");
    const errorMsg = document.getElementById("errorMessage");
    if (successMsg) successMsg.classList.add("hidden");
    if (errorMsg) errorMsg.classList.add("hidden");
}

// ======================================================
// FILE UPLOAD HANDLING
// ======================================================
function handleFileUpload(input) {
    const files = input.files;
    const uploadArea = document.getElementById("uploadArea");
    if (!uploadArea) return;
    
    if (files.length > 0) {
        let fileList = `
            <div class="mb-2"><i class="fas fa-check-circle text-green-600 text-2xl"></i></div>
            <p class="text-green-600 font-semibold mb-2">${files.length} file(s) selected</p>
            <div class="text-xs text-gray-600 space-y-1">
        `;
        for (let i = 0; i < Math.min(files.length, 3); i++) {
            fileList += `<div>• ${files[i].name}</div>`;
        }
        if (files.length > 3) fileList += `<div>• ... and ${files.length - 3} more</div>`;
        fileList += "</div>";
        uploadArea.innerHTML = fileList;
    }
}

function resetFileUpload() {
    const uploadArea = document.getElementById("uploadArea");
    if (uploadArea) {
        uploadArea.innerHTML = `
            <i class="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
            <p class="text-gray-600 font-medium">Click to upload CAD files, drawings, or specifications</p>
            <p class="text-xs text-gray-500 mt-2">Supported: PDF, DWG, STEP, STP, IGS, IGES, JPG, PNG (Max 10MB each)</p>
        `;
    }
}

// ======================================================
// WEB3FORMS EMAIL SUBMISSION
// ======================================================
const WEB3FORMS_ACCESS_KEY = "8c3d69c7-33b9-4688-8fcf-15355c00f7a6";

// ======================================================
// EMAILJS CONFIGURATION
// ======================================================
function sendMail(e) {
    e.preventDefault();
    
    let parms = {
        name: document.querySelector("input[name='name']")?.value || "",
        company: document.querySelector("input[name='company']")?.value || "",
        email: document.querySelector("input[name='email']")?.value || "",
        component: document.querySelector("select[name='component']")?.value || "",
        message: document.querySelector("textarea[name='message']")?.value || "",
    };

    emailjs.send("service_j5u8tlj", "template_2qg58af", parms)
        .then(() => alert("✅ Quote request sent!"))
        .catch((err) => console.error("❌ EmailJS error:", err));
}

// ======================================================
// MAIN DOMCONTENTLOADED - ALL INITIALIZATION
// ======================================================
document.addEventListener("DOMContentLoaded", function () {
    // ======================================================
    // MOBILE MENU INITIALIZATION
    // ======================================================
    const menuToggle = document.getElementById("menu-toggle");
    const overlay = document.getElementById("overlay");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener("click", closeMobileMenu);
    }

    // Close menu on escape key
    document.addEventListener("keydown", function(e) {
        if (e.key === 'Escape' && isMobileMenuOpen) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking on links
    if (mobileMenu) {
        mobileMenu.addEventListener("click", function(e) {
            if (e.target.tagName === 'A') {
                closeMobileMenu();
            }
        });
    }

    // ======================================================
    // FAQ FUNCTIONALITY
    // ======================================================
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((button) => {
        button.addEventListener("click", () => {
            const faqItem = button.parentElement;
            const faqAnswer = faqItem.querySelector(".faq-answer");
            const faqIcon = button.querySelector(".faq-icon");

            // Close all other FAQs
            document.querySelectorAll(".faq-item").forEach((item) => {
                if (item !== faqItem) {
                    const answer = item.querySelector(".faq-answer");
                    const icon = item.querySelector(".faq-icon");
                    answer.style.maxHeight = "0px";
                    if (icon) icon.textContent = "+";
                }
            });

            // Toggle the clicked FAQ
            if (faqAnswer.style.maxHeight && faqAnswer.style.maxHeight !== "0px") {
                faqAnswer.style.maxHeight = "0px";
                if (faqIcon) faqIcon.textContent = "+";
            } else {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
                if (faqIcon) faqIcon.textContent = "−";
            }
        });
    });

    // ======================================================
    // FILE UPLOAD DRAG & DROP
    // ======================================================
    const uploadArea = document.getElementById("uploadArea");
    if (uploadArea) {
        uploadArea.addEventListener("dragover", function(e) {
            e.preventDefault();
            uploadArea.classList.add("dragover");
        });
        
        uploadArea.addEventListener("dragleave", function(e) {
            e.preventDefault();
            uploadArea.classList.remove("dragover");
        });
        
        uploadArea.addEventListener("drop", function(e) {
            e.preventDefault();
            uploadArea.classList.remove("dragover");
            const files = e.dataTransfer.files;
            const fileInput = document.getElementById("fileInput");
            if (fileInput) {
                fileInput.files = files;
                handleFileUpload(fileInput);
            }
        });
    }

    // ======================================================
    // QUOTE FORM SUBMISSION (WEB3FORMS)
    // ======================================================
    const form = document.getElementById("quoteForm");
    const submitBtn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const btnLoader = document.getElementById("btnLoader");
    const successMsg = document.getElementById("successMessage");
    const errorMsg = document.getElementById("errorMessage");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            // Hide previous messages
            if (successMsg) successMsg.classList.add("hidden");
            if (errorMsg) errorMsg.classList.add("hidden");

            // Show loading state
            if (submitBtn) submitBtn.disabled = true;
            if (btnText) btnText.classList.add("hidden");
            if (btnLoader) btnLoader.classList.remove("hidden");

            const formData = new FormData(form);

            // Build clean text email
            const message = `
New CNC Machining Quote Request

👤 Name: ${formData.get("firstName")} ${formData.get("lastName")}
📧 Email: ${formData.get("email")}
📞 Phone: ${formData.get("phone") || "Not provided"}
📍 Location: ${formData.get("location") || "Not specified"}
📝 Project Description: ${formData.get("description") || "No description provided"}

-----------------------------------------
Sent from CNC Machining Website Form
            `.trim();

            const payload = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: "🧾 New CNC Machining Quote Request",
                from_name: `${formData.get("firstName")} ${formData.get("lastName")}`,
                message: message
            };

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    if (successMsg) successMsg.classList.remove("hidden");
                    form.reset();
                    resetFileUpload();
                    setTimeout(closeQuoteModal, 3000);
                } else {
                    throw new Error(result.message || "Submission failed");
                }
            } catch (err) {
                console.error("Form Error:", err);
                if (errorMsg) errorMsg.classList.remove("hidden");
            } finally {
                if (submitBtn) submitBtn.disabled = false;
                if (btnText) btnText.classList.remove("hidden");
                if (btnLoader) btnLoader.classList.add("hidden");
            }
        });
    }

    // ======================================================
    // MODAL CLOSE HANDLERS
    // ======================================================
    const quoteModal = document.getElementById("quoteModal");
    if (quoteModal) {
        quoteModal.addEventListener("click", function(e) {
            if (e.target === this) {
                closeQuoteModal();
            }
        });
    }

    // Close modal with escape key
    document.addEventListener("keydown", function(e) {
        if (e.key === 'Escape') {
            closeQuoteModal();
        }
    });

    // ======================================================
    // NAVIGATION & SCROLL EFFECTS
    // ======================================================
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // City button interactions
    const cityButtons = document.querySelectorAll('.city-button');
    cityButtons.forEach(button => {
        button.addEventListener('click', function () {
            cityButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // ======================================================
    // DESKTOP DROPDOWN HOVER LOGIC
    // ======================================================
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(drop => {
        const link = drop.querySelector(".nav-link");
        const menu = drop.querySelector(".menu");

        if (link && menu) {
            link.addEventListener("mouseenter", () => {
                dropdowns.forEach(d => {
                    const m = d.querySelector(".menu");
                    if (m) m.classList.add("hidden");
                });
                menu.classList.remove("hidden");
            });

            drop.addEventListener("mouseleave", () => {
                menu.classList.add("hidden");
            });
        }
    });

    // ======================================================
    // SMOOTH TRANSITION FIX FOR RESIZING
    // ======================================================
    window.addEventListener("resize", () => {
        document.querySelectorAll(".faq-item .faq-answer").forEach((answer) => {
            if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});

// ======================================================
// EXCEL EXPORT FUNCTIONALITY
// ======================================================
document.addEventListener("DOMContentLoaded", function() {
    const excelForm = document.getElementById('quoteForm');
    if (excelForm) {
        excelForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(e.target);
            const data = [{
                "Full Name": `${formData.get('firstName')} ${formData.get('lastName')}`,
                "Email": formData.get('email'),
                "Phone": formData.get('phone'),
                "Location": formData.get('location'),
                "Project Description": formData.get('description')
            }];

            try {
                const worksheet = XLSX.utils.json_to_sheet(data);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "Quotes");
                XLSX.writeFile(workbook, "QuoteRequests.xlsx");
                alert("Your request has been saved!");
            } catch (error) {
                console.error("Excel export error:", error);
                alert("Error saving request. Please try again.");
            }
        });
    }
});