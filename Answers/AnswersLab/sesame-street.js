document.addEventListener("DOMContentLoaded", () => {
  // Change header color
  const cookieHeader = document.getElementById("cookie-header");
  cookieHeader.style.color = "#f7f16d";

  const cookieList = document.getElementById("cookie-jar");
  const cookieCount = document.getElementById("cookie-count");

  // Count cookies
  function updateCookieCount() {
    const count = cookieList.querySelectorAll(".cookie").length;
    cookieCount.textContent = `${count}! There are ${count} cookie(s) in the cookie jar!`;
  }
  
  updateCookieCount();

  // Remove a cookie every 30 seconds
  setInterval(() => {
    const cookies = cookieList.querySelectorAll(".cookie");
    if (cookies.length > 0) {
      cookies[cookies.length - 1].remove();
      updateCookieCount();
    }
  }, 30000);
});