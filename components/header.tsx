import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

export function Header() {
  return (
    <header className="w-full py-24 px-6 text-center bg-background">
      <h1 className={cn(
        playfair.className,
        "text-4xl md:text-6xl font-bold mb-4 tracking-tight"
      )}>
        Christian Lauer
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Capturing timeless moments of love and celebration through the lens of emotion and authenticity.
      </p>
    </header>
  );
}