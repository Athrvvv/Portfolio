"use server";

import { z } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/contact-form-email';
import { contactDetails } from './data';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000),
});

export async function handleContactForm(data: { name: string; email: string; message: string }) {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { name, email, message } = parsed.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: contactDetails.email,
      subject: 'New Message from your Portfolio Contact Form',
      reply_to: email,
      react: ContactFormEmail({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, message: "Failed to send message. Please try again later." };
    }

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
