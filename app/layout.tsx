import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

function randomBackground() {
    const backgrounds = ["bg-pizza-1", "bg-pizza-2", "bg-pizza-3", "bg-pizza-4", "bg-pizza-5"];
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

export const metadata: Metadata = {
    title: "Pizza dough calculator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${randomBackground()} text-slate-100 font-extralight ${inter.className}`}
            >
                {children}
            </body>
        </html>
    );
}
