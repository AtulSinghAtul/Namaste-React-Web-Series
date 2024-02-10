import React from "react";

const Contact = () => {
  return (
    <>
      <form>
        <h1>Contact Us Form</h1>
        <input
          type="text"
          className="bg-green-100 rounded-md border-2 border-green-400 px-12 py-2 text-green-700 font-medium outline-none"
          placeholder="name"
        />
        <input
          type="text"
          className="bg-green-100 rounded-md border-2 border-green-400 px-12 py-2 text-green-700 font-medium outline-none"
          placeholder="dob"
        />
        <button className="text-green-800 text-[20px] bg-white py-1 px-4 rounded-md">
          search restaurants
        </button>
      </form>
    </>
  );
};

export default Contact;
