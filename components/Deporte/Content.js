import styled from "styled-components";
import Link from "next/link";

export default function Content({ SportContet }) {
  return (
    <ContentFull className="w-full">
      <SectionCards className="container flex flex-col flex-wrap gap-8 py-4 sm:flex-row">
        {SportContet.map((item) => (
          <>
            <Card img={item.image_url} className="relative w-full md:w-1/5">
              <ContentTextCard>
                <TitleCard>{item.title_content}</TitleCard>
                <TextCard>{item.subtitle_content}</TextCard>
                <ButtonLink href={`/Music/${item._id}`}>
                  <LinkText>Read more</LinkText>
                </ButtonLink>
              </ContentTextCard>
            </Card>
          </>
        ))}
        <Card
          img={
            "https://bolavip.com/__export/1628215718928/sites/bolavip/img/2021/08/05/lionel-messi-barcelona-celebra-050821-getty_crop1628215335550.jpg_242310155.jpg"
          }
          className="relative w-full md:w-1/5"
        >
          <ContentTextCard>
            <TitleCard>Lorem, ipsum</TitleCard>
            <TextCard>Lorem ipsum dolor sit amet consectetur.</TextCard>
            <ButtonLink href="/">
              <LinkText>Read more</LinkText>
            </ButtonLink>
          </ContentTextCard>
        </Card>
      </SectionCards>
    </ContentFull>
  );
}

const ContentFull = styled.section`
  background-color: #1e2726;
  color: #71c70f;
`;
const TexTitleContent = styled.h2`
  text-align: center;
  font-weight: 500;
  border: 1px solid white;
`;
const SectionCards = styled.main``;
const Card = styled.div`
  height: 250px;

  background-size: cover;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const ContentTextCard = styled.div`
  position: absolute;
  padding: 0.5rem;
  bottom: 0;
  width: 100%;
  /* 
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 0%,
    hsl(0 0% 0% / 1)
  ); */
  background: rgb(0, 0, 0);
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.14) 100%
  );
`;
const TitleCard = styled.h5`
  color: #71c70f;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.5rem;
  font-weight: 600;
  position: relative;
  /* border: 1px solid white; */
`;

const TextCard = styled.p`
  color: white;
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;
const ButtonLink = styled(Link)``;
const LinkText = styled.span`
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  color: #000;
  background: rgba(0, 200, 83, 0.8);
  transition: all 0.3s ease-in;
  &:hover {
    background: #00c853;
  }
`;
