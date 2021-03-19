const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
require("dotenv").config();

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

exports.sendEmailNotification = functions.database
.ref("/demand-private")
.onCreate((snap, ctx) => {
const data = snap.data();
const authData = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
});
authData
.sendMail({
from: "developer@seachvaccines.com",
to: `${data.email}`,
subject: "Vaccines added successfully",
text: "searchvaccines",
html: "searchvaccines",
})
.then((res) => console.log("email sent"))
.catch((e) => console.log(e));
});
