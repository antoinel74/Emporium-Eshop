import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Navbar, Foot } from "@/components";

const inter = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emporium Eshop",
  description: "Eshop dedicated to freeride skiing and snowboarding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Foot />
        <div id="portal"></div>
      </body>
    </html>
  );
}
