var express = require('express');
var router = express.Router();

const mailer = require('nodemailer');

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pictures.vlad.cv@gmail.com',
        pass: 'xjkfr2019'
    }
});

router.post('/send-mail', function(req, res, next) {
    var email = {
        from: 'pictures.vlad.cv@gmail.com',
        to: 'independent.euro.dev@gmail.com',
        subject: req.body.subject,
        text: req.body.name + ' has sent this text:\n' + req.body.text + "\nEmail: " + req.body.email
    };

    transporter.sendMail(email, function(err, info) {
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/*', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
