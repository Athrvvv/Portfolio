"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { resumeTailor } from '@/ai/flows/resume-tailor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, Copy } from 'lucide-react';

const resumeSchema = z.object({
  resumeContent: z.string().min(50, "Please provide at least 50 characters of resume content.").max(5000),
  tone: z.string({ required_error: "Please select a tone." }),
});

type ResumeFormValues = z.infer<typeof resumeSchema>;

const ResumeTailor = () => {
  const [rephrasedContent, setRephrasedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      resumeContent: `Mernix Consulting,Thane (Intern) July 2024 — August 2024
• Developed and deployed full-stack web applications using MongoDB, Express, React, and Node.js.
• Focused on building responsive UI, API integration, and real-time data management.
• Gained hands-on experience in Firebase for authentication and deployment.`,
      tone: 'Professional',
    },
  });

  const onSubmit = async (data: ResumeFormValues) => {
    setIsLoading(true);
    setRephrasedContent('');
    try {
      const result = await resumeTailor(data);
      setRephrasedContent(result.rephrasedContent);
    } catch (error) {
      console.error("Error tailoring resume:", error);
      toast({
        title: "An error occurred",
        description: "Failed to tailor the resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(rephrasedContent);
    toast({
      title: "Copied to clipboard!",
      description: "The rephrased content has been copied.",
    });
  };

  return (
    <section id="resume-tailor" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Wand2 className="h-8 w-8 text-primary" />
            AI Resume Tailor
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Paste a section of your resume and let AI rephrase it to match the tone you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Input Your Content</CardTitle>
              <CardDescription>Provide the resume text and select a desired tone.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="resumeContent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resume Content</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste your experience or project description here..."
                            className="min-h-[250px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tone</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a tone" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Professional">Professional</SelectItem>
                            <SelectItem value="Persuasive">Persuasive</SelectItem>
                            <SelectItem value="Creative">Creative</SelectItem>
                            <SelectItem value="Formal">Formal</SelectItem>
                            <SelectItem value="Casual">Casual</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Tailor My Resume
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>AI-Generated Result</CardTitle>
              <CardDescription>Here is the rephrased content, tailored to your selected tone.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 relative">
                {isLoading && (
                    <div className="absolute inset-0 bg-card/50 flex items-center justify-center rounded-md">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}
                {rephrasedContent && (
                  <>
                  <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8" onClick={handleCopy}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <div className="prose prose-invert prose-sm max-w-none text-foreground/90 whitespace-pre-wrap p-4 bg-background rounded-md h-full min-h-[300px]">
                    {rephrasedContent}
                  </div>
                  </>
                )}
                {!isLoading && !rephrasedContent && (
                    <div className="h-full min-h-[300px] flex items-center justify-center text-muted-foreground p-4 bg-background rounded-md">
                        Your tailored content will appear here.
                    </div>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeTailor;
