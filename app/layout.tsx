import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pastillasafi — Maison de la Pastilla à Safi',
  description:
    'Spécialiste de la Pastilla traditionnelle et aux fruits de mer à Safi (Rue 187). Configurateur de plateaux et pré-commande directe sur WhatsApp.',
  openGraph: {
    title: 'Pastillasafi — Maison de la Pastilla à Safi',
    description:
      'Spécialiste de la Pastilla traditionnelle et aux fruits de mer à Safi (Rue 187). Configurateur de plateaux et pré-commande directe sur WhatsApp.',
    type: 'website',
    locale: 'fr_MA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pastillasafi — Maison de la Pastilla à Safi',
    description:
      'Spécialiste de la Pastilla traditionnelle et aux fruits de mer à Safi (Rue 187). Configurateur de plateaux et pré-commande directe sur WhatsApp.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-ivory-silk font-sans text-espresso-ink antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
