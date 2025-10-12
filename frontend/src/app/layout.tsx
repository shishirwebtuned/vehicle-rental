import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Nunito } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./provider";
import { Toaster } from "react-hot-toast";
import ClientLayout from "@/components/shared/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-geist-merriw",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-geist-nunito",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vehicle Rental",
  description: "Vehicle Rental",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`scroll-smooth ${geistSans.variable} ${nunito.variable} ${merriweather.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                borderRadius: '8px',
                padding: '12px 16px',
                fontWeight: '500',
              },

              success: {
                style: {
                  background: '#d1fae5',
                  color: '#065f46',
                },
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#ecfdf5',
                },
              },

              error: {
                style: {
                  background: '#fee2e2',
                  color: '#991b1b',
                },
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fef2f2',
                },
              },
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
