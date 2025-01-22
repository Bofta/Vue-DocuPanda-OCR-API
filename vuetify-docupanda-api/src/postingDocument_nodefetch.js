const fetch = require('node-fetch');
const fs = require('fs');
        
   
// Replace with your actual DocuPanda API key
const api_key = "qppytf7F6fhj45mWLZaOKR36oHL2";
const url = "https://app.docupanda.io/document";


// Metodo 1 : client side ( Componente Vue con uploader ) -> usando un uploader in un compenente vue in modo tale che si riesce ad accedere al fs ( file system )

// Metodo 2 : server side ( Node.js ) -> http request di tipo POST communicando direttamente con il API del servizio web richiesto.


// Metodo 3 : usando un pdf pubblico ( già pubblicato sul web come caso d'uso reale )

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


