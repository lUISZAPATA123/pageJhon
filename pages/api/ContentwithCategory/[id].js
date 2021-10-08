import db from "../../../utils/ConnectDb";
import nc from "next-connect";
import Content from "../../../model/ContentModel";


const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const { id } = req.query;
  const GetContent = await Content.find({ category: id }).populate("category");
  await db.disconnect();
  return res.status(200).json({
    success: true,
    message: "Ok",
    GetContent,
  });
});

export default handler;
