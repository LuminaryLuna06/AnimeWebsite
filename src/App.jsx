import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import MoodFilter from "./components/MoodFilter";
import ContentList from "./components/ContentList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <NavBar />
      <ContentList />
      <MoodFilter />
      <Footer />
    </div>
  );
}

export default App;
