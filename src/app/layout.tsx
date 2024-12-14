import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '500', '800'],
  variable: '--font-inter', // opcional si quieres usar la variable CSS
});

export const metadata: Metadata = {
  title: 'TagssPass',
  description: 'Bookmark and Password Manager',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <main>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
