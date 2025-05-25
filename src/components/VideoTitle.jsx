

const VideoTitle = ({title,overview}) => {
 
  return (
    <div className="w-screen aspect-video p-2 gap-3 flex flex-col absolute  bg-gradient-to-r from-black pt-[20%] px-[44px]">
      
      <div className="font-bold text-5xl">{title}</div>
      <p className="w-1/3">{overview.split('.')[0]+"."}</p>
      <div className="flex gap-2">
      <button className="rounded p-3 bg-white/50 hover:bg-white/60 cursor-pointer text-black font-bold w-36 ">
        {/* <i class="fa-solid fa-play" style="color: #000205;"></i> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
         Play</button>
      <button className="bg-gray-600/50 hover:bg-gray-600/60 cursor-pointer font-bold p-2 rounded w-36"> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
