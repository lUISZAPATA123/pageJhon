import { useState } from "react";
import { postData } from "../utils/fetchData";
export default function CreateUser() {
  const initialState = {
    name: "",
    role: "",
    root: "",
    email: "",
    password: "",
  };

  const [userData, setuserData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    const res = await postData("auth/CreateUser", userData);
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <input type="email" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <input type="text" name="role" onChange={handleChange} />
        <input type="text" name="root" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
