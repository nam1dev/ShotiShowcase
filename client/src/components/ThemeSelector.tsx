import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Palette } from 'lucide-react';

interface Theme {
  name: string;
  colors: {
    primary: string;
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
  };
}

const themes: Theme[] = [
  {
    name: 'TikTok Red',
    colors: {
      primary: '355 100% 55%',
      background: '0 0% 6%',
      foreground: '0 0% 95%',
      card: '0 0% 12%',
      cardForeground: '0 0% 95%',
      muted: '0 0% 10%',
      mutedForeground: '0 0% 70%',
      accent: '0 5% 14%',
      accentForeground: '0 0% 85%',
      border: '0 0% 18%',
    },
  },
  {
    name: 'Ocean Blue',
    colors: {
      primary: '217 91% 60%',
      background: '215 28% 8%',
      foreground: '213 31% 95%',
      card: '215 25% 15%',
      cardForeground: '213 31% 95%',
      muted: '215 20% 12%',
      mutedForeground: '217 32% 70%',
      accent: '217 25% 16%',
      accentForeground: '213 31% 85%',
      border: '215 25% 20%',
    },
  },
  {
    name: 'Forest Green',
    colors: {
      primary: '142 76% 36%',
      background: '140 20% 8%',
      foreground: '138 25% 95%',
      card: '140 15% 15%',
      cardForeground: '138 25% 95%',
      muted: '140 15% 12%',
      mutedForeground: '142 20% 70%',
      accent: '142 20% 16%',
      accentForeground: '138 25% 85%',
      border: '140 15% 20%',
    },
  },
  {
    name: 'Purple Galaxy',
    colors: {
      primary: '262 83% 58%',
      background: '260 25% 8%',
      foreground: '258 30% 95%',
      card: '260 20% 15%',
      cardForeground: '258 30% 95%',
      muted: '260 20% 12%',
      mutedForeground: '262 25% 70%',
      accent: '262 25% 16%',
      accentForeground: '258 30% 85%',
      border: '260 20% 20%',
    },
  },
  {
    name: 'Sunset Orange',
    colors: {
      primary: '25 95% 53%',
      background: '20 20% 8%',
      foreground: '18 25% 95%',
      card: '20 15% 15%',
      cardForeground: '18 25% 95%',
      muted: '20 15% 12%',
      mutedForeground: '25 20% 70%',
      accent: '25 20% 16%',
      accentForeground: '18 25% 85%',
      border: '20 15% 20%',
    },
  },
];

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<string>('TikTok Red');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('shoti-theme');
    if (savedTheme) {
      setSelectedTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--background', theme.colors.background);
    root.style.setProperty('--foreground', theme.colors.foreground);
    root.style.setProperty('--card', theme.colors.card);
    root.style.setProperty('--card-foreground', theme.colors.cardForeground);
    root.style.setProperty('--muted', theme.colors.muted);
    root.style.setProperty('--muted-foreground', theme.colors.mutedForeground);
    root.style.setProperty('--accent', theme.colors.accent);
    root.style.setProperty('--accent-foreground', theme.colors.accentForeground);
    root.style.setProperty('--border', theme.colors.border);
  };

  const handleThemeSelect = (themeName: string) => {
    setSelectedTheme(themeName);
    applyTheme(themeName);
    localStorage.setItem('shoti-theme', themeName);
    setIsOpen(false);
    console.log(`Theme changed to: ${themeName}`);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          size="icon" 
          variant="ghost" 
          data-testid="button-theme-selector"
        >
          <Palette className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2" align="end">
        <Card>
          <CardContent className="p-3">
            <h4 className="font-medium mb-3 text-sm">Theme Colors</h4>
            <div className="space-y-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeSelect(theme.name)}
                  className={`w-full flex items-center gap-3 p-2 rounded-md text-left hover-elevate ${
                    selectedTheme === theme.name ? 'bg-accent' : ''
                  }`}
                  data-testid={`button-theme-${theme.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex gap-1">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: `hsl(${theme.colors.primary})` }}
                    />
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: `hsl(${theme.colors.background})` }}
                    />
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: `hsl(${theme.colors.card})` }}
                    />
                  </div>
                  <span className="text-sm">{theme.name}</span>
                  {selectedTheme === theme.name && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}