require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');

const app = express();
app.use(express.static('public'));

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    }
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server ready to take messages.");
    }
  });
  

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/200', (req, res) => {
    res.sendFile(__dirname + '/msg200.html');
});

app.get('/500', (req, res) => {
    res.sendFile(__dirname + '/msg500.html');
});

app.post("/", (req, res) => {
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
        Object.keys(fields).forEach(function (property) {
            data[property] = fields[property].toString();
        });
  
        const mail = {
            from: data.fName,
            to: process.env.EMAIL,
            subject: "Freelancing - wiadomość od " + data.fName + " " + data.lName,
            text: `${data.fName} ${data.lName} <${data.email}> \n${data.message}`
        };
  
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).redirect('/500');
            } else {
                res.status(200).redirect('/200');
            }
        });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Ready. Set. Go.");
});