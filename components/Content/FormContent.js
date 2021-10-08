import React, { useState } from "react";

export default function FormContent(props) {
  const [media, setMedia] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [listCategori, setListCategori] = useState([{
    name:"Music"
  }]);
  const FetchData = async () => {
    const res = await fetch("http://localhost:3000/api/Categories");
    const data = await res.json();
    setListCategori(data);
  };
  // FetchData();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const MediaUrl = await uploadImageContent();
      const res = await fetch("http://localhost:3000/api/Content", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title_content: title,
          subtitle_content: subtitle,
          Content_text: content,
          category: category,
          urlImage: MediaUrl,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setMedia(false);
        setTitle(" ");
        setSubtitle(" ");
        setContent(" ");
        setContent(" ");
        setCategory(" ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function uploadImageContent() {
    const cloud_name = "ingenio";
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", "im79bu0k");
    data.append("cloud_name", "ingenio");
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const response2 = await response.json();
    return response2.url;
  }

  function ViewImage(e) {
    if (e.target.files.length > 0 && e.target.files.length < 2) {
      const image = e.target.files[0];
      const file = new FileReader();
      const events = (val) => {
        const img = document.getElementById("preview");
        img.setAttribute("src", val.currentTarget.result);
      };
      file.addEventListener("load", events);
      file.readAsDataURL(image);
    }
  }
  return (
    <div className="w-9/12 max-w-lg mt-40">
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="titleContent"
          >
            Choose Category
          </label>
          <select
            className="w-full px-3 py-2 bg-white border rounded outline-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            {props.nameCategoria.map((item, index) => (
              <option key={index} className="py-1" value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="titleContent"
          >
            Title Content
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="titleContent"
            type="text"
            placeholder="Content Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="subtitle_content"
          >
            Sub title
          </label>
          <input
 className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
 id="subtitle_content"
 type="text"
 placeholder="Sub title Content"
 value={subtitle}
 onChange={(e) => {
   setSubtitle(e.target.value);
 }}
/>
</div>
<div className="mb-6">
<label
 className="block mb-2 text-sm font-bold text-gray-700"
 htmlFor="subtitle_content"
>
 Text Content
</label>
<textarea
 className="w-full px-3 py-2 border rounded-md resize-y focus:outline-none"
 value={content}
 onChange={(e) => setContent(e.target.value)}
></textarea>
</div>
<div className="mb-4">
<div className="flex items-center justify-center w-full">
 <input
   type="file"
   accept="image/*"
   onChange={(e) => {
     ViewImage(e);
     setMedia(e.target.files[0]);
   }}
   className="cursor-pointer "
 />
</div>
</div>
{media ? (
<div className="w-full">
 <img id="preview" alt="image" />
</div>
) : null}
<div className="flex items-center justify-between">
<button
 className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
 type="submit"
>
 Create
</button>
</div>
</form>
</div>
);
}

