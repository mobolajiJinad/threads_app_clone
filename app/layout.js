import { Inter } from "next/font/google";

import "./globals.css";
import Topbar from "@/components/general/Topbar";
import LeftSidebar from "@/components/general/LeftSidebar";
import RightSidebar from "@/components/general/RightSidebar";
import Bottombar from "@/components/general/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads by meta app clone",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />

        <main className="flex flex-row">
          <LeftSidebar />

          <section className="flex min-h-screen flex-1 flex-col items-center bg-black px-6 pb-10 pt-16 max-md:pb-20 sm:px-10">
            <div className="w-full max-w-4xl">{children}</div>
          </section>

          <RightSidebar />
        </main>

        <Bottombar />
      </body>
    </html>
  );
}
