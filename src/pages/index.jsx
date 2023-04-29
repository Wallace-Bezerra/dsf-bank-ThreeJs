import { Expirience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/NavBar";
import { Resources } from "@/components/Resources";
import { Testimonials } from "@/components/Testimonials";
import { Rewards } from "@/components/Rewards";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>DSF Bank</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <main>
        <Expirience />
        <Resources />
        <Rewards />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
