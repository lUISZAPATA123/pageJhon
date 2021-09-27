import Head from "next/head";
import { useState } from "react";
import { postData } from "../utils/fetchData";

export default function Signin() {
  const initialState = { email: "", password: "" };
  const [userData, setuserData] = useState(initialState);
  // const { email, password } = userData;
  // change inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };
  // end changue inputs

  // on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    const res = await postData("auth/login", userData);
    console.log("datos de respuesta", res);
  };
  // end on submit
  return (
    <div>
      <Head>
        <title>Sing In Page</title>
      </Head>

      <div className="container flex items-center justify-center h-screen ">
        <div className="w-full max-w-xs align-center">
          <form
            className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center w-full">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-xs text-center text-gray-500">
            &copy;2021 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
