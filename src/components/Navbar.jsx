import { useNavigate } from "react-router-dom"
import { assets } from "../../public/assets"

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="w-full flex justify-between items-center font-semibold">
    <div className="flex flex-row gap-2 hidden lg:flex lg:items-center lg:justify-center">
    <img onClick={() => navigate(-1)} className="w-10 bg-black rounded-2xl p-2 cursor-pointer" src={assets.arrow_left} alt="" />
    <img onClick={() => navigate(+1)} className="w-10 bg-black rounded-2xl p-2 cursor-pointer" src={assets.arrow_right} alt="" />
</div>
        <div className="flex item-center gap-4">
          <p className="bg-white mt-2 text-black text-[15px] py-2 px-4 rounded-2xl cursor-pointer hover:bg-green-600 hidden  md:block">
            Explore Premium
          </p>
          <p className="bg-black py-2 mt-2 px-2 rounded-2xl text-[15px] cursor-pointer hidden lg:block">
            Install App
          </p>
          <p className="bg-blue-500 text-black w-8 h-8 pl-3 pt-1 rounded-full flex item-center justify-center mt-3 cursor-pointer hidden lg:block">
            T
          </p>
        </div>
    </div>
    <div className="flex item-center gap-3 mt-4">
      <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
      <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer" >Music</p>
      <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
      <p className="bg-blue-500 text-black w-8 h-8 pt-1  rounded-full flex item-center justify-center cursor-pointer ml-12 block lg:hidden ">
        T
      </p>
    </div>     
    </>
  )
}

export default Navbar