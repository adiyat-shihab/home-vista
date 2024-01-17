"use client";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { useContext } from "react";
import { authContext } from "@/app/authContext/AuthProvider";

const RegisterForm = () => {
  const userData = useContext(authContext);
  console.log(userData);
  const handleSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const res = await fetch("/api/storeUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: name,
              email: email,
            }),
          });
          await res.json();
          return updateProfile(auth.currentUser, {
            displayName: name,
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action={handleSubmit}
      className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
    >
      <div className="pb-2 pt-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="block w-full p-4 text-lg  outline-none rounded-sm bg-gray-100"
        />
      </div>
      <div className="pb-2 pt-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="block w-full outline-none p-4 text-lg rounded-sm bg-gray-100"
        />
      </div>
      <div className="pb-2 pt-4">
        <input
          className="block w-full outline-none p-4 text-lg rounded-sm bg-gray-100"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="px-4 pb-2 pt-4">
        <input
          className="uppercase block w-full cursor-pointer p-4 text-lg rounded-full  text-white focus:outline-none  bg-mediumBlue hover:bg-highBlue"
          type={"submit"}
          value={"Register"}
        />
      </div>
    </form>
  );
};

export default RegisterForm;
