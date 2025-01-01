import React from "react";
import moods from "../assets/mood";
import Button from "./Button";
function MoodFilter({selectedGenre, toggleGenre}) {
  return (
    <div>
      <h1 className="mood-center-container my-6 mx-auto grid lg:text-5xl text-4xl font-bold">
        Discover top-rated Anime based on your mood
      </h1>
      <p>How are you feeling right now?</p>

      <div className="mood-center-container grid grid-cols-3 gap-4 lg:gap-6 my-6 lg:grid-cols-4">
        {Object.entries(moods).map(([mood, genre], index) => (
          <Button key={index} text={mood} onClick={() => toggleGenre(mood,genre)} />
        ))}
      </div>
    </div>
  );
}

export default MoodFilter;
