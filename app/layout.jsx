import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import Navbar from "../Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FullStack Art Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div>
            <Navbar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
