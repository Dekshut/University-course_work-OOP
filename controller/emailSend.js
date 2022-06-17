const nodemailer = require("nodemailer")

module.exports = function (req, res) {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "fa2f7376617c43",
            pass: "d656d99df01896"
        }
    })
    var opt = {
        from: req.body.from,
        to: 'malbo@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    }
    transport.sendMail(opt, function (err) {
        if (err) console.error(err);
        res.status(200).send('Send Message!');
    });
};