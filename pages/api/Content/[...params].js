import db from "../../../utils/ConnectDb";
import nc from "next-connect";

db();
const hanlder = nc();

hanlder.get(async (req, res) => {
  //   const { id } = req.query;
  //   console.log(id);
  console.log(req.query);
  return res.status(200).json({
    success: true,
    message: "Ok",
  });
});

export default hanlder;
