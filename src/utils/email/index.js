import sendGridMail from '@sendgrid/mail';
// import { env } from '../../environment';
import config from 'config';

sendGridMail.setApiKey(config.sendgrid.sendgridApiKey);
// const PORT = config.server.port;

const setUrl = (email) => {
  return `http://localhost:3000/password/end/reset?email=${email}`;
};

const getMessage = (email) => {
  return {
    to: email,
    from: config.sendgrid.senderEmail,
    subject: 'Password Reset',
    text: `To reset your password kindly click on this link \n ${setUrl(email)}`,
  };
};

const getVerify = (email, code) => {
  return {
    to: email,
    from: config.sendgrid.senderEmail,
    subject: 'Verify Email',
    text: `To verify your email, kindly enter this code in your browser: ${code}`,
  };
};

export const sendEmail = async (email) => {
  try {
    await sendGridMail.send(getMessage(email));
    console.log('Forgot password email sent successfully');
  } catch (error) {
    console.error('Error sending forgot password email');
    console.error(error);
  }
};

export const sendVerifyEmail = async (email, code) => {
  try {
    await sendGridMail.send(getVerify(email, code));
    console.log('Verify email sent successfully');
  } catch (error) {
    console.error('Error sending verify email');
    console.error(error);
  }
};
