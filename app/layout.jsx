import "nextra-theme-docs/style.css";
// import "./globals.css";
import { Inter } from "next/font/google";
import { NextraConfig } from "nextra";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <div id="nextra-container">{children}</div>
      </body>
    </html>
  );
}
