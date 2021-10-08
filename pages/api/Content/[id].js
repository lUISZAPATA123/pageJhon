import connectDb from "../../../utils/ConnectDb";
import Content from "../../../model/ContentModel";
import nc from "next-connect";

connectDb();

const handler = nc();

// get One content specif

handler.get(async (req, res) => {
  const { id } = req.query;
  const GetOneContent = await Content.findById(id);

  return res.status(200).json({
    success: true,
    message: "Ok",
    OneContent: GetOneContent,
  });
});

// update por one Element
handler.put(async (req, res) => {
  await db.connect();
  const { id } = req.query;
  const { title_content, subtitle_content, Content_text } = req.body;
  await Content.findByIdAndUpdate(
    { id },
    {
      title_content,
      subtitle_content,
      Content_text,
    }
  );
  return res.status(200).json({
    success: true,
    message: "Ok",
  });
});

export default handler;

// import connectDb from "../../../utils/ConnectDb";
// import Content from "../../../model/ContentModel";

// connectDb();

// const IdContent = async (req, res) => {
//   switch (req.method) {
//     case "GET":
//       await getContent(req, res);
//       break;
//     case "PUT":
//       await updateContent(req, res);
//       break;
//     case "DELETE":
//       await deleteProduct(req, res);
//       break;
//   }
// };

// export default IdContent;

// const getContent = async (req, res) => {
//   try {
//     const { id } = req.query;
//     const content = await Content.findById(id);
//     if (!content)
//       return res.status(400).json({ err: "This product not exist." });

//     res.json({ content });
//   } catch (error) {
//     return res.status(500).json({ err: error.message });
//   }
// };

// const updateContent = async (req, res) => {
//   try {
//     // const result = await auth(req, res);
//     // if (result.role !== "admin")
//     //   return res.status(400).json({ err: "Authentication is not valid." });

//     const { id } = req.query;
//     const { name_content, Sub_Content, Category } = req.body;
//     if ((!name_content, !Sub_Content, !Category))
//       return res.status(400).json({ err: "Please add all the fields. " });
//     await Content.findOneAndUpdate(
//       { _id: id },
//       {
//         name_content,
//         Sub_Content,
//         Category,
//       }
//     );
//     res.json({ msg: "Succes! update a content." });
//   } catch (error) {
//     return res.status(500).json({ err: error.message });
//   }
// };

// const deleteProduct = async (req, res) => {
//   // const result = await auth(req, res);

//   // if (result.role !== "admin")
//   //   return res.status(400).json({ err: "Authentication is not valid." });

//   const { id } = req.query;
//   await Content.findByIdAndDelete(id);
//   res.json({ msg: "Dele a content. " });

//   try {
//   } catch (error) {
//     return res.status(500).json({ err: error.message });
//   }
// };
