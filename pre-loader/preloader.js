// At the end of your preloader.js (or in the script section)
function redirectToMainPage() {
    window.location.href = "index.html"; // Your main page
  }
  
  // Modify your progress bar code to redirect after 100%
  if (progress >= 100) {
    clearInterval(progressInterval);
    setTimeout(() => {
      redirectToMainPage();
    }, 1000);
  }