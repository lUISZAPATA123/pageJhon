import nc from "next-connect";
import db from "../../../utils/ConnectDb";
import Content from "../../../model/ContentModel";
db();

const handler = nc();

handler.get(async (req, res) => {
  const GetContent = await Content.find().populate("category");
  return res.status(200).json({
    success: true,
    message: "Ok",
    Content: GetContent,
  });
});

handler.post(async (req, res) => {
  const { title_content, subtitle_content, Content_text, urlImage, category } =
    req.body;
  if (
    !title_content &&
    !subtitle_content &&
    !Content_text &&
    !urlImage &&
    !category
  ) {
    return res.status(400).json({
      success: false,
      message: "Err data incomplet",
    });
  }
  const NewContent = new Content({
    title_content,
    subtitle_content,
    Content_text,
    image_url: urlImage,
    category: category,
  });
  await NewContent.save();
  return res.status(200).json({
    success: true,
    message: "Ok",
  });
});

export default handler;

// import Content from "../../../model/ContentModel";
// import connectDb from "../../../utils/ConnectDb";

// connectDb();

// const Contentenido = async (req, res) => {
//   switch (req.method) {
//     case "GET":
//       await getContent();
//       break;
//     case "POST":
//       await CreateContent(req, res);
//       break;
//   }
// };

// export default Contentenido;

// class APIfeatures {
//   constructor(query, queryString) {
//     this.query = query;
//     this.queryString = queryString;
//   }
//   filtering() {
//     const queryObj = { ...this.queryString };
//     const excludeFields = ["page", "sort", "limit"];
//     excludeFields.forEach((el) => delete queryObj[el]);

//     if (queryObj.category !== "all")
//       this.query.find({ category: queryObj.category });
//     if (queryObj.title !== "all")
//       this.query.find({ title: { $regex: queryObj.title } });

//     this.query.find();
//     return this;
//   }

//   sorting() {
//     if (this.queryString.sort) {
//       const sortBy = this.queryString.sort.split(",").join("");
//       this.query = this.query.sort(sortBy);
//     } else {
//       this.query = this.query.sort("-createdAt");
//     }
//     return this;
//   }

//   paginating() {
//     const page = this.queryString.page * 1 || 1;
//     const limit = this.queryString.limit * 1 || 6;
//     const skip = (page - 1) * limit;
//     this.query = this.query.skip(skip).limit(limit);
//     return this;
//   }
// }

// const getContent = async (req, res) => {
//   try {
//     const features = new APIfeatures(Content.find(), req.query)
//       .filtering()
//       .sorting()
//       .paginating();
//     const content = await features.query;

//     res.json({
//       status: "succes",
//       result: content.length,
//       content,
//     });
//   } catch (err) {
//     if (err) return res.status(500).json({ err: err.message });
//   }
// };

// const CreateContent = async (req, res) => {
//   try {
//     //   const result = await auth(req, res);
//     //   if (result.role !== "admin")
//     //     return res.status(400).json({ err: "Authentication is not valid." });
//     const { name_content, Sub_Content, Category } = req.body;
//     if ((!name_content, !Sub_Content, !Category)) {
//       return res.status(400).json({ err: "Please  add  all the fields. " });
//     }
//     const newContent = new Content({
//       name_content,
//       Sub_Content,
//       Category,
//     });

//     await newContent.save();

//     res.json({ msg: "Success! Created a new Content " });
//   } catch (error) {
//     return res.status(500).json({ err: error.message });
//   }
// };
