// function openPatentModal() {
//   // Create modal overlay
//   const modal = document.createElement("div");
//   modal.id = "patent-modal";
//   modal.className = "modal-overlay";

//   // Create modal content
//   modal.innerHTML = `
//         <div class="modal-content">
//             <button class="modal-close" onclick="closePatentModal()">×</button>
//             <iframe src="/v2/patent2.html" frameborder="0" width="100%" height="100%"></iframe>
//         </div>
//     `;

//   // Add to body
//   document.body.appendChild(modal);

//   // Prevent body scroll
//   document.body.style.overflow = "hidden";

//   // Add event listeners
//   modal.addEventListener("click", function (e) {
//     if (e.target === modal) {
//       closePatentModal();
//     }
//   });

//   document.addEventListener("keydown", handleEscKey);
// }

// function closePatentModal() {
//   const modal = document.getElementById("patent-modal");
//   if (modal) {
//     modal.remove();
//     document.body.style.overflow = "";
//     document.removeEventListener("keydown", handleEscKey);
//   }
// }

// function handleEscKey(e) {
//   if (e.key === "Escape") {
//     closePatentModal();
//   }
// }
