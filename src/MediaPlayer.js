import ReactPlayer from "react-player";

const MediaPlayer = () => {
    return (
        <ReactPlayer url={'https://www.youtube.com/watch?v=XCEPR2X77rE'} playing={false} volume={0.5}/>
    )
}

export default MediaPlayer;