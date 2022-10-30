const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
        sgMail.send({
        to: email,
        from: 'mbassinidev@gmail.com',
        subject: 'Welcome to Task Manager App',
        text: `Thanks for joining in, ${name}!. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mbassinidev@gmail.com',
        subject: `We will miss you ${name}`,
        text: `${name}, your account has been deleted :( \nLet me know if there's a particular reason for leaving us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}