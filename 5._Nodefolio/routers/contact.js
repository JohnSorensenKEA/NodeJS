const router = require("express").Router();

/* Nodemailer setup */
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pedersenb313@gmail.com', // Unused email...
        pass: '\`]c+GhyNr\'8uXw3\/' // `]c+GhyNr'8uXw3/
    }
});

const mailOptions = {
    from: 'pedersenb313@gmail.com',
    to: 'pedersenb313@gmail.com',
    subject: '',
    text: ''
};

/* Endpoints */
router.post("/api/contact", (req, res) => {
    mailOptions.subject = `Portfolio contact - ${req.body.name}`;

    mailOptions.text = `Name: ${req.body.name}
    Email: ${req.body.email}
    Tel: ${req.body.tel}

    Message:
    ${req.body.message}

    ${Date()}
    `;

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect("/contacts");
});

/* Module exports */
module.exports = {
    router
};