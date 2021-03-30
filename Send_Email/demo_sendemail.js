// * Include Nodemailer module
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seankong14@gmail.com',
        pass: 'yourpassword'
    }
});

// var mailOptions = {
//     from: 'seankong14@gmail.com',
//     to: 'seankong14@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'Hello World!'
// }

// * To send an email to more than one receiver, add them to the
// * "to" property of the mailOptions object, separated by commas
// var mailOptions = {
//     from: 'seankong14@gmail.com',
//     to: 'seankong14@gmail.com, myfriend@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'Hello World!'
// }

// * To send HTML formatted text in your email, use the "html" property
// * instead of the "text" property
var mailOptions = {
    from: 'seankong14@gmail.com',
    to: 'seankong14@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Hello World!</h1><p>That was easy!</p>'
}

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})
