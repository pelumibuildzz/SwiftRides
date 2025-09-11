// Test utility to validate the registration API
// Run this with: node test-registration-api.js

const testRegistration = {
  name: "John Doe",
  matricNumber: "21CU123456",
  level: "300",
  hallOfResidence: "Daniel Hall",
  arrivalDate: "2025-09-28", // This should format as "Sunday 28/09/2025"
  time: "14:30",
  phoneNumber: "09012345678",
  email: "john.doe@example.com",
  numberOfBoxes: "2",
};

async function testAPI() {
  try {
    console.log("Testing registration API...");
    console.log("Test data:", testRegistration);

    const response = await fetch(
      "http://localhost:3000/api/submit-registration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testRegistration),
      }
    );

    const result = await response.json();

    console.log("\nAPI Response:");
    console.log("Status:", response.status);
    console.log("Response:", result);

    if (result.success) {
      console.log("\n✅ Registration API is working correctly!");
      console.log("Registration ID:", result.data.registrationId);
      console.log("Timestamp:", result.data.timestamp);
    } else {
      console.log("\n❌ Registration failed:");
      console.log("Error:", result.error);
      if (result.details) {
        console.log("Details:", result.details);
      }
    }
  } catch (error) {
    console.log("\n❌ Network error:");
    console.log("Error:", error.message);
    console.log("\nMake sure the development server is running: npm run dev");
  }
}

// Run the test
testAPI();
