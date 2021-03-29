
var nodemailer=require('nodemailer');

var trans=nodemailer.createTransport(
    {
        service:'gmail',
        auth:
        {
          user:'juhiprasad35@gmail.com',
          pass:'KANCHAN22@bin'
        }
    }
)  

var mailOption={
    from:"juhiprasad35@gmail.com",
    to:"juhikumari3735@gmail.com",
    subject:"this is test email",
    text:"test email"
}

trans.sendMail(mailOption,(err,info)=>{

     if(err)
     console.log(err);
     else
     console.log("email sent",info.response);
})