import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import Displayalbum from "./Displayalbum";
import { useEffect, useRef } from "react";
import { albumsData } from "../../public/assets"; // Adjust the path as needed

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  
  // Find the album data based on the albumId
  const album = albumsData.find(a => a.id === Number(albumId));
  const bgColor = album ? album.bgColor : '#121212'; // Default to dark color if not found

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.style.background = isAlbum 
        ? `linear-gradient(${bgColor}, #121212)` 
        : '#121212';
    }
  }, [isAlbum, bgColor]); 

  return (
    <div ref={displayRef} className="w-[100%] md:rounded bg-[#121212] text-white overflow-y-auto md:m-2 overflow-hidden lg:w-[85%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<Displayalbum />} />
      </Routes>
    </div>
  );
};

export default Display;
