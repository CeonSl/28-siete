import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { bitter } from "./fonts";
import Footer from "./components/footer";
import FooterDecoration from "./components/footerDecoration";
import Script from 'next/script'
import styles from '../app/page.module.css'

export const metadata: Metadata = {
  title: "28Siete",
  description: "Agencia de Publicidad - 28Siete",
  icons: {
    icon: './28Siete_negro.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={bitter.className}>
        <div id="pageLoader" className={styles.pageLoader}></div>
        <Header />
        {children}
        <FooterDecoration />
        <Footer />
        <Script src='https://smtpjs.com/v3/smtp.js' />

      </body>
    </html>
  );
}
