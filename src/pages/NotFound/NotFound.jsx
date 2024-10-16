import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
      <h2>Not Found 404 😓</h2>
      <p>Page you request is not found</p>
      <Link className="underline text-black" to={"/"}>
        {" "}
        Back to Home{" "}
      </Link>
    </div>
  );
}
