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
        <a href="" className="mb-3 fs-3 d-flex text-light">
          <Spotify size={42} />
          <div className="mx-3">Spotify</div>
        </a>
        <a href="" className="navlink py-3">
          <House size={25} />
          <span className="px-3">Home</span>
        </a>
        <a href="" className="navlink">
          <Search size={25} />
          <span className="px-3">Search</span>
        </a>
        <a href="" className=" navlink mb-3 py-3">
          <CollectionFill size={25} />
          <span className="px-3">Your library</span>
        </a>

        <a href="" className="navlink">
          <PlusSquareFill size={25} />
          <span className="px-3">create playlist</span>
        </a>
        <a href="" className="navlink py-3">
          <HeartFill size={25} />
          <span className="px-3">liked song</span>
        </a>
        <hr />
        <div>my playlist #1</div>
      </div>
    </>
  );
};

export default Sidebar;
