// /app/api/google-sheets/route.ts
import { google, sheets_v4 } from "googleapis";
import { NextRequest } from "next/server";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID!;

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: SCOPES,
});

export async function POST(req: NextRequest) {
  try {
    const { name, phone, telegram, interest } = await req.json();

    const authClient = await auth.getClient();

    // Приводимо тип до потрібного
    const sheets = google.sheets({
      version: "v4",
      auth: authClient as unknown as sheets_v4.Options["auth"],
    });

    // Додаємо timestamp
    const timestamp = new Date().toLocaleString("uk-UA", {
      timeZone: "Europe/Kiev",
    });

    // Підготовляємо дані для вставки
    const values = [
      [timestamp, name, phone, telegram, interest || "Не вказано"],
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:E", // Колонки A-E
      valueInputOption: "RAW",
      requestBody: {
        values: values,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Data added to sheet successfully",
        response: response.data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error adding data to Google Sheets:", error);
    return new Response(
      JSON.stringify({
        message: "Error adding data to Google Sheets",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
