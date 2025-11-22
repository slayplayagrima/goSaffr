import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "GoSaffr – India’s Trusted Cab Service",
  description: "Smart, safe, and affordable cab service for India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
