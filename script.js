// Global Variables
let isLoading = true
let currentPage = "home"
let particles = []
let animationId
const cyberGrid = null

// DOM Elements
const pageLoader = document.getElementById("pageLoader")
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const floatingParticles = document.getElementById("floatingParticles")
const cyberGridElement = document.getElementById("cyberGrid")
const contactForm = document.getElementById("contactForm")

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  // Hide loader after a short delay
  setTimeout(() => {
    hideLoader()
  }, 2000)

  // Initialize components
  initializeNavigation()
  initializeParticles()
  initializeAnimations()
  initializeContactForm()
  initializeCyberEffects()

  // Set current page
  setCurrentPage()
}

// Loader Functions
function hideLoader() {
  if (pageLoader) {
    pageLoader.classList.add("hidden")
    isLoading = false
  }
}

// Navigation Functions
function initializeNavigation() {
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMobileMenu)
  }

  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navToggle && navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      closeMobileMenu()
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

function toggleMobileMenu() {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
}

function closeMobileMenu() {
  navMenu.classList.remove("active")
  navToggle.classList.remove("active")
}

function setCurrentPage() {
  const path = window.location.pathname
  const page = path.split("/").pop().replace(".html", "") || "index"
  currentPage = page === "index" ? "home" : page

  // Update active nav link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.classList.remove("active")
    const linkPage = link.getAttribute("data-page")
    if (linkPage === currentPage || (currentPage === "home" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active")
    }
  })
}

// Particle System
function initializeParticles() {
  if (!floatingParticles) return

  createFloatingParticles()
  animateFloatingParticles()
}

function createFloatingParticles() {
  const particleCount = 30
  particles = []

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? "#00ff88" : "#00d4ff",
    })
  }

  // Create particle elements
  floatingParticles.innerHTML = ""
  particles.forEach((particle, index) => {
    const particleElement = document.createElement("div")
    particleElement.className = "floating-particle"
    particleElement.style.cssText = `
            position: absolute;
            width: ${particle.size}px;
            height: ${particle.size}px;
            background: ${particle.color};
            border-radius: 50%;
            pointer-events: none;
            left: ${particle.x}px;
            top: ${particle.y}px;
            opacity: ${particle.opacity};
            box-shadow: 0 0 ${particle.size * 2}px ${particle.color};
        `
    floatingParticles.appendChild(particleElement)
  })
}

function animateFloatingParticles() {
  const particleElements = floatingParticles.querySelectorAll(".floating-particle")

  particles.forEach((particle, index) => {
    particle.x += particle.speedX
    particle.y += particle.speedY

    // Wrap around screen
    if (particle.x > window.innerWidth) particle.x = 0
    if (particle.x < 0) particle.x = window.innerWidth
    if (particle.y > window.innerHeight) particle.y = 0
    if (particle.y < 0) particle.y = window.innerHeight

    // Update element position
    if (particleElements[index]) {
      particleElements[index].style.left = particle.x + "px"
      particleElements[index].style.top = particle.y + "px"
    }
  })

  animationId = requestAnimationFrame(animateFloatingParticles)
}

// Cyber Effects
function initializeCyberEffects() {
  // Initialize glitch effects
  initializeGlitchEffects()

  // Initialize typing effects
  initializeTypingEffects()

  // Initialize scan lines
  initializeScanLines()
}

function initializeGlitchEffects() {
  const glitchElements = document.querySelectorAll(".cyber-text, .logo-text")

  glitchElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.animation = "glitch 0.3s ease-in-out"
      setTimeout(() => {
        element.style.animation = ""
      }, 300)
    })
  })
}

function initializeTypingEffects() {
  const terminalLines = document.querySelectorAll(".terminal-line")

  terminalLines.forEach((line, index) => {
    if (line.textContent.includes("$")) {
      setTimeout(() => {
        line.style.opacity = "1"
        line.style.animation = "typewriter 1s steps(40, end)"
      }, index * 500)
    }
  })
}

function initializeScanLines() {
  const scanLineElements = document.querySelectorAll(".cyber-terminal, .vulnerability-scanner, .compliance-dashboard")

  scanLineElements.forEach((element) => {
    const scanLine = document.createElement("div")
    scanLine.className = "scan-line"
    scanLine.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #00ff88, transparent);
      animation: scanMove 3s linear infinite;
      pointer-events: none;
    `
    element.style.position = "relative"
    element.appendChild(scanLine)
  })
}

// Animation Functions
function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate")

        // Special animations for specific elements
        if (entry.target.classList.contains("stat-item")) {
          animateCounter(entry.target)
        }

        if (entry.target.classList.contains("progress-fill")) {
          animateProgressBar(entry.target)
        }
      }
    })
  }, observerOptions)

  // Observe all elements with data-aos attributes
  document.querySelectorAll("[data-aos]").forEach((el) => {
    observer.observe(el)
  })

  // Observe stat items and progress bars
  document.querySelectorAll(".stat-item, .progress-fill").forEach((el) => {
    observer.observe(el)
  })
}

function animateCounter(element) {
  const numberElement = element.querySelector(".stat-number")
  if (!numberElement) return

  const finalValue = numberElement.textContent
  const isPercentage = finalValue.includes("%")
  const numericValue = Number.parseInt(finalValue.replace(/[^\d]/g, ""))

  let currentValue = 0
  const increment = numericValue / 50
  const timer = setInterval(() => {
    currentValue += increment
    if (currentValue >= numericValue) {
      currentValue = numericValue
      clearInterval(timer)
    }

    numberElement.textContent = isPercentage
      ? Math.floor(currentValue) + "%"
      : finalValue.includes("+")
        ? Math.floor(currentValue) + "+"
        : finalValue.includes("/")
          ? "24/7"
          : Math.floor(currentValue)
  }, 50)
}

function animateProgressBar(element) {
  const targetWidth = element.style.width
  element.style.width = "0%"

  setTimeout(() => {
    element.style.transition = "width 2s ease-out"
    element.style.width = targetWidth
  }, 500)
}

// Contact Form Functions
function initializeContactForm() {
  if (!contactForm) return

  contactForm.addEventListener("submit", handleContactSubmit)

  // Add input focus effects
  const formInputs = contactForm.querySelectorAll("input, select, textarea")
  formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused")
    })

    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("focused")
    })

    // Add cyber typing effect
    if (input.type === "text" || input.type === "email") {
      input.addEventListener("input", (e) => {
        if (Math.random() > 0.95) {
          e.target.style.textShadow = "0 0 5px #00ff88"
          setTimeout(() => {
            e.target.style.textShadow = ""
          }, 100)
        }
      })
    }
  })
}

function handleContactSubmit(e) {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Validate form
  if (!validateContactForm(data)) {
    return
  }

  // Show loading state with cyber effect
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Transmitting...</span>'
  submitBtn.disabled = true
  submitBtn.style.background = "linear-gradient(135deg, #ff0066 0%, #ffaa00 100%)"

  // Simulate form submission with cyber delay
  setTimeout(() => {
    submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> <span>Message Sent</span>'
    submitBtn.style.background = "linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)"

    setTimeout(() => {
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
      submitBtn.style.background = ""
      contactForm.reset()
      showCyberNotification("Message transmitted successfully! We'll respond within 24 hours.", "success")
    }, 2000)
  }, 3000)
}

function validateContactForm(data) {
  const required = ["firstName", "lastName", "email", "service", "message"]

  for (const field of required) {
    if (!data[field] || data[field].trim() === "") {
      showCyberNotification(`ERROR: ${field.replace(/([A-Z])/g, " $1").toLowerCase()} field required`, "error")
      return false
    }
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    showCyberNotification("ERROR: Invalid email format detected", "error")
    return false
  }

  return true
}

// Utility Functions
function showCyberNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".cyber-notification")
  existingNotifications.forEach((notification) => notification.remove())

  const notification = document.createElement("div")
  notification.className = `cyber-notification cyber-notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getCyberNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `

  // Add cyber notification styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getCyberNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid ${getCyberNotificationBorder(type)};
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 0 0 20px ${getCyberNotificationGlow(type)};
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        max-width: 400px;
        animation: cyberSlideIn 0.5s ease-out;
        font-family: 'Orbitron', monospace;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.8rem;
    `

  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = "cyberSlideOut 0.5s ease-out"
      setTimeout(() => notification.remove(), 500)
    }
  }, 5000)
}

function getCyberNotificationIcon(type) {
  const icons = {
    success: "check-circle",
    error: "exclamation-triangle",
    warning: "exclamation-circle",
    info: "info-circle",
  }
  return icons[type] || "info-circle"
}

function getCyberNotificationColor(type) {
  const colors = {
    success: "linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)",
    error: "linear-gradient(135deg, #ff0066 0%, #ff3366 100%)",
    warning: "linear-gradient(135deg, #ffaa00 0%, #ff6b35 100%)",
    info: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
  }
  return colors[type] || colors.info
}

function getCyberNotificationBorder(type) {
  const colors = {
    success: "#00ff88",
    error: "#ff0066",
    warning: "#ffaa00",
    info: "#00d4ff",
  }
  return colors[type] || colors.info
}

function getCyberNotificationGlow(type) {
  const colors = {
    success: "rgba(0, 255, 136, 0.3)",
    error: "rgba(255, 0, 102, 0.3)",
    warning: "rgba(255, 170, 0, 0.3)",
    info: "rgba(0, 212, 255, 0.3)",
  }
  return colors[type] || colors.info
}

function showEmergencyContact() {
  showCyberNotification("EMERGENCY PROTOCOL ACTIVATED: Call +61 2 1234 5678", "error")

  // Add emergency flash effect
  document.body.style.animation = "emergencyFlash 0.5s ease-in-out 3"
  setTimeout(() => {
    document.body.style.animation = ""
  }, 1500)
}

// Add cyber notification animations to CSS
const cyberNotificationStyles = document.createElement("style")
cyberNotificationStyles.textContent = `
    @keyframes cyberSlideIn {
        from {
            transform: translateX(100%) rotateY(90deg);
            opacity: 0;
        }
        to {
            transform: translateX(0) rotateY(0deg);
            opacity: 1;
        }
    }
    
    @keyframes cyberSlideOut {
        from {
            transform: translateX(0) rotateY(0deg);
            opacity: 1;
        }
        to {
            transform: translateX(100%) rotateY(90deg);
            opacity: 0;
        }
    }
    
    @keyframes glitch {
        0%, 100% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
    }
    
    @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
    }
    
    @keyframes scanMove {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(400px); }
    }
    
    @keyframes emergencyFlash {
        0%, 100% { background-color: var(--background-dark); }
        50% { background-color: rgba(255, 0, 102, 0.1); }
    }
    
    .cyber-notification .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .cyber-notification .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: all 0.2s;
        font-size: 0.8rem;
    }
    
    .cyber-notification .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }
`
document.head.appendChild(cyberNotificationStyles)

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  } else {
    if (floatingParticles && particles.length > 0) {
      animateFloatingParticles()
    }
  }
})

// Handle window resize
window.addEventListener("resize", () => {
  if (floatingParticles && particles.length > 0) {
    // Recreate particles for new screen size
    createFloatingParticles()
  }
})

// Smooth page transitions with cyber effect
window.addEventListener("beforeunload", () => {
  document.body.style.opacity = "0"
  document.body.style.transform = "scale(0.95)"
  document.body.style.filter = "blur(5px)"
})

// Add cyber cursor trail effect
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.98) {
    const trail = document.createElement("div")
    trail.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: #00ff88;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      box-shadow: 0 0 10px #00ff88;
      animation: trailFade 1s ease-out forwards;
    `
    document.body.appendChild(trail)

    setTimeout(() => trail.remove(), 1000)
  }
})

// Add trail fade animation
const trailStyles = document.createElement("style")
trailStyles.textContent = `
  @keyframes trailFade {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }
`
document.head.appendChild(trailStyles)

// Initialize matrix rain effect for hero section
function initializeMatrixRain() {
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")

  canvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.1;
    z-index: 1;
  `

  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    heroSection.appendChild(canvas)

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
    const matrixArray = matrix.split("")

    const fontSize = 10
    const columns = canvas.width / fontSize

    const drops = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function drawMatrix() {
      ctx.fillStyle = "rgba(10, 10, 15, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ff88"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    setInterval(drawMatrix, 35)
  }
}

// Initialize matrix rain on page load
setTimeout(initializeMatrixRain, 1000)
