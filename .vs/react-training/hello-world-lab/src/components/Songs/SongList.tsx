import Song from './Song';
import { useState } from 'react';
import { SongType } from './SongTypes';
import { SongData } from '../../data/SongData';

const SongList2 = () : JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);
    const [song1, setSong1] = useState<SongType>({ name:"Chistmast Song", artist:"Santa"});
    const [song2, setSong2] = useState<SongType>({ name:"Rock Song", artist:"Santa"});


    const toggleVisibility = () : void => {
        setVisible(!visible);
    }

    const changeSongsName = () : void =>{

        if(song1.artist === song2.artist) {
            setSong1({ name:"Chistmast Song2", artist:"Santa"})
            setSong2({ name:"Rock Song2", artist:"Santa"})
        }
    }

    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <button onClick={changeSongsName}>Change Songs name</button>
            <button onClick={toggleVisibility}> {visible ? 'hide' : 'show'} songs</button>
            <ul style= {{display : visible ? 'block' : 'none'}}>
                <Song song={song1}/>
                <Song song={song2}/>
            </ul>
        </div>);
}

const SongList = () : JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);

    const [mySongs, setMySongs] = useState<SongType[]>(SongData);

    const toggleVisibility = () : void => {
        setVisible(!visible);
    }


    return (
        <div>
            <h2>Your favourite songs are:</h2>
        
            <button onClick={toggleVisibility}> {visible ? 'hide' : 'show'} songs</button>
            <ul style= {{display : visible ? 'block' : 'none'}}>
                {mySongs.map((song: SongType, index) => (
                    <Song key={index} song={song} />
        ))}
            </ul>
        </div>);
}



export default SongList;
