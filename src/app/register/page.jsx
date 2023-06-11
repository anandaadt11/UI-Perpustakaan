import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="flex min-h-screen border-sky-500">
      <div className=" flex-1 flex flex-col justify-center items-center ">
        <div className="border-2 border-sky-500 p-10 rounded-xl">
          <div className="my-10 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-sky-400">Register</span>
            </h1>
            <p>Masukan data anda dengan benar</p>
          </div>
          <div class="flex flex-col">
            <div className="pb-5">
              <label for="uname">
                <b>Email</b>
              </label>
              <input
                className="w-full p-2 rounded-lg"
                type="text"
                placeholder="Email"
                name="uname"
                required
              />
            </div>
            <div className="pb-5">
              <label for="uname">
                <b>Full Name</b>
              </label>
              <input
                className="w-full p-2 rounded-lg"
                type="text"
                placeholder="Full Name"
                name="uname"
                required
              />
            </div>

            <div className="pb-5">
              <label for="psw">
                <b>Password</b>
              </label>
              <input
                className="w-full p-2 rounded-lg"
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </div>

            <Link
              href="/login"
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg text-center"
            >
              <button type="submit">Register</button>
            </Link>
          </div>
          <p className="text-center mt-4">
            have an account{" "}
            <Link
              href="/login"
              className="text-sky-500 hover:text-sky-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-sky-500 flex-1 flex flex-col justify-center items-center">
        <Image
          src="/images/book2.jpg"
          alt="login"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-bold m-5">Books Collection</h1>
      </div>
    </div>
  );
};

export default Register;
