<template>
    <div>
      <input type="file" @change="handleFileUpload" />
      <button @click="submitFile">Upload</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFile: null, // To store the selected file
      };
    },
    methods: {
      handleFileUpload(event) {
        this.selectedFile = event.target.files[0]; // Capture the uploaded file
      },
      submitFile() {
        if (!this.selectedFile) {
          alert("No file selected!");
          return;
        }
  
        // Example: Sending the file to a server
        const formData = new FormData();
        formData.append("file", this.selectedFile);
  
        fetch("https://example.com/upload", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("File uploaded successfully:", data);
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
          });
      },
    },
  };
  </script>

// Styling Section
<style>

.p1 {
    position: text-align;
    text-align: center;
}

</style>