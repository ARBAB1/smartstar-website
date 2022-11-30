import nodemailer from "nodemailer";

const email = "smartstarsoftwaresolution@gmail.com";
const pass = "swcfwxukivkmqdmd";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};