"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("");

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/info");
      console.log(response.data.data._id);

      setData(response.data.data._id);
      toast.success("Now you are at Profile Page");
    } catch (error: any) {
      console.log("Error in profile route", error.message);
      toast.error("Something went wrong", error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <h2>
        {data === "nothing" ? (
          "Nothing Literally"
        ) : (
          <Link href={`/profile/${data}`}>Test {data}</Link>
        )}
      </h2>
      <hr />
      <div className="flex gap-2 items-center">
        <button
          onClick={logout}
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Logout
        </button>
        <button
          onClick={getUserDetails}
          className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          Details
        </button>
      </div>
    </div>
  );
}
