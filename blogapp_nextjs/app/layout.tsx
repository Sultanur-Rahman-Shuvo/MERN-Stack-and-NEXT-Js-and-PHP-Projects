import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteConfig from "@/config/site";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <ScrollArea className="scroll-area h-[500px] w-full overflow-auto">
            {children}
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
