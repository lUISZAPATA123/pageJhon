import styled from "styled-components";
import Content from "./Content";
export default function Index({ SportContet }) {
  return (
    <>
      <HeaderPoligon>
        <ContentText>
          <h2>lorem, ipsum </h2>
          <h1>Lorem, ipsum.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            vero neque dolorem? Laudantium eligendi
          </p>
        </ContentText>
        <ContentImg>
          <img src="/crossffit.png" alt="Crossfit" />
        </ContentImg>
      </HeaderPoligon>
      <ContentPublicidad>
        Logos de Marcas Aupsticiantes si desean se va poner aqui en este
        recuadro
      </ContentPublicidad>
      <Content SportContet={SportContet} />
    </>
  );
}

const HeaderPoligon = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  background: #1e2726;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 90vh;
    background-color: #71c70f;
    clip-path: polygon(78% 0, 100% 0%, 100% 100%, 0 100%);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 90vh;
    background-color: #93b93f;
    clip-path: polygon(78% 0, 85% 0%, 40% 100%, 0 100%);
    z-index: 1;
    opacity: 0.8;
    /* clip-path: polygon(80% 0, 93% 0, 69% 100%, 46% 100%); */
  }
`;
const ContentText = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 50px;
  padding: 0 0 0 1rem;
  h2 {
    position: absolute;
    top: 32%;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
  }
  h1 {
    position: absolute;
    top: 40%;
    color: #fff;
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 800;
  }
  p {
    position: absolute;
    top: 60%;
    color: #fff;
    font-weight: 100;
    letter-spacing: 1.5px;
  }
`;
const ContentImg = styled.div`
  position: absolute;
  top: 60px;
  right: 20%;
  width: 50%;
  height: 100%;
  z-index: 2;
`;

const ContentPublicidad = styled.div`
  background-color: #1e2726;
  height: 5rem;
  width: 100%;
  color: #fff;
`;
