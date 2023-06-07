import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
