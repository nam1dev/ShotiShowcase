import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Github, Linkedin, Mail, Star } from 'lucide-react';

export default function DeveloperProfile() {
  const skills = ['HTML', 'CSS', 'Python', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Express.js', 'Git', 'Bash'];
  
  const handleContact = (type: string) => {
    console.log(`${type} contact clicked`);
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=jaymar&backgroundColor=b6e3f4" alt="Jaymar" />
            <AvatarFallback className="text-xl">JM</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl font-display" data-testid="text-developer-name">
          Jaymar
        </CardTitle>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="secondary" className="text-xs">
            <Star className="w-3 h-3 mr-1" />
            Newbie Developer
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <Code2 className="w-4 h-4" />
            Skills
          </h4>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="text-xs"
                data-testid={`badge-skill-${skill.toLowerCase().replace('.', '')}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-2">About</h4>
          <p className="text-xs text-muted-foreground leading-relaxed" data-testid="text-developer-bio">
            Passionate about creating engaging web experiences. Built this Shoti web to showcase 
            short-form video content with a clean, modern interface :)
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 text-xs"
            onClick={() => handleContact('GitHub')}
            data-testid="button-github"
          >
            <Github className="w-3 h-3 mr-1" />
            GitHub
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 text-xs"
            onClick={() => handleContact('LinkedIn')}
            data-testid="button-linkedin"
          >
            <Linkedin className="w-3 h-3 mr-1" />
            LinkedIn
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => handleContact('mailto')}
            data-testid="button-email"
          >
            <Mail className="w-3 h-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}