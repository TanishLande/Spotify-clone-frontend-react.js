import { useContext } from "react";
import Display from "./components/Display";
import PLayer from "./components/PLayer";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./content/PLayerContext";

const App = () => {
  const { audioRef,track } = useContext(PlayerContext);
  return (
    <div className=" h-screen bg-black  " >
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <PLayer />
      <audio ref={audioRef}  src={track.file} preload="auto"></audio>
    </div>
  )
}

export default App;