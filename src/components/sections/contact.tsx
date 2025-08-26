"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { contactDetails } from '@/lib/data';
import { Loader2, Send, Mail, Phone } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await handleContactForm(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast({
        title: "An error occurred",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have a question, a project idea, or just want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>For direct inquiries.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${contactDetails.email}`} className="text-lg hover:text-primary transition-colors">
                  {contactDetails.email}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Phone</CardTitle>
                  <CardDescription>For urgent communication.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <a href={`tel:${contactDetails.phone}`} className="text-lg hover:text-primary transition-colors">
                  {contactDetails.phone}
                </a>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." className="resize-y min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
