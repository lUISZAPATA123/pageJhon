import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaTwitch,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

export default function Hero() {
  return (
    <div className="mt-16">
      <HeaderHero img="/cdho.jpg">
        {/* <img src="/Hero2.png" alt="Image Hero" /> */}
      </HeaderHero>
    </div>
  );
}

const HeaderHero = styled.div`
  height: 60vh;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.img});
  @media screen and (max-width: 768px) {
    background-size: contain;
    height: 166px;
  }
`;

const HeaderText = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    width: 55%;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 2.3rem;
    }
  }
  span {
    font-size: 3rem;
    font-weight: 700;
    color: #c62828;
    line-height: 1.2;
    width: 50%;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 2.3rem;
    }
  }
  p {
    color: black;
    width: 40%;
    letter-spacing: 1px;
  }
`;
const TextDegradient = styled.span`
  background: #cf1919;
  background: -webkit-linear-gradient(to right, #cf1919 0%, #ffffff 100%);
  background: -moz-linear-gradient(to right, #cf1919 0%, #ffffff 100%);
  background: linear-gradient(to right, #cf1919 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;
const ContainerIcons = styled.div`
  position: absolute;
  bottom: 20px;
  left: 124px;
  display: flex;
`;
const Icons = css`
  color: #94a3b8;
  font-size: 1.5rem;
  margin-right: 1rem;
  &:hover {
    color: #64748b;
    cursor: pointer;
  }
`;

const IconFacebook = styled(FaFacebookF)`
  ${Icons};
`;

const IconYoutube = styled(FaYoutube)`
  ${Icons};
`;
const IconInstagram = styled(FaInstagram)`
  ${Icons};
`;
const IconTwitch = styled(FaTwitch)`
  ${Icons};
`;
const IconDiscord = styled(FaDiscord)`
  ${Icons};
`;
// {/* <HeaderText className="container">
//   {/* <span>Lorem, ipsum dolor.</span> */}
//   <h2>
//     {" "}
//     <span>¡Encontrarás las </span>
//     <TextDegradient>mejores novedades </TextDegradient>
//     de entretenimiento!
//   </h2>
//   {/* <p>¡Encontrarás las mejores novedades de entretenimiento!</p> */}
//   <ContainerIcons>
//     <Link href="https://www.facebook.com/CDHO-Entertainment-107632545009592/">
//       <a target="_blank">
//         <IconFacebook />
//       </a>
//     </Link>
//     <Link href="https://instagram.com/cdho.entertainment?utm_medium=copy_link">
//       <a target="_blank">
//         <IconInstagram />
//       </a>
//     </Link>
//   </ContainerIcons>
// </HeaderText>; */}
