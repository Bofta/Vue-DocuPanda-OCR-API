const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" }); // Save files in the "uploads" folder

app.post("src/uploads", upload.single("file"), (req, res) => {
  console.log(req.file); // File information
  res.send({ message: "File uploaded successfully" });
});

app.listen(8080, () => console.log("Server running on http://localhost:8080"));