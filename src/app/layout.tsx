import { Viewport } from 'next';
import type { Metadata } from 'next';
import '../styles/globals.scss';
import { inter } from '@/lib/font';
import SmoothScrolling from '@/components/SmoothScrolling';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Cursor } from '@/components/cursor/Cursor';

export const viewport: Viewport = {
    interactiveWidget: 'resizes-content'
};

export const metadata: Metadata = {
    title: "CipherNet",
    description: "La cybersécurité de demain",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <SmoothScrolling>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <Cursor />
                </SmoothScrolling>
            </body>
        </html>
    );
}
