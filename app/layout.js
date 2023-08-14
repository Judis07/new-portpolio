import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Arvind M",
  description: "Senior Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <main className="p-4 h-screen max-md:h-auto">{children}</main>
      </body>
    </html>
  );
}
