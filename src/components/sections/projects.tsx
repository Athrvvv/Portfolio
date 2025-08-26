import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A selection of projects that demonstrate my passion for development and problem-solving.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={project.imageHint}
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <CardDescription className="flex-1">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 bg-card/50 flex justify-end gap-3">
                <Button variant="outline" asChild>
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
