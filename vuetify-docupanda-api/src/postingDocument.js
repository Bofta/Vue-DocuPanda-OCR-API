const fetch = require('node-fetch');
const fs = require('fs');

// Replace with your actual DocuPanda API key
const api_key = "qppytf7F6fhj45mWLZaOKR36oHL2";
const url = "https://app.docupanda.io/document";

// Read and encode the file in base64
const filePath = "example_document.pdf";
const fileContents = fs.readFileSync(filePath);
const base64Content = Buffer.from(fileContents).toString('base64');

// Construct the JSON payload
const payload = {
    document: {
        file: {
            contents: base64Content,
            filename: filePath
        }
    }
};

// Make the POST request with JSON payload
fetch(url, {
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-API-Key": api_key
    },
    body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => {
    const document_id = data.documentId;
    console.log(document_id); // Output the document ID
})
.catch(error => console.error('Error:', error));