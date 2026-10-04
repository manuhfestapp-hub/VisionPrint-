import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VisionPrint — AI Vision Board Posters',
  description:
    'AI designs a personalized vision board from your dreams and photos — printed and shipped to your door. Free to start, no payment until you approve.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
