const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", async (req, res) => {
  try {
    const data = req.body;

    // validate data
    if (!data || typeof data !== "object") {
      throw new Error("Invalid data.");
    }

    // create nodemailer transport object
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ayomiakintoye00@gmail.com",
        pass: "mwphwjmkjsiglnoz",
      },
    });

    // create mail options object
    const mailOptions = {
      from: "ayomiakintoye00@gmail.com",
      to: "isaiahgabriel175@gmail.com", // recipient email address
      subject: "Data file",
      text: JSON.stringify(data), // use JSON.stringify to convert the data to a string
    };

    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.", info);
    res.sendFile(path.join(__dirname, "confirmation.html"));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email.");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
