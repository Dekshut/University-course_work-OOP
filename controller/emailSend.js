const nodemailer = require("nodemailer")

module.exports = function (req, res) {
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "be5aeb9939a7f5",
            pass: "2d7ef053447b8a"
        }
    });
    var opt = {
        from: req.body.from,
        to: 'malbo@gmail.com', // Почта сайта
        subject: req.body.subject,
        text: req.body.message,
    };
    transporter.sendMail(opt, function (err) {
        if (err) console.error(err);
        res.status(200).send('Send Message!');
    });
};