import { useNavigate } from 'react-router-dom'
import { assets } from '../../public/assets'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="w-[18%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] rounded flex flex-col justify-center">
        <div onClick={()=>{navigate('/')}} className="p-2 pt-4 flex items-center gap-3 pl-8 cursor-pointer">
          <img className='w-6 h-6 mt-2' src={assets.home_icon} alt="Home Icon" />
          <p className='mt-2 font-bold'>Home</p>
        </div>
        <div className="flex py-4 items-center gap-3 pl-8 cursor-pointer">
          <img className='w-6 mb-4 mt-2' src={assets.search_icon} alt="Search Icon" />
          <p className=' font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded-xl'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6' src={assets.stack_icon} alt="Stack Icon" />
            <p className='font-semibold'>Your Library:</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="Arrow Icon" />
            <img className='w-5' src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-3 pl-4'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>You are very close to making your first playlist</p>
          <button className='px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4'>
            Create Playlist
          </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-3 pl-4 mt-4'>
          <h1>Look for some podcast.</h1>
          <p className='font-light'>Follow and get update upto date.</p>
          <button className='px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse Podcast
          </button>
        </div>
      </div>    
    </div>
  )
}

export default Sidebar
