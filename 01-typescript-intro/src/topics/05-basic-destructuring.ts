interface AudioPlayer {
    audioVolume: number;
    details: Details;
    song: string;
    songDuration: number;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    details: {
        author: "Ed Sheeran",
        year: 2015
    },
    song: "Mess",
    songDuration: 36
}

const { song, songDuration:duration, details: { author } } = audioPlayer;

console.log('Song:', song);
console.log('Duration:', duration);
console.log('Author:', author);

export {}