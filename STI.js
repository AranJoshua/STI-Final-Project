// Certificate data (placeholders)
const certificates = [
    {
        id: 1,
        title: "Cloud Computing Fundamentals",
        issuer: "AWS Academy",
        date: "2024-09-15",
        image: "/api/placeholder/800/600",
        aspect: "landscape",
        reflection: "This certificate marked my entry into cloud computing. Through the AWS Academy program, I gained hands-on experience with EC2, S3, and other crucial AWS services. The practical labs were particularly valuable, allowing me to deploy and manage cloud resources in a simulated environment."
    },
    {
        id: 2,
        title: "Python for Data Science",
        issuer: "Coursera",
        date: "2024-07-22",
        image: "/api/placeholder/600/800",
        aspect: "portrait",
        reflection: "Mastering Python was a game-changer for my data science journey. This course covered NumPy, Pandas, and Matplotlib, providing me with powerful tools for data manipulation and visualization. I particularly enjoyed the machine learning modules that introduced me to scikit-learn."
    },
    {
        id: 3,
        title: "Agile Scrum Master",
        issuer: "Scrum Alliance",
        date: "2024-06-30",
        image: "/api/placeholder/800/800",
        aspect: "square",
        reflection: "Becoming certified as a Scrum Master deepened my understanding of agile methodologies. The training emphasized the importance of collaboration, adaptability, and continuous improvement in software development projects."
    },
    {
        id: 4,
        title: "Cybersecurity Essentials",
        issuer: "CompTIA",
        date: "2024-05-10",
        image: "/api/placeholder/900/700",
        aspect: "landscape",
        reflection: "This certification provided a comprehensive overview of cybersecurity principles. Learning about encryption, network security, and threat mitigation strategies was crucial for understanding how to protect modern IT infrastructure."
    },
    {
        id: 5,
        title: "Full Stack Web Development",
        issuer: "FreeCodeCamp",
        date: "2024-04-20",
        image: "/api/placeholder/700/850",
        aspect: "portrait",
        reflection: "The Full Stack Web Development certification was an intensive journey through HTML, CSS, JavaScript, Node.js, and React. Building multiple projects from scratch helped cement my understanding of modern web development practices."
    },
    {
        id: 6,
        title: "Machine Learning with TensorFlow",
        issuer: "Google Developers",
        date: "2024-03-15",
        image: "/api/placeholder/850/650",
        aspect: "landscape",
        reflection: "Diving into machine learning with TensorFlow opened new possibilities. The course covered neural networks, deep learning, and various ML algorithms, giving me practical experience with real-world datasets."
    },
    {
        id: 7,
        title: "Database Administration",
        issuer: "Oracle University",
        date: "2024-02-28",
        image: "/api/placeholder/750/750",
        aspect: "square",
        reflection: "Understanding database administration at an enterprise level was challenging but rewarding. This certification covered Oracle DB architecture, performance tuning, and backup/recovery strategies."
    },
    {
        id: 8,
        title: "UI/UX Design Fundamentals",
        issuer: "Interaction Design Foundation",
        date: "2024-01-10",
        image: "/api/placeholder/800/900",
        aspect: "portrait",
        reflection: "Learning the principles of user-centered design transformed how I approach software development. The course emphasized empathy mapping, wireframing, and user testing methodologies."
    },
    {
        id: 9,
        title: "Network Security",
        issuer: "Cisco",
        date: "2023-12-15",
        image: "/api/placeholder/950/700",
        aspect: "landscape",
        reflection: "This certification deepened my understanding of network infrastructure and security. Learning about firewalls, VPNs, and intrusion detection systems was invaluable for my career in IT security."
    },
    {
        id: 10,
        title: "React Advanced Concepts",
        issuer: "Udemy",
        date: "2023-11-20",
        image: "/api/placeholder/800/800",
        aspect: "square",
        reflection: "Advanced React concepts including hooks, context API, and performance optimization were covered in this course. Building a complex application as the final project solidified my understanding."
    },
    {
        id: 11,
        title: "DevOps Professional",
        issuer: "Linux Academy",
        date: "2023-10-05",
        image: "/api/placeholder/900/650",
        aspect: "landscape",
        reflection: "This certificate marked my transition into DevOps. Learning about CI/CD pipelines, containerization with Docker, and infrastructure as code with Terraform was transformative."
    },
    {
        id: 12,
        title: "Ethical Hacking",
        issuer: "EC-Council",
        date: "2023-09-12",
        image: "/api/placeholder/650/850",
        aspect: "portrait",
        reflection: "Ethical hacking provided insights into the mindset of cyber attackers. Learning about penetration testing, vulnerability assessment, and security best practices was both challenging and exciting."
    },
    {
        id: 13,
        title: "Software Architecture",
        issuer: "Software Engineering Institute",
        date: "2023-08-25",
        image: "/api/placeholder/800/750",
        aspect: "landscape",
        reflection: "Understanding software architecture patterns and principles was crucial for designing scalable systems. The course covered microservices, event-driven architecture, and design patterns."
    },
    {
        id: 14,
        title: "Blockchain Development",
        issuer: "Blockchain Council",
        date: "2023-07-18",
        image: "/api/placeholder/850/850",
        aspect: "square",
        reflection: "Exploring blockchain technology and smart contract development opened new horizons. Working with Solidity and understanding consensus mechanisms was both challenging and rewarding."
    },
    {
        id: 15,
        title: "Project Management Professional",
        issuer: "Project Management Institute",
        date: "2023-06-30",
        image: "/api/placeholder/900/750",
        aspect: "landscape",
        reflection: "The PMP certification provided comprehensive knowledge of project management principles. Learning about risk management, stakeholder communication, and resource allocation was invaluable for managing complex IT projects."
    }
];

// DOM Elements
const certificatesGrid = document.getElementById('certificates-grid');
const modal = document.getElementById('certificate-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalImage = document.getElementById('modal-certificate-image');
const modalTitle = document.getElementById('modal-certificate-title');
const modalIssuer = document.getElementById('modal-certificate-issuer');
const modalDate = document.getElementById('modal-certificate-date');
const modalReflection = document.getElementById('modal-certificate-reflection');
const ctaButton = document.querySelector('.cta-button');

// Render certificates
function renderCertificates() {
    certificates.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certificate-card';
        card.setAttribute('data-aspect', cert.aspect);
        
        card.innerHTML = `
            <div class="certificate-image-container">
                <img src="${cert.image}" alt="${cert.title}" class="certificate-image">
            </div>
            <div class="certificate-info">
                <h3 class="certificate-title">${cert.title}</h3>
                <p class="certificate-issuer">${cert.issuer}</p>
                <p class="certificate-date">${new Date(cert.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(cert));
        certificatesGrid.appendChild(card);
    });
}

// Open modal
function openModal(certificate) {
    modalImage.src = certificate.image;
    modalImage.alt = certificate.title;
    modalTitle.textContent = certificate.title;
    modalIssuer.textContent = `Issued by: ${certificate.issuer}`;
    modalDate.textContent = `Date: ${new Date(certificate.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })}`;
    modalReflection.textContent = certificate.reflection;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Event listeners
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Smooth scroll to certificates
ctaButton.addEventListener('click', () => {
    document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
});

// Initialize
renderCertificates();

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate cards on scroll
document.querySelectorAll('.certificate-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create stars and nebula effects
    createStars();
    createNebula();
    
    // Initialize modal functionality
    initializeModals();
});

// Function to create star elements
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    // Create random stars
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random positioning
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        
        // Random size
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        const delay = Math.random() * 6;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
    
    // Add to the header background
    const headerBg = document.querySelector('.header-bg');
    if (headerBg) {
        headerBg.appendChild(starsContainer);
    }
}

// Function to create nebula effects
function createNebula() {
    const headerBg = document.querySelector('.header-bg');
    if (!headerBg) return;
    
    // Create nebula blobs
    const numNebulas = 3;
    for (let i = 0; i < numNebulas; i++) {
        const nebula = document.createElement('div');
        nebula.className = 'nebula';
        
        // Random positioning
        const x = 20 + Math.random() * 60; // Keep somewhat centered
        const y = 20 + Math.random() * 60;
        nebula.style.left = `${x}%`;
        nebula.style.top = `${y}%`;
        
        // Random size
        const size = Math.random() * 200 + 100;
        nebula.style.width = `${size}px`;
        nebula.style.height = `${size}px`;
        
        // Random color variation
        const hue = Math.random() * 30 - 15; // Variation around base purple
        nebula.style.background = `hsl(${270 + hue}, 80%, 60%)`;
        
        // Random animation delay
        const delay = Math.random() * 5;
        nebula.style.animationDelay = `${delay}s`;
        
        headerBg.appendChild(nebula);
    }
}

// Function to enhance the profile picture with orbital rings
function enhanceProfilePic() {
    const profileContainer = document.querySelector('.profile-container');
    if (!profileContainer) return;
    
    // Add glow effect
    const profileGlow = document.createElement('div');
    profileGlow.className = 'profile-glow';
    profileContainer.appendChild(profileGlow);
    
    // Add orbital rings
    const orbital = document.createElement('div');
    orbital.className = 'profile-orbital';
    profileContainer.appendChild(orbital);
    
    const orbitalOuter = document.createElement('div');
    orbitalOuter.className = 'profile-orbital-outer';
    profileContainer.appendChild(orbitalOuter);
}

// Initialize modals for certificates
function initializeModals() {
    // Get all certificate cards
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (!certificateCards.length || !modal || !closeModal) return;
    
    // Add click event to each certificate card
    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get data from card
            const title = this.querySelector('.certificate-title').textContent;
            const reflection = this.querySelector('.certificate-reflection').textContent;
            const imgSrc = this.querySelector('.certificate-img').src;
            
            // Update modal content
            document.querySelector('.modal-certificate-title').textContent = title;
            document.querySelector('.modal-certificate-reflection').textContent = reflection;
            document.querySelector('.modal-certificate-img').src = imgSrc;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
        });
    });
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Allow body scrolling again
    });
    
    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close modal when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Call enhanceProfilePic after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    enhanceProfilePic();
});

// Author's Note Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Add floating particles
    const authorsNoteContainer = document.querySelector('.authors-note-container');
    
    if (authorsNoteContainer) {
        // Add particles
        for (let i = 1; i <= 6; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle', `particle-${i}`);
            authorsNoteContainer.appendChild(particle);
        }
        
        // Add highlight text effect to important words
        const noteText = document.querySelector('.authors-note-text');
        if (noteText) {
            const wordsToHighlight = [
                'growth', 'learning', 'technology', 'journey', 
                'AI', 'cybersecurity', 'perspective',
                'emerging technologies', 'continuous'
            ];
            
            wordsToHighlight.forEach(word => {
                const paragraphs = noteText.querySelectorAll('p');
                paragraphs.forEach(p => {
                    const regex = new RegExp(`\\b${word}\\b`, 'gi');
                    p.innerHTML = p.innerHTML.replace(
                        regex, 
                        match => `<span class="highlight-text">${match}</span>`
                    );
                });
            });
        }
        
        // Add hover effect
        authorsNoteContainer.addEventListener('mousemove', function(e) {
            const containerRect = this.getBoundingClientRect();
            const x = e.clientX - containerRect.left;
            const y = e.clientY - containerRect.top;
            
            // Create subtle glow effect where mouse is
            const glowEffect = document.createElement('div');
            glowEffect.style.position = 'absolute';
            glowEffect.style.width = '150px';
            glowEffect.style.height = '150px';
            glowEffect.style.borderRadius = '50%';
            glowEffect.style.background = 'radial-gradient(circle, rgba(138, 86, 255, 0.15) 0%, rgba(138, 86, 255, 0) 70%)';
            glowEffect.style.transform = 'translate(-50%, -50%)';
            glowEffect.style.pointerEvents = 'none';
            glowEffect.style.left = `${x}px`;
            glowEffect.style.top = `${y}px`;
            glowEffect.style.zIndex = '1';
            glowEffect.classList.add('temp-glow');
            
            this.appendChild(glowEffect);
            
            // Remove old glow effects
            const glows = document.querySelectorAll('.temp-glow');
            if (glows.length > 3) {
                glows[0].remove();
            }
            
            // Remove this glow after a delay
            setTimeout(() => {
                glowEffect.remove();
            }, 1000);
        });
    }
    
    // Add scroll trigger for animation
    const authorSection = document.querySelector('.authors-note-section');
    
    if (authorSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(authorSection);
    }
});

// Add this style to your CSS
document.addEventListener('DOMContentLoaded', function() {
    // Create and append style element
    const style = document.createElement('style');
    style.textContent = `
        .authors-note-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .authors-note-section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});