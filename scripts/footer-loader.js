document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (footer) {
    fetch("../shared/footer.html")
      .then((res) => res.text())
      .then((html) => {
        footer.innerHTML = html;
      })
      .catch((err) => {
        console.error("Failed to load footer:", err);
      });
  }
});