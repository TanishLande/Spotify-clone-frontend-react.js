import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from "../../public/assets";
import { useContext } from "react";
import { PlayerContext } from "../content/PLayerContext";

const Displayalbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id];
    console.log(albumData);
    const {playWithId} = useContext(PlayerContext);

    return (
        <div className="flex flex-col h-screen p-6">
            <Navbar />
            <div className="flex flex-col overflow-hidden">
                <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                    <img className="w-48 rounded" src={albumData.image} alt="" />
                    <div className="flex flex-col">
                        <p>Playlist</p>
                        <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                        <h4 className="mx-2">{albumData.desc}</h4>
                        <p className="mt-1">
                            <img className="mx-2 inline-block w-5" src={assets.spotify_logo} alt="" />
                            <b>Spotify</b>
                            - 1,365,345 likes
                            - <b className="mx-2">40 songs,</b>
                            about 1 hrs 58 mins
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-2 pl-2 text-[#a7a7a7]">
                    <p><b className="mr-4">#</b>Title</p>
                    <p>Album</p>
                    <p className="hidden sm:block">Date Added</p>
                    <img className="m-auto w-4" src={assets.clock_icon} alt="" />
                </div>
                <hr />
                <div className="     overflow-y-auto flex-grow">
                    {songsData.map((item,index)=>(
                        <div onClick={()=>playWithId(item)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer">
                            <p className="text-white">
                                <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                                <img className="inline w-16 mr-5" src={item.image} alt="" />
                                {item.name}
                            </p>
                            <p className="text-[15px]">
                                {albumData.name}
                            </p>
                            <p className="text-[15px] hidden sm:block">
                                5 days ago
                            </p>
                            <p className="text-[15px] text-center">
                                {item.duration}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Displayalbum