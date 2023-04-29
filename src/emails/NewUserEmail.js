import sgMail from '@sendgrid/mail'



const sendEMail = async ({ name, email, token }) => {

    const html = ` 
    
    <div style="background-color: #6366f1; padding: 50px 20px;">

    <div style=" display: flex; justify-content: center;  font-family: 'Open Sans' ,'Roboto','Helvetica Neue',Helvetica,Arial,sans-serif; ">

    <div  style=" background-color: white; border-radius: 20px; width: 100%; padding: 30px 20px;  width: 100%; ">
    <div style=" max-width: 600px; margin: auto; ">
        <h1 style=" text-align: center; font-size: 20px; ">Hello:<span style=" color: #3730a3"> ${name} </span></h1>

        <p style="font-size: 15px;">You just have to confirm your account to start</p>

        <p style=" font-size: 15px; margin-bottom: 30px;">Please, press the button to confirm the account <span style="font-weight: bold;"> &#60;${email} /&#62;</span></p> 
        
        <a href='${process.env.FRONT_URL + '/confirm/' + token}' style=" display: flex; align-items: center; max-width: max-content; letter-spacing: 3px; text-decoration: none; border-radius:5px; padding: 10px 20px; background-color: #6366f1; color: white; text-transform: uppercase; text-transform: uppercase;">
            Confirm</a>

        <p style="font-size: 15px;">This link expire after is open</p>
        <p style="font-size: 15px;">if you don't created this account, you can ignore this message</p>

    </div>
    </div>
    </div>

    <div style="margin: auto; text-align: center; padding: 20px; color: white">
        <hr style="border: 1px solid  white;">
        <p style=" font-size: 15px; font-style: italic; padding: 10px; margin-bottom: 0;">Copyright &copy; 2023
            AneudyDev, All rights reserved.</p>
        <hr>
    </div>

    <div>&nbsp;</div>
    </div>    
    `
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: email, // Change to your recipient
        from: 'luisgames0304@gmail.com', // Change to your verified sender
        subject: 'Confirm the account',
        text: 'AneudyDev',
        html: html
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

}


export default sendEMail