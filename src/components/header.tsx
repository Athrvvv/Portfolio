"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, contactDetails } from '@/lib/data';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition-colors">
            <Code2 className="h-7 w-7 text-primary" />
            <span>Khond's Canvas</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button asChild>
              <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={handleLinkClick}>
                      <Code2 className="h-6 w-6 text-primary" />
                      <span>Khond's Canvas</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <nav className="flex-1 flex flex-col items-center justify-center gap-8 py-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors"
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <Button asChild className="w-full">
                      <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
