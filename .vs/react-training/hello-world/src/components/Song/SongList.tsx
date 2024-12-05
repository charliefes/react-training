
import Song from './Song'
const SongList =() : React.ReactElement => {
    return (
        <>
            <h1>Favorite songs</h1>
            <ul>
                <Song key = "song1" title="We will rock you!" artist="Queen" lyrics="Buddy .." />
                <Song key = "song2" title="Every body wants to rule the world" artist="Tears of fears" lyrics="Wellcome to .."/>
            </ul>
        </>
    );
}

export default SongList