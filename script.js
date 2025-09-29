   const globalStyle = document.createElement('style');
globalStyle.textContent = `
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: scale(0.9);
    transition: transform 0.3s ease;
}
.modal.show .modal-content {
    transform: scale(1);
}
.upload-area {
    border: 2px dashed #d1d5db;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}
.upload-area:hover,
.upload-area.dragover {
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
`;
document.head.appendChild(globalStyle);



   // Mobile Menu Functions
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('overlay');
        
        mobileMenu.classList.toggle('hidden');
        overlay.classList.toggle('hidden');
        
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.style.transform = 'translateX(0)';
        } else {
            mobileMenu.style.transform = 'translateX(100%)';
        }
    }

    function closeMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('overlay');
        
        mobileMenu.style.transform = 'translateX(100%)';
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            overlay.classList.add('hidden');
        }, 300);
    }

    function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.toggle('hidden');
    }

    // Quote Modal Functions
    function openQuoteModal() {
        const modal = document.getElementById('quoteModal');
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
         document.body.classList.add('modal-open');
    }

    function closeQuoteModal() {
        const modal = document.getElementById('quoteModal');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
           document.body.classList.remove('modal-open');
        }, 300);
        // Reset form
        document.getElementById('quoteForm').reset();
        resetFileUpload();
    }

    // File Upload Handling
    function handleFileUpload(input) {
        const files = input.files;
        const uploadArea = document.getElementById('uploadArea');
        
        if (files.length > 0) {
            let fileList = '<div class="mb-2"><i class="fas fa-check-circle text-green-600 text-2xl"></i></div>';
            fileList += '<p class="text-green-600 font-semibold mb-2">' + files.length + ' file(s) selected</p>';
            fileList += '<div class="text-xs text-gray-600 space-y-1">';
            
            for (let i = 0; i < Math.min(files.length, 3); i++) {
                fileList += '<div>• ' + files[i].name + '</div>';
            }
            
            if (files.length > 3) {
                fileList += '<div>• ... and ' + (files.length - 3) + ' more files</div>';
            }
            
            fileList += '</div>';
            uploadArea.innerHTML = fileList;
        }
    }

    function resetFileUpload() {
        const uploadArea = document.getElementById('uploadArea');
        uploadArea.innerHTML = `
            <i class="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
            <p class="text-gray-600 font-medium">Click to upload CAD files, drawings, or specifications</p>
            <p class="text-xs text-gray-500 mt-2">Supported: PDF, DWG, STEP, STP, IGS, IGES, JPG, PNG (Max 10MB each)</p>
        `;
    }

    // FAQ Functions
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize FAQ functionality
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach((question, index) => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('.faq-icon i');
                
                // Toggle current FAQ
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    icon.className = 'fas fa-plus';
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.className = 'fas fa-minus';
                }
            });
        });

        // File upload drag and drop
        const uploadArea = document.getElementById('uploadArea');
        if (uploadArea) {
            uploadArea.addEventListener('dragover', function(e) {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });
            
            uploadArea.addEventListener('dragleave', function(e) {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
            });
            
            uploadArea.addEventListener('drop', function(e) {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
                const files = e.dataTransfer.files;
                document.getElementById('fileInput').files = files;
                handleFileUpload(document.getElementById('fileInput'));
            });
        }

        // Form submission
        const quoteForm = document.getElementById('quoteForm');
        if (quoteForm) {
            quoteForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show success message
                const formData = new FormData(this);
                const firstName = formData.get('firstName');
                
                // Create success message
                const successMessage = `
                    <div class="text-center py-8">
                        <div class="mb-4">
                            <i class="fas fa-check-circle text-5xl text-green-600"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-4">Quote Request Submitted!</h3>
                        <p class="text-gray-600 mb-4">
                            Thank you ${firstName}! We've received your CNC machining quote request. 
                            Our team will review your requirements and contact you within 2-4 business hours 
                            with a detailed quote.
                        </p>
                        <div class="bg-blue-50 p-4 rounded-lg mb-4">
                            <p class="text-sm text-blue-800">
                                <strong>Next Steps:</strong><br>
                                • Technical review of your specifications<br>
                                • Material and timeline assessment<br>
                                • Detailed quote preparation<br>
                                • Direct contact from our project manager
                            </p>
                        </div>
                        <button onclick="closeQuoteModal()" class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                            Close
                        </button>
                    </div>
                `;
                
                document.querySelector('.modal-content').innerHTML = successMessage;
            });
        }

        // Close modal when clicking outside
        const quoteModal = document.getElementById('quoteModal');
        if (quoteModal) {
            quoteModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeQuoteModal();
                }
            });
        }

        // Close modal with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeQuoteModal();
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        // Close mobile menu elements
        const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
        const overlay = document.getElementById('overlay');
        
        if (closeMobileMenuBtn) {
            closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
        }
        
        if (overlay) {
            overlay.addEventListener('click', closeMobileMenu);
        }
    });

function sendMail(e) {
    e.preventDefault(); // stop form reload

    let parms = {
        name: document.querySelector("input[name='name']").value,
        company: document.querySelector("input[name='company']").value,
        email: document.querySelector("input[name='email']").value,
        component: document.querySelector("select[name='component']").value,
        message: document.querySelector("textarea[name='message']").value,
    };

    emailjs.send("service_j5u8tlj", "template_2qg58af", parms)
        .then(() => alert("✅ Quote request sent!"))
        .catch((err) => console.error("❌ EmailJS error:", err));
}



// mobile toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("translate-x-0");
    mobileMenu.classList.toggle("translate-x-full");
    overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
    closeMobileMenu();
});

function closeMobileMenu() {
    mobileMenu.classList.add("hidden", "translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    overlay.classList.add("hidden");
}

// ✅ Allow only one dropdown open at a time
function toggleDropdown(id) {
    const dropdowns = document.querySelectorAll("#mobile-menu ul ul");
    dropdowns.forEach(dropdown => {
        if (dropdown.id !== id) {
            dropdown.classList.add("hidden"); // close others
        }
    });

    document.getElementById(id).classList.toggle("hidden"); // toggle current
}
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('.nav');

    mobileMenuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
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
            const city = this.getAttribute('data-city');

            // Remove active class from all buttons
            cityButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // You can add more functionality here, like showing city-specific content
            console.log(`Selected city: ${city}`);
        });

        // Add hover effect
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Service card interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function () {
            const service = this.getAttribute('data-service');

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1)';
            }, 150);

            // You can add more functionality here, like opening a modal with service details
            console.log(`Selected service: ${service}`);
        });
    });

    // CTA Button interactions
    const ctaButtons = document.querySelectorAll('.cta-button, .btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);

            // You can add more functionality here, like opening a quote form
            console.log('Get Quote clicked');
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and city buttons for scroll animations
    const animatedElements = document.querySelectorAll('.service-card, .city-button');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero geometric shapes
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.geometric-shape');

        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Form validation (if you add a contact form later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Utility function for smooth animations
    function animateElement(element, animation) {
        element.style.animation = animation;
        element.addEventListener('animationend', function () {
            element.style.animation = '';
        }, { once: true });
    }

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll events
    const debouncedScrollHandler = debounce(function () {
        // Your scroll handling code here
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);
});

// <---------------------------Common logic for all FAQs------------------------------------------------>
document.addEventListener("DOMContentLoaded", () => {
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
                    icon.textContent = "+";
                }
            });

            // Toggle the clicked FAQ
            if (faqAnswer.style.maxHeight && faqAnswer.style.maxHeight !== "0px") {
                faqAnswer.style.maxHeight = "0px";
                faqIcon.textContent = "+";
            } else {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
                faqIcon.textContent = "−";
            }
        });
    });

    // Optional: Smooth transition fix for resizing
    window.addEventListener("resize", () => {
        document.querySelectorAll(".faq-item .faq-answer").forEach((answer) => {
            if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});


// <-------------------------nav hover logic --------------------------------->
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
    const link = drop.querySelector(".nav-link");
    const menu = drop.querySelector(".menu");

    link.addEventListener("mouseenter", () => {
        // close all dropdowns
        dropdowns.forEach(d => d.querySelector(".menu").classList.add("hidden"));
        // open this one
        menu.classList.remove("hidden");
    });

    drop.addEventListener("mouseleave", () => {
        menu.classList.add("hidden");
    });
});

//Contact Information
document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = [{
        "Full Name": formData.get('fullName'),
        "Company": formData.get('company'),
        "Email": formData.get('email'),
        "Component Type": formData.get('componentType'),
        "Project Details": formData.get('projectDetails')
    }];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Quotes");

    XLSX.writeFile(workbook, "QuoteRequests.xlsx");

    alert("Your request has been saved!");
    e.target.reset();
});


// Add CSS for active city button
const style = document.createElement('style');
style.textContent = `
    .city-button.active {
        background-color: #1e40af !important;
        color: white !important;
        transform: translateY(-2px) scale(1.05);
    }
    
    .header {
        transition: transform 0.3s ease;
    }
    
    @media (max-width: 768px) {
        .nav.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #1e40af;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .nav.active .nav-link {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav.active .nav-link:last-child {
            border-bottom: none;
        }
    }
`;
document.head.appendChild(style);
