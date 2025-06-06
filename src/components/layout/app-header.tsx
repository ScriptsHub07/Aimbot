import { ChefHat } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="py-6 mb-8 border-b border-border">
      <div className="container mx-auto flex items-center gap-3">
        <ChefHat className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-headline font-semibold text-foreground">
          Chef IA
        </h1>
      </div>
    </header>
  );
}
