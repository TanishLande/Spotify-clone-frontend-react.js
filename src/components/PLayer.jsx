import { useContext } from 'react'
import { assets } from '../../public/assets'
import { PlayerContext } from '../content/PLayerContext'

const PLayer = () => {

  const {seekBar,seekBg,playStatus, play,pause, track,time ,next, previous,seekSong } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-[#ffffff26] z-4 rounded-xl flex item-center text-white px-4">
        <div className="hidden lg:flex item-center gap-4">
            <img className='w-18 p-2 '  src={track.image} alt="" />
        <div className='px-4 py-4'>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
        </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
          <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
            <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
            {!playStatus ? 
             <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" /> 
             : 
             <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
            }
            <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
          </div>
          <div className='flex items-center gap-5'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-slate-200 rounded-full cursor-pointer'>
              <hr ref={seekBar} className='h-1 border-none w-20 bg-emerald-800 rounded' />
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
          </div>
        </div>
        <div className='hidden mt-6 lg:flex item-center gap-4 opcaity-75'>
          <img className='w-5 h-5' src={assets.plays_icon} alt="" />
          <img className='w-5 h-5' src={assets.mic_icon} alt="" />
          <img className='w-5 h-5' src={assets.queue_icon} alt="" />
          <img className='w-5 h-5' src={assets.speaker_icon} alt="" />
          <img className='w-5 h-5' src={assets.volume_icon} alt="" />
          <div className='w-20 cursor-pointer bg-slate-50 h-1 rounded mt-2'>

          </div>
          <img className='w-5 h-5' src={assets.mini_player_icon} alt="" />
          <img className='w-5 h-5' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}

export default PLayer