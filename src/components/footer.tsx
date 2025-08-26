import Link from 'next/link';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { contactDetails } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Khond's Canvas</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Atharva Khond. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href={contactDetails.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
