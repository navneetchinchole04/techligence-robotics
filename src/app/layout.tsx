import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import InteractiveBot from "@/components/InteractiveBot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          {children}
          <InteractiveBot />
        </ThemeProvider>
      </body>
    </html>
  );
}