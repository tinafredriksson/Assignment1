document.addEventListener("DOMContentLoaded", function () {
      const daysBtn = document.querySelector(".days-left-btn");
      const bookingText = document.getElementById("HyroxBooking");

  // Vid tryck på knappen visas antal dagar kvar till loppet/från dagens datum//
  daysBtn.addEventListener("click", function () {
    // Dagar kvar till 19 dec 2025 //
    const today = new Date();
    const eventDate = new Date("2025-12-19");
    const diffTime = eventDate - today;
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (daysLeft > 0) {
      alert(`Det är ${daysLeft} dagar kvar till HYROX Stockholm 2025! 💪`);
    } else if (daysLeft === 0) {
      alert("HYROX Stockholm börjar IDAG! 🚀");
    } else {
      alert("HYROX Stockholm 2025 har redan varit 😅");
    }

    // Visar vilket typ av lopp/ vid antal personer//
    const value = prompt("Hur många personer ska tävla? (1, 2 eller 4)");
    if (value === null) return;
    const num = Number(String(value).trim());
    if (!bookingText) return;
    if (num === 1) {
      bookingText.textContent = "BOKA SINGLE 💪";
      bookingText.style.color = "#000000";
    } else if (num === 2) {
      bookingText.textContent = "BOKA DOUBLE 🏋️";
      bookingText.style.color = "#000000";
    } else if (num === 4) {
      bookingText.textContent = "BOKA RELAY 🏃‍♀️🏃‍♂️";
      bookingText.style.color = "#000000";
    } else {
      bookingText.textContent = "Ange 1, 2 eller 4 deltagare 🙃";
      bookingText.style.color = "orange";
    }
  });

  // Ändrar text vid Hover//
  const originalText = daysBtn.textContent;
  daysBtn.addEventListener("mouseenter", () => {
    daysBtn.textContent = "Let's Go! 💪";
  });
  daysBtn.addEventListener("mouseleave", () => {
    daysBtn.textContent = originalText;
  });
});
