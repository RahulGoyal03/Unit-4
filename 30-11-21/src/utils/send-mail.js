const transporter = require("../configs/mails")

module.exports = ( from, to, subject, text, html) => {
const message = {
    from,
    to ,
    subject,
    text,
    html
  };

  transporter.sendMail(message)

}

