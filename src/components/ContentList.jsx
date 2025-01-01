import React from "react";
import Button from "./Button";

function ContentList() {
  return (
    <div className="bg-slate-100/5 center-container card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="aspect-[16/9]">
        <iframe
          className="w-full h-full"
          width="1044"
          height="587"
          src="https://www.youtube.com/embed/9dAjoYeVurk"
          title="Pro Chef Reacts.. To Gordon Ramsay CALLING OUT Uncle Roger!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold cursor-pointer">Anime tile</h2>
        <p className="text-lg font-thin text-left">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="flex flex-row gap-2">
          <div className="badge badge-secondary badge-outline">secondary</div>
          <div className="badge badge-secondary badge-outline">secondary</div>
          <div className="badge badge-secondary badge-outline">secondary</div>
        </div>
        <p className="font-thin mt-3 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vero
          nulla odit impedit perspiciatis officiis, ea nesciunt officia iure
          excepturi, accusantium, corporis totam deserunt sapiente praesentium
          incidunt id sit fugit.
        </p>
        <div className="flex justify-between">
            <Button text={"⬅️ back"} />
            <Button text={"🙈 hide"} />
            <Button text={"next ➡️ "} />
        </div>
      </div>
    </div>
  );
}

export default ContentList;
