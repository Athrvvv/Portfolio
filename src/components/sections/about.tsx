"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillsData, experienceData, educationData, coCurricularData } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A glimpse into my professional journey, skills, and educational background.
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="co-curricular">Co-curricular</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-8">
            <Card>
              <CardContent className="p-6 space-y-6">
                {experienceData.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <exp.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                      <p className="text-sm text-primary">{exp.period}</p>
                      <p className="mt-2 text-foreground/80">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education" className="mt-8">
            <Card>
              <CardContent className="p-6 space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                     <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <edu.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{edu.institution}</h3>
                      <p className="text-muted-foreground font-medium">{edu.degree}</p>
                      <p className="text-sm text-primary">{edu.period}</p>
                      <p className="mt-1 text-foreground/80">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="mt-8">
            <Card>
              <CardContent className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.map((skillCategory, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2">
                       <skillCategory.icon className="h-5 w-5 text-primary" />
                       <h3 className="font-semibold text-lg">{skillCategory.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="co-curricular" className="mt-8">
            <Card>
              <CardContent className="p-6 space-y-6">
                {coCurricularData.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.role}</h3>
                      <p className="text-sm text-primary">{item.period}</p>
                      <p className="mt-2 text-foreground/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
