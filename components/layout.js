import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="font-Poppins ">
        <Header />

        {children}
        <Footer />
      </main>
    </>
  );
}
