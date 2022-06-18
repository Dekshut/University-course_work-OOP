const nodemailer = require("nodemailer")

module.exports = function (req, res) {
    const transport = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'malbo_catalog@outlook.com',
            pass: '$FBP}l4wPa'
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    var opt = {
        from: 'malbo_catalog@outlook.com',
        to: req.body.email,
        subject: 'RE:' + req.body.subject,
        text: "Hello, " + req.body.name + ", thank you for contacting the topic `" + req.body.subject + "` soon our operator will contact you on your message: " + req.body.text
    }
    transport.sendMail(opt, function (err) {
        if (err) {
            console.log(err)
            res.status(500).json('Oops somethinf wrong')
        }
        else { res.status(200).send('Send message'); }
    });
};