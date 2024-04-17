"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const VerifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      console.log(
        "Somethin went wrong in VerifyEmailPage Frontend",
        error.message
      );
      setError(true);
    }
  };

  useEffect(() => {
    window.location.search.split("=")[0];
  }, []);
  return <div></div>;
};

export default VerifyEmailPage;
