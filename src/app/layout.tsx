import type { Metadata } from "next";
import { Nunito_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { TopAppbar } from "@/components/TopAppbar";
import { Footer } from "@/components/Footer";
import Provider from "./provider";

const nohito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={nohito.className}>
                <Provider>
                    <TopAppbar />
                    {children}
                    {/* <Footer /> */}
                </Provider>
            </body>
        </html>
    );
}