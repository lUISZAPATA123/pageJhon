import styled from "styled-components";
import Link from "next/link";
export default function Cards() {
  return (
    <>
      <ContentCards className="">
        <CardsStyles className="relative flex-col py-4 sm:flex-wrap sm:flex-row ">
          <Card className=" sm:w-1/5">
            <CardImage img="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/01/fornite-principal.jpg?resize=1024%2C576&ssl=1"></CardImage>
            <CardFooter>
              <TitleCard>Fornite </TitleCard>
              <SubtitleCard>Lorem ipsum dolor sit amet.</SubtitleCard>
            </CardFooter>
          </Card>
          <Card className=" sm:w-1/5">
            <CardImage img="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/01/fornite-principal.jpg?resize=1024%2C576&ssl=1"></CardImage>
            <CardFooter>
              <TitleCard>Fornite </TitleCard>
              <SubtitleCard>Lorem ipsum dolor sit amet.</SubtitleCard>
            </CardFooter>
          </Card>
          <Card className="sm:w-1/5 ">
            <CardImage img="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/01/fornite-principal.jpg?resize=1024%2C576&ssl=1"></CardImage>
            <CardFooter>
              <TitleCard>Fornite </TitleCard>
              <SubtitleCard>Lorem ipsum dolor sit amet.</SubtitleCard>
            </CardFooter>
          </Card>
          <Card className="sm:w-1/5 ">
            <CardImage img="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/01/fornite-principal.jpg?resize=1024%2C576&ssl=1"></CardImage>
            <CardFooter>
              <TitleCard>Fornite </TitleCard>
              <SubtitleCard>Lorem ipsum dolor sit amet.</SubtitleCard>
              <Button>
                <ButtonViewMore href="/juegos">Read more</ButtonViewMore>
              </Button>
            </CardFooter>
          </Card>
          <Card className="sm:w-1/5 ">
            <CardImage img="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/01/fornite-principal.jpg?resize=1024%2C576&ssl=1"></CardImage>
            <CardFooter>
              <TitleCard>Fornite </TitleCard>
              <SubtitleCard>Lorem ipsum dolor sit amet.</SubtitleCard>
            </CardFooter>
          </Card>
        </CardsStyles>
      </ContentCards>
    </>
  );
}
const CardsStyles = styled.main`
  display: flex;
  /* justify-content: space-around; */
  /* flex-wrap: wrap; */
  margin: 0 1rem;
`;

const ContentCards = styled.section``;
const Card = styled.div`
  height: 325px;
  background-color: #f9fafe;
  padding: 0.5rem;
  position: relative;
  border-radius: 20px;
  margin: 5px 10px 0 10px;
`;
const CardImage = styled.div`
  background-image: url("https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/01/fornite-principal.jpg?resize=1024%2C576&ssl=1");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 65%;
  border-radius: 20px;
`;
const CardFooter = styled.div`
  background: #f9fafe;
  width: 100%;
  padding-left: 1rem;
  margin-top: 20px;
`;
const TitleCard = styled.h6`
  color: black;
  font-weight: 600;
  font-size: 1.3rem;
  font-family: "Monserrat", sans-serif;
  font-style: italic;
`;
const SubtitleCard = styled.p`
  color: #636e72;
  font-weight: 600;
  margin-bottom: 5px;
`;
const Button = styled.button`
  background: #b5deff;
  padding: 0.3rem 0.5rem;

  font-size: 0.8rem;
`;
const ButtonViewMore = styled(Link)``;
