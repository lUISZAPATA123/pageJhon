import db from "../../../utils/ConnectDb";
import nc from "next-connect";
import Content from "../../../model/ContentModel";

db();
const handler = nc();

handler.get(async (req, res) => {
  const { id } = req.query;
  const GetContent = await Content.find({ category: id }).populate("category");
  return res.status(200).json({
    success: true,
    message: "Ok",
    GetContent,
  });
});

export default handler;
