// Check login status
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
  // Remove Sign Up / Login buttons
  const btnContainer = document.querySelector(".d-flex.ms-3");
  if (btnContainer) {
    btnContainer.remove();
  }
}
