import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CreatePost from "./Components/CreatePost";
import List from "./Components/List";

const App = () => {
  return (
    <>
      <CreatePost />
      <div className="max-w-md mx-auto mt-24 bg-white rounded p-6 shadow-md">
        <List className="w-full" />
      </div>
    </>
  );
};

export default App;
