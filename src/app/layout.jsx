import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "React India",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${rubik.className} bg-conference_primary-foreground `}
        >
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
