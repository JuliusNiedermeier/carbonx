import { Header } from "@/common/components/Header";
import "@/common/styles/theme.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="sticky top-0 z-10">
            <Header />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
