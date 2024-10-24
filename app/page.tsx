import fs from 'fs';
import path from 'path';
import { Gallery } from '@/components/gallery';
import { Camera } from 'lucide-react';

function getPhotos() {
  const photosDirectory = path.join(process.cwd(), 'public/photos');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(photosDirectory)) {
    fs.mkdirSync(photosDirectory, { recursive: true });
    return [];
  }

  const photoFiles = fs.readdirSync(photosDirectory);
  
  return photoFiles
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => ({
      src: `/photos/${file}`,
      alt: file.replace(/\.[^/.]+$/, '').replace(/-/g, ' ')
    }));
}

export default function Home() {
  const photos = getPhotos();

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-8 w-8" />
              <h1 className="text-3xl font-bold">Christian Lauer</h1>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Capturing Your Perfect Moments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wedding photography that tells your unique story through timeless images
          </p>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Wedding Gallery</h2>
          {photos.length > 0 ? (
            <Gallery photos={photos} />
          ) : (
            <div className="text-center text-muted-foreground">
              <p>Add your photos to the &quot;public/photos&quot; directory to see them here.</p>
              <p className="text-sm mt-2">Supported formats: JPG, JPEG, PNG, WebP</p>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how we can capture your special day
          </p>
          <a
            href="mailto:contact@christianlauer.com"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Contact Me
          </a>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Christian Lauer Photography. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}