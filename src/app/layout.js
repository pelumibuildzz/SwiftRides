import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Swift Rides - Airport to Covenant University Shuttle Service",
  description:
    "Your reliable shuttle service for a smooth ride to Covenant University.",
  verification: {
    google: "_ziANvXR0i7HJkWUfVLgyILoNdIPoJhpjNfa-GCbRXA",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>{children}</body>
    </html>
  );
}
