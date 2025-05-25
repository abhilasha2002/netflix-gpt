

const VideoTitle = ({title,overview}) => {
 
  return (
    <div className="w-[450px] p-2 gap-3 flex flex-col">
      
      <div className="font-bold text-5xl">{title}</div>
      <span>{overview.split('.')[0]+"."}</span>
      <div className="flex gap-2">
      <button className="rounded p-3 bg-white text-black font-bold w-36">
        {/* <i class="fa-solid fa-play" style="color: #000205;"></i> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
        ▶ Play</button>
      <button className="bg-gray-600 font-bold p-2 rounded w-36"> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
