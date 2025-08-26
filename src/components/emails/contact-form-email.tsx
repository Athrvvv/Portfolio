import React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ name, email, message }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        {`
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
          .header { font-size: 24px; font-weight: bold; margin-bottom: 20px; }
          .content { margin-bottom: 20px; }
          .footer { font-size: 12px; color: #777; }
          .field { margin-bottom: 10px; }
          .field-label { font-weight: bold; }
        `}
      </style>
    </head>
    <body>
      <div className="container">
        <div className="header">New Contact Form Submission</div>
        <div className="content">
          <p>You have received a new message from your portfolio website.</p>
          <div className="field">
            <span className="field-label">Name:</span> {name}
          </div>
          <div className="field">
            <span className="field-label">Email:</span> {email}
          </div>
          <div className="field">
            <span className="field-label">Message:</span>
            <p>{message}</p>
          </div>
        </div>
        <div className="footer">
          This email was sent from your portfolio contact form.
        </div>
      </div>
    </body>
  </html>
);

export default ContactFormEmail;
