import nc from "next-connect";
import Categori from "../../../model/CategoriesModel";
import db from "../../../utils/ConnectDb";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect()
  const { name } = req.query;
  // console.log(name);
  // const GetCategori = await Categori.findById(id);
  return res.status(200).json({
    success: true,
    message: "Ok",
    // Categori: GetCategori,
  });
});

export default handler;
