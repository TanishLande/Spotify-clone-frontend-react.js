import Navbar from "./Navbar"
import { albumsData } from "../../public/assets"
import ALbumitem from "./ALbumitem"
import { songsData } from "../../public/assets"
import Songitem from "./Songitem"

const DisplayHome = () => {
  return (
    <>
        <div className=" h-fit 
        bg-gradient-to-b
        from-emerald-800
        p-6">
        <Navbar />
        <div className="mb-4 ">
          <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
          <div className="flex overflow-auto">
            {albumsData.map((item,index) => (<ALbumitem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
          </div>
        </div>
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Top Hits </h1>
          <div className="flex overflow-auto">
            {songsData.map((item,index) =>(<Songitem key={index} name={item.name} id={item.id} desc={item.desc} image={item.image} />)) }    
          </div>
        </div>
        </div>
    </>
  )
}

export default DisplayHome