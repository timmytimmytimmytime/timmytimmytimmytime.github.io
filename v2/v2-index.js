// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  // Handle navigation click events
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((nav) => nav.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Get target section
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smooth scroll to section
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const setActiveNavLink = (sectionId) => {
    navLinks.forEach((link) => link.classList.remove("active"));
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  };

  const sectionsArray = Array.from(sections).filter((section) => section.id);
  let sectionPositions = [];

  const updateSectionPositions = () => {
    sectionPositions = sectionsArray
      .map((section) => ({
        id: section.id,
        top: section.getBoundingClientRect().top + window.scrollY,
      }))
      .sort((a, b) => a.top - b.top);
  };

  const handleScroll = () => {
    if (!sectionPositions.length) {
      return;
    }

    const scrollPosition = window.scrollY + window.innerHeight * 0.35;
    let currentSectionId = sectionPositions[0].id;

    for (const section of sectionPositions) {
      if (scrollPosition >= section.top) {
        currentSectionId = section.id;
      } else {
        break;
      }
    }

    setActiveNavLink(currentSectionId);
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  updateSectionPositions();
  handleScroll();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    updateSectionPositions();
    handleScroll();
  });

  // Mouse movement effect for experience and project items
  const interactiveItems = document.querySelectorAll(".project-item");

  interactiveItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Smooth fade-in animation for sections on scroll
  const fadeElements = document.querySelectorAll(".project-item");

  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  fadeElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    fadeObserver.observe(element);
  });

  // Add subtle parallax effect to the left panel
  const leftPanel = document.querySelector(".left-panel");

  if (window.innerWidth > 1024) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.1;
      leftPanel.style.transform = `translateY(${parallax}px)`;
    });
  }

  // Enhanced link hover effects
  const projectLinks = document.querySelectorAll(".project-title");
  const resumeButton = document.querySelector(".resume-button");
  const resumeCtaButton = document.querySelector(".resume-cta-button");
  const archiveButton = document.querySelector(".archive-button");

  [resumeButton, resumeCtaButton, archiveButton].forEach((button) => {
    if (button) {
      button.addEventListener("mouseenter", function () {
        if (this.classList.contains("resume-cta-button")) {
          // Already handled by CSS hover
          return;
        }
        this.style.color = "#64b5f6";
      });

      button.addEventListener("mouseleave", function () {
        if (this.classList.contains("resume-cta-button")) {
          // Already handled by CSS hover
          return;
        }
        this.style.color = "#e2e8f0";
      });
    }
  });

  // Social links hover animation
  const socialLinks = document.querySelectorAll(".social-links a");

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.1)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Typing animation for the tagline (optional enhancement)
  const tagline = document.querySelector(".tagline");
  const originalText = tagline.textContent;

  function typeWriter() {
    tagline.textContent = "";
    let i = 0;

    function type() {
      if (i < originalText.length) {
        tagline.textContent += originalText.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    }

    setTimeout(type, 1000); // Start typing after 1 second
  }

  // Uncomment the line below to enable typing animation
  // typeWriter();

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add loading animation
  document.body.style.opacity = "0";
  window.addEventListener("load", function () {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
    updateSectionPositions();
    handleScroll();
  });

  // Tech stack hover effects
  const techItems = document.querySelectorAll(".tech-list li");

  techItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.backgroundColor = "#334155";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.backgroundColor = "#1e293b";
    });
  });

  // Project image lazy loading and error handling
  const projectImages = document.querySelectorAll(".project-image img");

  projectImages.forEach((img) => {
    // Add loading state
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    // Handle loading errors gracefully
    img.addEventListener("error", function () {
      this.style.opacity = "1";
      // The onerror attribute in HTML will handle fallback
    });

    // Initial state
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease";
  });
});

function openModal(projectType = "airtype") {
  currentProject = projectType;
  var modal = null;
  if (projectType == "signlang") {
    modal = document.getElementById("demoVidModal");
    const video = modal.querySelector("video");
    video.src = "assets/sign-language-alphebet.MP4";
    video.alt = "Sign Language Experiment Demo";

    video.addEventListener("loadeddata", function () {
      video.playbackRate = 1.5;
    });

    video.play();
  } else if (projectType == "patent") {
    // modal = document.getElementById("patentModal");
    console.log("Opening patent modal");
    modal = document.getElementById("patentModal");
    console.log("Modal found:", modal);
  } else {
    modal = document.getElementById("demoGifModal");
    const img = modal.querySelector("img");

    // Set the appropriate GIF based on project type
    switch (projectType) {
      case "airtype":
        img.src = "assets/AirType-demo.gif";
        img.alt = "AirType Demo";
        break;
      case "facemapper":
        img.src = "assets/FaceMoCap-demo.gif";
        img.alt = "Face Mapper Demo";
        break;
      default:
        img.src = "assets/AirType-demo.gif";
        img.alt = "Demo";
    }
  }
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("demoVidModal").style.display = "none";
  document.getElementById("demoGifModal").style.display = "none";
  document.getElementById("patentModal").style.display = "none";
}

// Close on outside click
window.onclick = function (event) {
  const modals = ["demoVidModal", "demoGifModal", "patentModal"];
  modals.forEach((m) => {
    const modal = document.getElementById(m);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

// Add event listeners for demo GIFs
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".demo-gif").forEach((gif) => {
    gif.addEventListener("click", function () {
      const projectType = this.getAttribute("data-project");
      openModal(projectType);
    });
  });
});

// Static GIF control - put in project-items.js
document.addEventListener("DOMContentLoaded", function () {
  const demoGifs = document.querySelectorAll(".demo-gif");

  demoGifs.forEach((gif) => {
    const originalSrc = gif.src;
    const staticSrc = originalSrc.replace(".gif", "-static.jpg");

    // Start with static image
    gif.src = staticSrc;

    // Get parent card
    const card = gif.closest(".project-item");

    // Play GIF on card hover
    card.addEventListener("mouseenter", function () {
      gif.src = originalSrc;
    });

    // Stop GIF on card leave
    card.addEventListener("mouseleave", function () {
      gif.src = staticSrc;
    });

    // Click handler for modal
    gif.addEventListener("click", function () {
      const projectType = this.getAttribute("data-project");
      openModal(projectType);
    });
  });
});
