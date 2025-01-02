import React from "react";
import Button from "./Button";

function ContentList({
  animeList = [],
  loading,
  error,
  page,
  handleNextPage,
  handlePrevPage,
  hiddenAnime,
  handleHideClick,
}) {
  const filteredAnimeList = animeList.filter(
    (anime) => !hiddenAnime.has(anime.mal_id)
  );

  return (
    <>
      <div className="bg-slate-100/5 center-container card card-compact bg-base-100 w-96 shadow-xl">
        {filteredAnimeList.length === 0 ? (
          <div className="p-5">
            <p>this anime is hidden</p>
            <div className="flex justify-between">
              <Button text={"⬅️ back"} onClick={handlePrevPage} />
              <Button text={"next ➡️ "} onClick={handleNextPage} />
            </div>
          </div>
        ) : (
          filteredAnimeList.map((anime) => (
            <>
              <div key={anime.mal_id}>
                <figure className="aspect-[16/9]">
                  <iframe
                    className="w-full h-full"
                    width="1044"
                    height="587"
                    src={anime.trailer.embed_url}
                    title="Pro Chef Reacts.. To Gordon Ramsay CALLING OUT Uncle Roger!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold cursor-pointer">
                    {anime.title}
                  </h2>
                  <p className="text-lg font-thin text-left">
                    {anime.aired?.from
                      ? new Date(anime.aired.from).getFullYear()
                      : "unknown"}
                    &nbsp; - &nbsp;
                    {anime.episodes ?? "N/A"} eps &nbsp; - ⭐ {anime.score}
                    &nbsp; - 🏆 top {anime.popularity}
                  </p>
                  <div className="flex flex-row gap-2">
                    {anime.genres?.map((genre, index) => (
                      <div
                        key={index}
                        className="badge badge-secondary badge-outline"
                      >
                        {genre.name}
                      </div>
                    )) || (
                      <div className="badge badge-secondary badge-outline">
                        N/A
                      </div>
                    )}
                  </div>
                  <p className="font-thin mt-3 text-left">
                    {anime.synopsis.slice(0, 500)}...
                  </p>
                  <div className="flex justify-between">
                    <Button text={"⬅️ back"} onClick={handlePrevPage} />
                    <Button
                      text={"🙈 hide"}
                      onClick={() => handleHideClick(anime.mal_id)}
                    />
                    <Button text={"next ➡️ "} onClick={handleNextPage} />
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
}

export default ContentList;
