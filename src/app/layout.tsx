import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import SocialList from "@/components/SocialList/SocialList";
import CryptoPrices from "@/components/CryptoPrices/CryptoPrices";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dust City | save this world & revive civilization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-custom-color-bg text-custom-color-font font-supermolot `}
      >
        <div className="flex flex-col max-w-screen-xl mx-auto my-0 p-5 ">
          <header className="flex justify-between items-center py-2 gap-4">
            <Image src="./logo.svg" alt="logo" width={150} height={50} />
            <NavBar />
            <div className=" hidden md:block">
              <SocialList />
            </div>
          </header>
          {/* @ts-expect-error Async Server Component */}
          <CryptoPrices />

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
