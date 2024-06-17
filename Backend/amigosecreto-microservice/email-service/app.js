const nodemailer = require('nodemailer');

let remetente = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secureConnection: true,
    auth: {
        user: 'meuEmail@email.com',
        pass: 'minhaSenha'
    }
})

let emailASerEnviado = {
    from: 'emailDestino@email.com',
    to: 'meuEmail@email.com',
    subject: 'Enviando email com Node.js',
    text: 'Estou enviando este email com Node.js'
}

remetente.conviteEmail(emailASerEnviado, error => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado com sucesso')
    }
})

module.exports = conviteEmail;
