import localFont from "next/font/local";
import Provider from "./Provider";
import "./globals.css";
import "swiper/css/bundle";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "الرئيسية - Arabhardware",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <link rel="icon" href="logo.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Nav />
          <main className="bg-primary px-10 pt-10 w-full">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
