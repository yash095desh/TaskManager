import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskMate",
  description: "Manage your task effeciently",
  icon : '/next.svg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="logo.png" />
      <body className={`${inter.className} `}>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
