"use client";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex flex-1 items-center justify-center text-small max-w-4xl pl-0 max-xs:w-full relative z-20">
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-1 p-4 rounded shadow-md dark:shadow-white/20 bg-mainColor2"
      >
        <input
          type="email"
          placeholder="بريدك الالكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border-0 rounded-r-md focus:outline-none w-64 flex-1 bg-transparent"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-prime text-white rounded-l-md focus:outline-none"
        >
          اشترك
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
