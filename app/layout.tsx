import type { Metadata } from "next";
// import { Geist, Geist_Mono, Inter } from "next/font/google";
// import { Inter } from "next/font/google";
// import '@carbon/react/css/carbon-components.min.css';

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

import "./globals.scss";
// import '../src/login.scss';
// import '../src/styles/dashboard.scss';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export const metadata: Metadata = {
  title: "AVM",
  description: "NextGen AVM 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={inter.variable}>
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
