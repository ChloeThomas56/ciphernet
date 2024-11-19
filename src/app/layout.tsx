import type { Metadata } from "next";
import "../styles/globals.scss";
import { inter } from '@/lib/font';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
