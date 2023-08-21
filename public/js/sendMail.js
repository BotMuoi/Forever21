const nodeMailer = require("nodemailer");
require("dotenv/config");

exports.sendMail = async (to, subject, htmlContent) => {
  let testAccount = await nodeMailer.createTestAccount();

  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "leminhchien2611@gmail.com",
      pass: "wcsqmmfvcaohuyey",
    },
  });

  let info = await transporter.sendMail({
    from: "leminhchien2611@gmail.com",
    to: to,
    subject: subject,
    html: htmlContent,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
};