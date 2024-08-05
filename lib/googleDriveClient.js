import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';
//use your key.json file get it from googlserviceaccount paste in projectdirectory
// Cache variables
let driveClient = null;

// Function to initialize and return the Google Drive client
const getDriveClient = () => {
  if (driveClient) {
    return driveClient;
  }

  // Read the key file and set up Google Drive client
  //add you key .json from google service account to project directory
  // const keyFilePath = path.join(process.cwd(), '');
  // const keyFile = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));

  const auth = new google.auth.JWT(
    keyFile.client_email,
    null,
    keyFile.private_key,
    ['https://www.googleapis.com/auth/drive.file'],
    null
  );

  driveClient = google.drive({ version: 'v3', auth });
  return driveClient;
};

// Export the Google Drive client instance
export const drive = getDriveClient();
