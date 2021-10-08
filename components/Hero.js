
import styled, { css } from "styled-components";


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
