import Image from "next/image";
import styled from "styled-components";

export default function SportId({ data }) {
  return (
    <Section className="mt-20">
      <div className="container flex flex-wrap w-full py-24 mx-auto">
        <img
          src={data.image_url}
          alt={data.title_content}
          className="object-cover w-96"
        />
        <div className=" md:pl-6">
          <h2 className="mb-2 text-2xl font-medium text-white sm:text-3xl title-font md:w-2/5">
            {data.title_content}
          </h2>
          <h4 className="mb-2 text-xl text-white ">{data.subtitle_content}</h4>
          <Contenido>{data.Content_text}</Contenido>
        </div>
      </div>
    </Section>
  );
}

SportId.getInitialProps = async (ctx) => {
  console.log(ctx.query);
  const { id } = ctx.query;
  const res = await fetch(`http://localhost:3000/api/Content/${id}`);
  const data = await res.json();
  console.log(data);
  return { data: data.OneContent };
};

const Section = styled.section`
  width: 100vw;
  background-color: #374151;
`;

const Contenido = styled.p`
  width: 200px;
  border: 1px solid blue;
`;
