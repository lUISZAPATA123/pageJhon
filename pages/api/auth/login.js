import User from "../../../model/UserModel";
import bcrypt from "bcrypt";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";
import ConnectDB from "../../../utils/ConnectDb";

ConnectDB();

const Login = async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

export default Login;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const QueryUser = await User.findOne({ email });
    if (!QueryUser)
      return res.status(400).json({ err: "This user not exist. " });

    const isMatch = await bcrypt.compare(password, QueryUser.password);
    if (!isMatch) return res.status(400).json({ err: "Incorret password." });

    const access_token = createAccessToken({ id: QueryUser._id });
    const refresh_token = createRefreshToken({ id: QueryUser._id });
    const { name, role, avatar, root } = QueryUser;
    res.json({
      msg: "Login Succes",
      access_token,
      refresh_token,
      user: { name, role, email: QueryUser.email, avatar, root },
    });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
