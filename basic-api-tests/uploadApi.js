// This is a test script to upload an image to the Builder API
// To run this script:
// 1. Insert your private API key into the PRIVATE_API_KEY_DO_NOT_SHARE_OR_ELSE_BAD_THING_WILL_HAPPEN
// 2. In the terminal, run the script: node uploadApi.js
// 3. The script will upload the image to your Builder asset library and print the response

import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const PRIVATE_API_KEY_DO_NOT_SHARE_OR_ELSE_BAD_THING_WILL_HAPPEN = "your_private_api_key_here";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${PRIVATE_API_KEY_DO_NOT_SHARE_OR_ELSE_BAD_THING_WILL_HAPPEN}`);
myHeaders.append("Content-Type", "image/webp");

const filePath = resolve(__dirname, './elmo.webp');
const file = await readFile(filePath);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: file,
  redirect: 'follow'
};

fetch("https://builder.io/api/v1/upload?name=TestImageUpload.webp", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));