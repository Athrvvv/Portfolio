'use server';

/**
 * @fileOverview AI-powered resume tailoring flow.
 *
 * - resumeTailor - A function that rephrases resume content based on a selected tone.
 * - ResumeTailorInput - The input type for the resumeTailor function.
 * - ResumeTailorOutput - The return type for the resumeTailor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const ResumeTailorInputSchema = z.object({
  resumeContent: z
    .string()
    .describe('The content of the resume to be rephrased.'),
  tone: z
    .string()
    .describe(
      'The desired tone for the rephrased resume content (e.g., formal, casual, persuasive).' 
    ),
});
export type ResumeTailorInput = z.infer<typeof ResumeTailorInputSchema>;

const ResumeTailorOutputSchema = z.object({
  rephrasedContent: z
    .string()
    .describe('The rephrased resume content with the specified tone.'),
});
export type ResumeTailorOutput = z.infer<typeof ResumeTailorOutputSchema>;

export async function resumeTailor(input: ResumeTailorInput): Promise<ResumeTailorOutput> {
  return resumeTailorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeTailorPrompt',
  input: {schema: ResumeTailorInputSchema},
  output: {schema: ResumeTailorOutputSchema},
  prompt: `You are a professional resume writer. Rephrase the following resume content with a tone that is "{{{tone}}}".

Resume Content:
{{{resumeContent}}}

Rephrased Resume Content:`, // Removed example resume from prompt.
});

const resumeTailorFlow = ai.defineFlow(
  {
    name: 'resumeTailorFlow',
    inputSchema: ResumeTailorInputSchema,
    outputSchema: ResumeTailorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
