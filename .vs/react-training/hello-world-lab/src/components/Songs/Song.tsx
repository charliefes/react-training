import { SongType } from "./SongTypes";

const Song = (props: SongProps) : JSX.Element => {
    return (<li>{props.song.name} by {props.song.artist}</li>);
 }
 
 export default Song

 type SongProps = {song:SongType};