import "./globals.css";
import { satoshi, sourceSans } from "./fonts";

export const metadata = {
  title: "Med Method",
  description: "Conception et développement de sites web performants.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
