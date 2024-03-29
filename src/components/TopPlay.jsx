import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/ShazamCore"; 


import 'swiper/css'
import 'swiper/css/free-mode' 

const TopChartCard = ({ song, i }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    {song.title}
  </div>
)

const TopPlay = () => {
   
  const dispatch = useDispatch();
  const { setActiveSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery(); 
  const divRef = useRef(null);

  console.log(data);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior : 'smooth'}) 
  }) 

  const topPlays = data?.result?.tracks.slice(0, 5)    

  const handlePauseClick = () =>{
    disPatch(playPause(false)) 
  }
  const handlePlayClick = () =>{
    disPatch(setActiveSong({ song, data, i}));
    disPatch(playPause(true))
  }

  return(
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">   
     <div className="w-full flex flex-col">
       <div className="flex flex-row justify-between items-center">
         <h2 className="text-white font-bold text-2xl">Top Charts</h2>
         <Link to='/top-charts'>
          <p className="text-gray-300 text-base cursor-pointer">See more</p>
         </Link>
       </div>

       <div className="mt-4 flex flex-col gap-1">
         {
          topPlays?.map((song, i) => (
            <TopChartCard 
             key={song.key}   
             song={song}
             i={i}
            /> 
          ))
         } 
       </div>

     </div>
    </div>
  )
}
export default TopPlay;
