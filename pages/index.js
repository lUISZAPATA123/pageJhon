import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Data from "../utils/Data";
import Img from "next/image";
import Hero from "../components/Hero";
import ArticleMedium from "../components/articlemedium";
import MusicSection from "../components/Music";
import Deporte from "../components/Deporte";
import SectionGames from "../components/Games/index";
import db from '../utils/ConnectDb'
import Categorias from '../model/CategoriesModel'
// export default function Home({ Music, Noticias, Sports, Games }) {

export default function Home({ Music, Noticias, Sports, Games }) {
return (
    <div>
      <Head>
        <title>Home | Jhon C</title>
        <meta name="description" content="Site Web Jhon C" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500;1,800&display=swap"
          rel="stylesheet"
        />
        <script
          data-ad-client="ca-pub-9485069881520994"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <Hero />
      <ArticleMedium />
      <div>
        <GamesSection>
          <SectionGames Games={Games} />
        </GamesSection>

        <MusicSection MusicContent={Music} />
        

        <Deporte SportContet={Sports} />

        <div className="flex bg-gray-800">
          <div className="mx-10 mansonry">
            {Data.map((items, index) => (
              <>
                <div
                  key={index}
                  className="mb-5 overflow-hidden bg-white border-b-4 border-green-500 break-inside"
                >
                  <Img
                    src={items.image}
                    alt={items.title}
                    width="400"
                    height="256"
                    className="object-cover w-full h-32 sm:h-48 md:h-64"
                  />
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <span className="p-1.5 mb-1 text-sm font-semibold leading-none text-green-500 bg-green-200 rounded-full">
                        News
                      </span>
                      <span className="mb-1 text-sm font-semibold leading-none text-gray-600 ">
                        {items.date}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold leading-tight sm:leading-normal">
                      {items.title}
                    </h3>
                    <p className="mb-2 text-base text-gray-600">
                      {items.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Link href="/about">About</Link>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // const res = await fetch("http://localhost:3000/api/Categories");
    // const data = await res.json();
    await db.connect();
    var data = await Categorias.find();
    if(!data) {
      // data = [{_id:"loremasdasasdas",name:"Musica"}];
      return{
        props:{
          Noticias: [],
          Music: [],
          Games: [],
          Sports: []
        }
      }
    }
    console.log(data)
    const text = await Promise.all(
      data.map(async (item) => {
        const response = await fetch(
          `http://localhost:3000/api/ContentwithCategory/${item._id}`
        );
        const res = await response.json();
        return res.GetContent;
      })
    );

    return {
      props: {
        Noticias: text[0],
        Music: text[1],
        Games: text[2],
        Sports: text[3],
      },
    };
  } catch (error) {
    console.log(error);
    return{
      props:{
        Noticias: text[0],
        Music: [],
        Games: [],
        Sports: []
      }
    }
  }
}

const GamesSection = styled.section`
  background-color: #1e252d;
`;
// console.log(text[3]);
// //music
// const resMusic = await fetch(
//   "http://localhost:3000/api/ContentwithCategory/614035487acab0df16f7cb85"
// );
// const dataMusic = await resMusic.json();
// // Sport
// const resSport = await fetch(
//   "http://localhost:3000/api/ContentwithCategory/614035f57acab0df16f7cb8f"
// );
// const dataSport = await resSport.json();

// // Noticias
// const resNoticias = await fetch(
//   "http://localhost:3000/api/ContentwithCategory/614035f57acab0df16f7cb8f"
// );
// const dataNoticias = await resNoticias.json();
