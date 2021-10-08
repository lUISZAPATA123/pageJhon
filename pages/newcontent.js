import ContentNew from "../components/Content/FormContent";
import styled from "styled-components";
import Categoria from '../model/CategoriesModel'
import db from '../utils/ConnectDb'

function NewContent(props) {
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

export async function getServerSideProps() {
  // const res = await fetch("http://localhost:3000/api/Categories");
  // const data = await res.json();
  await db.connect();
  var categoria = await Categoria.find();
  if (!categoria) {
    categoria = {name: "Games"}
  }
  await db.disconnect();

  return {
    props:{
      data: categoria
    }
  }
  
}
export default NewContent;
