import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/app/components/common/ThemeProvider";

export const metadata: Metadata = {
  title: "Sabapathi P | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}