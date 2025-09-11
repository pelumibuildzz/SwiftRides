// Quick test to verify date formatting
function formatDateForSheet(dateString) {
  try {
    const date = new Date(dateString);
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = dayNames[date.getDay()];

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${dayName} ${day}/${month}/${year}`;
  } catch (error) {
    return dateString;
  }
}

// Test the date formatting
console.log("Testing date formatting:");
console.log("2025-09-27 →", formatDateForSheet("2025-09-27"));
console.log("2025-09-28 →", formatDateForSheet("2025-09-28"));

// Verify what day of the week September 28, 2025 actually is
const testDate = new Date("2025-09-28");
console.log("\nVerification:");
console.log(
  "September 28, 2025 is a",
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][testDate.getDay()]
);
