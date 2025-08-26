import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react';
import { contactDetails } from '@/lib/data';

const Hero = () => {
  return (
    <section id="home" className="relative h-auto min-h-[calc(100vh-80px)] flex items-center py-20 md:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-sm">
              Full-Stack Developer & AI Enthusiast
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">
              Atharva Khond
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Crafting innovative solutions with a passion for clean code, intelligent systems, and user-centric design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="#projects">
                  <ArrowDown className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://drive.google.com/drive/folders/1FmYZVzyy3BjcHVvm4-0mqgTIZiatEeds?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              <Link href={contactDetails.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 mx-auto md:mx-0">
            <Image
              src="https://picsum.photos/400/400"
              alt="Atharva Khond"
              width={400}
              height={400}
              data-ai-hint="professional portrait"
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
            />
             <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
