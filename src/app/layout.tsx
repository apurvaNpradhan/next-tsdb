import "@/styles/globals.css";
import AuthButton from "@/components/header-auth";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Next TSDB",
  description: "NextJS starter TSDB",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <AuthButton />

          {children}
        </Providers>
      </body>
    </html>
  );
}
