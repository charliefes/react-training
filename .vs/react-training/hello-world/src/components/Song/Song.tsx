

const Song =(mysong:SongType) : React.ReactElement => {
    return (
        <li>
            <p> {mysong.title} by {mysong.lyrics} </p>
        </li>
    );
}

type SongType = {
title : string
artist: string
lyrics: string
}

export default Song