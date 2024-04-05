import Corporate from "@/components/Corporate";
import HeaderBar from "@/components/HeaderBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderBar />
      <Corporate />
    </>
  );
}
