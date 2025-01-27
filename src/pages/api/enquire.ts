import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

interface EmailData {
    emailorphone: string;
  }


  
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aeromingles@gmail.com',
      pass: 'eswnvrerqzukthzn'
    }
  });
  
  const sendEmail = async (data: EmailData): Promise<void> => {
    console.log(data);
    const mailOptions = {
      from: 'aeromingles@gmail.com', // Replace with your email
      to: 'dangersgagan@gmail.com', // Replace with the recipient's email
      subject: `New Enquire`,
      html: `
        <h3>New Enquire</h3>
        <p><strong>${Number(data.emailorphone)? 'Phone' : 'Email'}:</strong> ${data.emailorphone}</p>
      `,
    };
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  };



  const sendEmailToStudent = async (data: EmailData): Promise<void> => {
    console.log(data);
    const mailOptions = {
      from: 'aeromingles@gmail.com', // Replace with your email
      to: data.emailorphone, // Replace with the recipient's email
      subject: `Thank You for Reaching Out to Aero Mingle Academy`,
      html: `
        <p>Thank you for sharing your details with us! Someone from our team will reach out to you shortly.</p>
        <p>Best regards,<br>Aeromingles Team</p>
      `,
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  };


// POST route to handle name submission
export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      const { emailorphone } = req.body;
      console.log(emailorphone);
      if (!emailorphone) {
        return res.status(400).json({ 
          success: false,
          error: 'all fields are required' 
        });
      }
      await sendEmail({ emailorphone });

      if(!Number(emailorphone)){
        await sendEmailToStudent({ emailorphone });
      }
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
    } catch (error) {
      console.error('Error processing request:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }