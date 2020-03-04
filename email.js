const nodemailer = require("nodemailer");

module.exports = function(name, email, message) {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "wgldevs@gmail.com" , 
      //pass: ""
    },
    tls: { rejectUnauthorized: false }
  });
  
  const mailOptionsWGL = {
    to: 'wgldevs@gmail.com',
    subject: 'Contato de Cliente',
    text: `Nome:${name} | Email: ${email} | Message: ${message}`
  };
  
  const mailOptionsUser = {
    from: 'wgldevs@gmail.com',
    to: email,
    subject: 'Contato wgldevs ',
    text: 'Email Enviado com sucesso! Aguarde o retorno'
  };
  
     transporter.sendMail(mailOptionsWGL, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
    });
  
    transporter.sendMail(mailOptionsUser, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
  
}

