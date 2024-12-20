import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Determine which sheet to use based on form type
    const sheetName = body.isTeacherForm ? "Teachers" : "Students";

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetName}!A:E`, // Using different sheets for different roles
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            body.name, // Name
            body.phone, // Phone
            body.course, // Course/Subject
            body.isTeacherForm ? body.experience : "N/A", // Experience (only for teachers)
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
