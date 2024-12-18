import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header/Header';
import { EmailPopup } from '@/components/marketing/EmailPopup/EmailPopup';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tienda de Zapatos - Tu Estilo, Tu Camino',
  description: 'Descubre nuestra colección exclusiva de calzado',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <EmailPopup />
        <Toaster />
      </body>
    </html>
  );
}