"use client";

import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <AuthProvider>
          <body
            className={`${rubik.className} bg-conference_primary-foreground `}
          >
            {children}
            <Toaster />
          </body>
        </AuthProvider>
      </Provider>
    </html>
  );
}
