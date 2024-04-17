import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Break task down",
  description:
    "Help you setting up your task guideline and move on each step until finish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={poppins.className}>
        <AuthProvider>
          {/* <NavBar /> */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
