import { GOOGLE_SHEETS_SCRIPT_URL } from "./constants";

/*
 * To use this integration, you need to set up a Google Apps Script as a Web App:
 * 1. Create a new Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste the following code:
 * 
 * function doPost(e) {
 *   var data = JSON.parse(e.postData.contents);
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 *   sheet.appendRow([new Date(), data.type, data.name, data.phone, data.email, data.message, data.product, data.location]);
 *   return ContentService.createTextOutput("success").setMimeType(ContentService.MimeType.TEXT);
 * }
 * 
 * 4. Click 'Deploy' > 'New Deployment' > 'Web App'.
 * 5. Set 'Who has access' to 'Anyone'.
 * 6. Copy the Web App URL and paste it into GOOGLE_SHEETS_SCRIPT_URL in constants.ts.
 */

export async function submitEnquiry(data: {
    type: "enquiry" | "newsletter";
    name?: string;
    phone?: string;
    email: string;
    message?: string;
    product?: string;
    location?: string;
}) {
    if (!GOOGLE_SHEETS_SCRIPT_URL) {
        console.warn("Google Sheets Integration: No Script URL provided.");
        return { success: false, error: "Integration not configured" };
    }

    try {
        const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors", // Crucial for Apps Script Web App without complex CORS setup
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return { success: true };
    } catch (error) {
        console.error("Submission error:", error);
        return { success: false, error };
    }
}
