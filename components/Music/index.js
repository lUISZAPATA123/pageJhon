import styled from "styled-components";
import {
  IoMusicalNotesOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

import HeaderMusics from "./HeaderMusic";
export default function Index({ MusicContent }) {
  return (
    <div>
      <HeaderMusics />
      <HeaderMusic>
        <section className="container flex flex-col flex-wrap gap-8 py-4 mb-4 sm:flex-row">
          {MusicContent.length === 0 ? (
            <>
              <h2>Loading ....</h2>
            </>
          ) : (
            <>
              {MusicContent.map((item) => (
                <>
                  <ContentImages className="relative w-full md:w-1/5">
                    <Image
                      src={item.image_url}
                      layout="fill"
                      alt="Image Music"
                    />
                    <DatosImg>
                      <ContentText>
                        <ConteSubText>
                          <IconMusic />
                          <ContentFlexCol>
                            <Author>{item.title_content} </Author>
                            <TextMusic>{item.subtitle_content}</TextMusic>
                          </ContentFlexCol>
                        </ConteSubText>
                        <Link href={`/Sport/${item._id}`}>
                          <a>
                            <IconSmallSee />
                          </a>
                        </Link>
                      </ContentText>
                    </DatosImg>
                  </ContentImages>
                </>
              ))}
            </>
          )}
        </section>
      </HeaderMusic>
    </div>
  );
}

const ContentImages = styled.div`
  height: 250px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const HeaderMusic = styled.section`
  background-color: #1e2831;
`;

const DatosImg = styled.div`
  position: absolute;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    184deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  transition: all 0.9s ease;
  &:hover {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      184deg,
      rgba(0, 0, 0, 0.4) 10%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  height: 3rem;
  bottom: 0px;
  width: 100%;
  color: white;
`;

const ContentText = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
`;
const IconMusic = styled(IoMusicalNotesOutline)`
  color: white;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;
const ConteSubText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.5rem;
`;
const Author = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;
const TextMusic = styled.span`
  color: white;
  font-size: 0.8rem;
`;

const ContentFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconSmallSee = styled(IoArrowForwardCircleOutline)`
  font-size: 1.5rem;
  color: white;
  align-self: flex-end;
  margin-right: 0.4rem;
  cursor: pointer;
`;
