import React from "react";

const AlbumList = ({ albumList }) => {
  return (
    <div className="albums_list">
      {albumList
        ? albumList.map((album, index) => (
            <img
              key={index}
              alt="album"
              src={`/images/albums/${album.cover}.jpg`}
            />
          ))
        : null}
    </div>
  );
};
export default AlbumList;
