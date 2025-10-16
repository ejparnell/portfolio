import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    style: ['normal', 'italic'],
});

export const metadata: Metadata = {
    title: 'Beth Parnell Portfolio',
    description: 'A portfolio showcasing the projects and skills of Beth Parnell.',
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={roboto.variable}>
                {children}
            </body>
        </html>
    );
}
