import * as nodemailer from 'nodemailer';
 const SendEmail = async (from , to,  subject, text) => {
 // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    console.log("entra")
    // create reusable transporter object using the default SMTP transport
   const transporter =  nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        service: 'gmail',
       // port: 587,
       // secure: false, // true for 465, false for other ports
        auth: {
            user: "alejanvelazco2008@hotmail.com", // generated ethereal user
            pass: "7307969xd" // generated ethereal password
        }
    });

    // send mail with defined transport object
    const message ={
        from: '"Fred Foo 👻" <sender@example.com>', // sender address
        to: `Recipient <${to}>` ,// list of receivers
        subject: `${subject}`, // Subject line
        text: `${text}`, // plain text body
        html: '' // html body
    };

    console.log("entra3 ")
    transporter.sendMail( message , (err, info) => {
        console.log("entra2 ")
        if(err) {
            console.log("ERROR OCORRURIDO "+ err.message);
            return process.exit(1);
        } else {
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        }
    })
   //  console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
   // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default SendEmail;