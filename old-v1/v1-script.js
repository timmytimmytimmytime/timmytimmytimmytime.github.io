// Smooth scrolling for navigation links
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

// Add parallax effect to project cards
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, index) => {
    const rate = scrolled * -0.1;
    card.style.transform = `translateY(${rate}px)`;
  });
});

let currentProject = "";

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
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("demoVidModal").style.display = "none";
  document.getElementById("demoGifModal").style.display = "none";
}

// Close on outside click
window.onclick = function (event) {
  const modals = ["demoVidModal", "demoGifModal"];
  modals.forEach((m) => {
    const modal = document.getElementById(m);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

// function openModal(projectType = "airtype") {
//   currentProject = projectType;
//   const modal = document.getElementById("demoModal");
//   const img = modal.querySelector("img");

//   // Set the appropriate GIF based on project type
//   switch (projectType) {
//     case "airtype":
//       img.src = "assets/AirType-demo.gif";
//       img.alt = "AirType Demo";
//       break;
//     case "facemapper":
//       img.src = "assets/FaceMoCap-demo.gif";
//       img.alt = "Face Mapper Demo";
//       break;
//     default:
//       img.src = "assets/AirType-demo.gif";
//       img.alt = "Demo";
//   }

//   modal.style.display = "block";
// }

// function closeModal() {
//   document.getElementById("demoModal").style.display = "none";
// }

// // Close on outside click
// window.onclick = function (event) {
//   const modal = document.getElementById("demoModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Add event listeners for demo GIFs
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".demo-gif").forEach((gif) => {
    gif.addEventListener("click", function () {
      const projectType = this.getAttribute("data-project");
      openModal(projectType);
    });
  });
});

// Static GIF control - put in project-cards.js
document.addEventListener("DOMContentLoaded", function () {
  const demoGifs = document.querySelectorAll(".demo-gif");

  demoGifs.forEach((gif) => {
    const originalSrc = gif.src;
    const staticSrc = originalSrc.replace(".gif", "-static.jpg");

    // Start with static image
    gif.src = staticSrc;

    // Get parent card
    const card = gif.closest(".project-card");

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

// Play GIF on card hover
card.addEventListener("mouseenter", function () {
  gif.src = "";
  setTimeout(() => {
    gif.src = originalSrc;
  }, 1);
});
