import { google } from "googleapis";
import { NextResponse } from "next/server";

// Function to format date as "Sunday 28/09/2025"
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
    // If date parsing fails, return the original string
    return dateString;
  }
}

export async function POST(request) {
  try {
    // Parse the request body
    const formData = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "matricNumber",
      "level",
      "hallOfResidence",
      "arrivalDate",
      "time",
      "phoneNumber",
      "luggageBags",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Set up Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";

    // Prepare the data to be inserted
    const timestamp = new Date().toISOString();
    const formattedArrivalDate = formatDateForSheet(formData.arrivalDate);

    const rowData = [
      timestamp,
      formData.name,
      formData.matricNumber,
      formData.level,
      formData.hallOfResidence,
      formattedArrivalDate,
      formData.time,
      formData.phoneNumber,
      formData.luggageBags,
      "Pending", // Status
      "", // Notes
    ];

    // Check if headers exist, if not create them
    try {
      const headerRange = `${sheetName}!A1:K1`;
      const headerResponse = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: headerRange,
      });

      // If no headers exist, add them
      if (
        !headerResponse.data.values ||
        headerResponse.data.values.length === 0
      ) {
        const headers = [
          "Timestamp",
          "Full Name",
          "Matric Number",
          "Level",
          "Hall of Residence",
          "Arrival Date",
          "Arrival Time",
          "Phone Number",
          "Luggage Bags",
          "Status",
          "Notes",
        ];

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: headerRange,
          valueInputOption: "RAW",
          requestBody: {
            values: [headers],
          },
        });
      }
    } catch (headerError) {
      console.log("Headers may not exist, will be created with first entry");
    }

    // Append the new row to the sheet
    const appendRange = `${sheetName}!A:K`;
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: appendRange,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowData],
      },
    });

    // Log success for debugging
    console.log("Registration successfully submitted to Google Sheets:", {
      name: formData.name,
      matricNumber: formData.matricNumber,
      timestamp,
    });

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully!",
      data: {
        timestamp,
        registrationId: `SR${Date.now()}`, // Simple registration ID
      },
    });
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);

    // Return a more specific error message
    let errorMessage = "Failed to submit registration";
    if (error.message.includes("credentials")) {
      errorMessage =
        "Google Sheets authentication failed. Please check your credentials.";
    } else if (error.message.includes("spreadsheet")) {
      errorMessage =
        "Google Sheet not found or not accessible. Please check the sheet ID and permissions.";
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to submit registrations." },
    { status: 405 }
  );
}
