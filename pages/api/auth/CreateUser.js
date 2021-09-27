import ConnectDB from "../../../utils/ConnectDb";
import User from "../../../model/UserModel";

ConnectDB();

const CreateUser = async (req, res) => {
  switch (req.method) {
    case "POST":
      await SignUp(req, res);
      break;
  }
};

export default CreateUser;

const SignUp = async (req, res) => {
  try {
    const { name, email, password, role, root } = req.body;
    const newUser = new User({
      name,
      email,
      password,
      role, //admin
      root, //true
    });
    await newUser.save();

    return res.json({
      msg: "succes",
      newUser,
    });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
