import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import MoodFilter from "./components/MoodFilter";
import ContentList from "./components/ContentList";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="">
      <NavBar />
      
      
      <Footer />
      <ContentContainer />
    </div>
  );
}

export default App;
