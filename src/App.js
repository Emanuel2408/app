import React from "react";
import Section from "./components/Section.js";
import Navbar from "./components/Navbar.js";
import data from "./data.js";

export default function App() {
  const info = data.map((item) => {
    return <Section key={item.id} item={item} />;
  });
  return (
    <div className="main-frame">
      <Navbar />
      <section className="travel-list">{info}</section>
    </div>
  );
}
