"use server";

import { z } from 'zod';

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

  // In a real application, you would handle the email sending here.
  // For this example, we'll just log it to the console.
  console.log("New Contact Form Submission:");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Message:", parsed.data.message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: 'Message sent successfully!' };
}
