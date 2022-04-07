var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'zassxdapi.otp@gmail.com',
    pass: 'zassxdotp266'
  }
})

function mail(text, token){
  var options = {
    from: '"Verifikasi OTP Miku Bot" <zassxdganz>',
    to: text,
    subject: 'Verifikasi mikubot',
    html: `${token}`,
}

transporter.sendMail(options, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
})
}

module.exports = {
  mail
}