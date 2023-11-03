import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 mx-auto max-w-lg">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile image"
          className="rounded-full mt-2 cursor-pointer h-24 w-24 object-cover self-center"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border rounded-lg p-3"
        />
        <button className="bg-slate-700 text-white uppercase rounded-lg p-3 hover:opacity-95 disabled:opacity-80">
          update
        </button>
        <div className="flex justify-between mt-3">
          <span className="text-red-700 cursor-pointer">Delete account</span>
          <span className="text-red-700 cursor-pointer">Sign out</span>
        </div>
      </form>
    </div>
  );
}
