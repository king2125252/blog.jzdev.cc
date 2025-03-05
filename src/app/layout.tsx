import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jack's Blog",
  description: "This is my blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="./src/assets/favorite.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-5">
          <Navbar />
          <div className="p-[2%]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
