import ContentNew from "../components/Content/FormContent";
import styled from "styled-components";
export default function NewContent(props) {
  return (
    <Content>
      <ContentNew nameCategoria={props.data} />
    </Content>
  );
}
const Content = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/Categories");
  const data = await res.json();

  return {
    props: {
      data: data.categori,
    },
  };
}
