import type { Metadata } from "next";
import "./globals.css";
import { inter, poppings } from "./ui/font";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QueryLayout from "./ui/QueryLayout";
// import { Providers } from "./_providers/Provider";

export const metadata: Metadata = {
  title: "CultureLancer",
  description: "culterlancer career job portal app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppings.className} antialiased`}>
        <ToastContainer />
        <QueryLayout>{children}</QueryLayout>
      </body>
    </html>
  );
}
