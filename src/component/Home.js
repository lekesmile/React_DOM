import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [red, setRes] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const item = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(item);
    setRes(item);
  };
  return (
    <div>
      <p>Home</p>
      <p>{red}</p>
    </div>
  );
};

export default Home;
