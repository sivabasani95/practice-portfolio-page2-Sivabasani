
function toggleDetails() {
  const details = document.getElementById("additionalDetails");
  const button = document.querySelector(".more-btn");

  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    button.textContent = "Show Less Details";
  } else {
    details.style.display = "none";
    button.textContent = "Show More Details";
  }
}
