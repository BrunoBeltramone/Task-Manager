// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSessionProvider from "./ClientSessionProvider";
import NavbarComponent from "./components/navbar/page";
import FooterComponent from "./components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSessionProvider>
          <NavbarComponent />
          {children}
          <FooterComponent />
        </ClientSessionProvider>
      </body>
    </html>
  );
}