import nc from "next-connect";
import Categori from "../../../model/CategoriesModel";
import db from "../../../utils/ConnectDb";

const handler = nc();

// handler.get(async (req, res) => {
//   const { name } = req.query;
//   console.log(req.query);
//   // console.log(Object.keys(req.query).length === 0);
//   try {
//     if (Object.keys(req.query).length === 0) {
     
//       const data = await Categori.find();
//       if(!data){
//         const newCategory =  new Categori({
//           name: "Games"
//         });
//         const res  = await newCategory.save();
//         return res.status(200).json({
//           success: true,
//           message: "Ok",
//           categori: res,
//         });
//       }
//       return res.status(200).json({
//         success: true,
//         message: "Ok",
//         categori: data,
//       });
//     }
//     const newCategory = await new Categori({
//       name: "Music"
//     });
//     await newCategory.save();

//     const getCategory = await Categori.find({ name: name });
//     return res.status(200).json({
//       success: true,
//       message: "Ok",
//       OneCategory: getCategory,
//     });
//   } catch (error) {
//     return status(500).json({
//       message:"Err"
//     })
//   }
// });

handler.get(async (req,res)=>{
  await db.connect();
  return res.status(200).json({
    success:true,
    categori: "Musica"
  })
})

// create Catogire
handler.post(async (req, res) => {
  await db.connect();
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
