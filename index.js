const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
require("dotenv").config();

const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

exports.sendEmailNotification = functions.database
  .ref("/demand-private/{docId}")
  .onCreate((snap, ctx) => {
    const data = snap.val();
    console.log(snap);
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
        to: data ? data.email : "saiashish7777@gmail.com",
        subject: "Vaccines added successfully",
        text: data ? "searchvaccines" : "error",
        html: data ? "searchvaccines" : "error",
      })
      .then((res) => console.log("email sent"))
      .catch((e) => console.log(e));
  });
