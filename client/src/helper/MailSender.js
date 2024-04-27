// MailSender.js

import nodemailer from "nodemailer";

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Wrap the host in quotes
      auth: {
        user: "pradp137@gmail.com", // Wrap the email in quotes
        pass: "reyvkzsmnhpgvzsz", // Wrap the password in quotes
      },
    });

    let info = await transporter.sendMail({
      from: "Flyo",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

export default mailSender;
