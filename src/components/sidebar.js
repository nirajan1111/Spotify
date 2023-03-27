import React from "react";
import {
  Spotify,
  House,
  Search,
  CollectionFill,
  PlusSquareFill,
  HeartFill,
} from "react-bootstrap-icons";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar text-secondary">
        <div className="mb-3 fs-3 d-flex text-light">
          <Spotify size={42} />
          <div className="mx-3">Spotify</div>
        </div>
        <div className="py-3 text-secondary">
          <House size={25} />
          <span className="px-3">Home</span>
        </div>
        <div>
          <Search size={25} />
          <span className="px-3">Search</span>
        </div>
        <div className="mb-3 py-3">
          <CollectionFill size={25} />
          <span className="px-3">Your library</span>
        </div>

        <div>
          <PlusSquareFill size={25} />
          <span className="px-3">create playlist</span>
        </div>
        <div className="py-3">
          <HeartFill size={25} />
          <span className="px-3">liked song</span>
        </div>
        <hr />
        <div>my playlist #1</div>
      </div>
    </>
  );
};

export default Sidebar;
