import {
  IoGameControllerOutline,
  IoMusicalNotesOutline,
  IoDocumentTextOutline,
  IoFootball,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import styled, { css } from "styled-components";
import Link from "next/link";

export default function Articlemedium() {
  return (
    <div className="bg-white ">
      <div className="container flex flex-col flex-wrap py-10 xl:flex-row md:w-30 xl:w-full justify-evenly ">
        <SubCard className="flex flex-col items-center justify-center px-4 py-3 mb-4 rounded-md md:mb-0">
          <ContenIcon>
            <IconCard />
          </ContenIcon>
          <p className="mb-2 font-semibold">Games</p>
          <span className="mb-2 text-xs text-gray-600">
            Lorem, ipsum dolor.
          </span>
          <Link href="/juegos">
            <Ancle className="text-sm font-medium ">
              Explore now <Arrow />
            </Ancle>
          </Link>
        </SubCard>
        <SubCard className="flex flex-col items-center justify-center px-4 py-3 mb-4 rounded-md md:mb-0 ">
          <ContenIcon>
            <Sport />
          </ContenIcon>
          <p className="mb-2 font-semibold">Sports</p>
          <span className="mb-2 text-xs text-gray-600">
            Lorem, ipsum dolor.
          </span>
          <Link href="/deportes">
            <Ancle className="text-sm font-medium ">
              Explore now <Arrow />
            </Ancle>
          </Link>
        </SubCard>
        <SubCard className="flex flex-col items-center justify-center px-4 py-3 mb-4 rounded-md md:mb-0 ">
          <ContenIcon>
            <IconMusic />
          </ContenIcon>
          <p className="mb-2 font-semibold">Music</p>
          <span className="mb-2 text-xs text-gray-600">
            Lorem, ipsum dolor.
          </span>
          <Link href="/musica">
            <Ancle className="text-sm font-medium ">
              Explore now <Arrow />
            </Ancle>
          </Link>
        </SubCard>
        <SubCard className="flex flex-col items-center justify-center px-4 py-3 mb-4 rounded-md md:mb-0">
          <ContenIcon>
            <News />
          </ContenIcon>
          <p className="mb-2 font-semibold">News</p>
          <span className="mb-2 text-xs text-gray-600">
            Lorem, ipsum dolor.
          </span>
          <Link href="/noticias">
            <Ancle className="text-sm font-medium ">
              Explore now
              <Arrow />
            </Ancle>
          </Link>
        </SubCard>
      </div>
    </div>
  );
}

const SubCard = styled.div`
  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.61);
`;
const Icon = css`
  font-size: 1.5rem;
  color: #fff;
`;
const ContenIcon = styled.div`
  background: #2563eb;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const IconCard = styled(IoGameControllerOutline)`
  ${Icon};
`;
const IconMusic = styled(IoMusicalNotesOutline)`
  ${Icon};
`;
const News = styled(IoDocumentTextOutline)`
  ${Icon};
`;
const Sport = styled(IoFootball)`
  ${Icon};
`;
const Arrow = styled(IoArrowForwardCircleSharp)`
  font-size: 1.025rem;
  margin-left: 5px;
`;

const Ancle = styled.span`
  color: #2563eb;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: #dc2626;
  }
`;
