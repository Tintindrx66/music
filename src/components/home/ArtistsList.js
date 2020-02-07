import React from "react";
import { Link } from "react-router-dom";

const ArtistsList = ({ allArtists }) => {
  return (
    <div className="artists_list">
      <h4>Artists</h4>
      <div className="artist_container">
        {allArtists
          ? allArtists.map(artist => (
              <Link
                key={artist.id}
                to={`/artist/${artist.id}`}
                className="artist_item"
                style={{
                  background: `url("/images/covers/${artist.cover}.jpg") no-repeat`
                }}
              >
                <div>{artist.name}</div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};
export default ArtistsList;
