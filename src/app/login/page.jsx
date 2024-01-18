"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";

const Login = () => {
  const handleLogin = (formData) => {
    try {
      const email = formData.get("email");
      const password = formData.get("password");
      return signInWithEmailAndPassword(auth, email, password).then((res) =>
        console.log(res),
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div
        className="bg-gray-800 h-screen  "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(loginBanner.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-8 lg:w-1/2 xl:w-1/3 mx-auto xl:absolute xl:top-[50%] xl:-translate-y-[50%] xl:left-[50%] xl:-translate-x-[50%] ">
          <div className="bg-gray-100 rounded-lg py-12 px-4 lg:px-24">
            <div>
              <h1 className={"text-center font-bold text-[#28D7C5] text-3xl"}>
                Home Vista
              </h1>
              <p className={"text-center font-semibold text-xl mt-3 "}>Login</p>
            </div>
            <form className="mt-6" action={handleLogin}>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline focus:border-mediumBlue focus:border-2"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline focus:border-mediumBlue focus:border-2"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-center mt-8">
                <input
                  value={"Login"}
                  type="submit"
                  className="text-white py-2 px-4 uppercase rounded bg-highBlue cursor-pointer hover:bg-[#28D7C5] shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
