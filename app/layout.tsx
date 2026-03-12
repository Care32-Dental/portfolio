import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const brocolageGrotesk = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Care 32 Dental | Bhaktapur",
  description: "Best Dental Clinic in Bhaktapur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brocolageGrotesk.className} antialiased`}>
        <div className="mx-auto w-full max-w-500">
          <main>{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
