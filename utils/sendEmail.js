import nodemailer from 'nodemailer'

const { AUTH_EMAIL, AUTH_PASS } = process.env
// console.log(AUTH_EMAIL)

let transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  }
})

// test transporter
transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
      console.log('Ready for messages')
      // console.log(success)
    }
})

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions)
    console.log("message sent successfully")
    return;
  } catch (error) {
    throw(error)
  }
}

export default sendEmail
