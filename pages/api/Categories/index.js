import nc from "next-connect";
import Categori from "../../../model/CategoriesModel";
import db from "../../../utils/ConnectDb";
db();
const handler = nc();

handler.get(async (req, res) => {
  const { name } = req.query;
  console.log(req.query);
  // console.log(Object.keys(req.query).length === 0);
  if (Object.keys(req.query).length === 0) {
    const data = await Categori.find();
    return res.status(200).json({
      success: true,
      message: "Ok",
      categori: data,
    });
  }
  const getCategory = await Categori.find({ name: name });
  return res.status(200).json({
    success: true,
    message: "Ok",
    OneCategory: getCategory,
  });
});

// create Catogire
handler.post(async (req, res) => {
  const { name } = req.body;
  const NewCategori = new Categori({
    name,
  });
  await NewCategori.save();
  return res.status(200).json({
    success: true,
    message: "Ok",
  });
});

export default handler;
