// backend/utils/sendEmail.js
import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  try {
    // Validate required environment variables
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_SERVICE', 'SMTP_MAIL', 'SMTP_PASSWORD'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('❌ Missing email configuration:', missingVars);
      throw new Error(`Missing email configuration: ${missingVars.join(', ')}`);
    }

    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      secure: process.env.NODE_ENV === 'production', // Use secure connection in production
      tls: {
        rejectUnauthorized: false // Only for development/testing
      }
    });

    const mailOptions = {
      from: `"Deepak Kushwaha" <${process.env.SMTP_MAIL}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    throw error;
  }
};
