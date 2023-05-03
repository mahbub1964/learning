import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import MarketPage from "@/modules/MarketPage/MarketPage";
import { avatars } from "@/mock/Avatar.mock";
import { Avatar } from "@/interfaces/Avatar.interface";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  avatars: Avatar[];
}

const Home = ({ avatars }: Props) => {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Header />
      <MarketPage avatars={avatars} />
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: { avatars },
  };
}

export default Home;
