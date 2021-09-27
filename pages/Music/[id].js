import Image from "next/image";

export default function SportId({ data }) {
  return (
    <div className="mt-20">
      <section className="h-full text-gray-400 bg-gray-900 body-font">
        <div className="container flex flex-wrap py-24 mx-auto">
          <img
            src={data.image_url}
            alt={data.title_content}
            className="object-cover w-96"
          />
          <div className="md:w-3/5 md:pl-6">
            <h2 className="mb-2 text-2xl font-medium text-white sm:text-3xl title-font md:w-2/5">
              {data.title_content}
            </h2>
            <h4 className="mb-2 text-xl text-white ">
              {" "}
              {data.subtitle_content}{" "}
            </h4>
            <p className="text-base leading-relaxed">{data.Content_text}</p>
          </div>
        </div>
      </section>
    </div>
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
