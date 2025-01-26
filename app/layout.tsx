import { Toaster } from 'sonner';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Түрээсийн хэрэглэгчийн систем',
  description:
    'Хэрэглэгч тухайн апп-аараа түрээсийн төлбөрөө хянах, төлөх, санал хүсэлт илгээх боломжтой.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">
        <main>{children}</main>
        <Toaster />
      </body>
      <Analytics />
    </html>
  );
}
