import { AllChannels, Channel } from "./Channel.js";
import { allPlatforms } from "./Platform.js";
import { Platform } from "./Platform.js";
import { allSteamers, Streamer } from "./Streamer.js";
import { Stream } from "./Stream.js";
import { createChannels } from "./data/channelsData.js";
import { createDataPlatforms } from "./data/platformsData.js";
import { createDataSteamer } from "./data/steamerData.js";
import { createDataStream } from "./data/streamData.js";

const createData = () => {
    createDataPlatforms();
    createChannels();
    createDataSteamer();
    createDataStream();
};
createData();

/* --- Data base --- */

const platform3 = new Platform(3, "Facebook", "Facebook is an American online social media and social networking service based in Menlo Park, California.", "Facebook");
const channel4 = new Channel(4, "thegrefg", "https://via.placeholder.com/150", "thegrefg", "Descripción del canal de thegrefg");
const streamer4 = new Streamer(4, "elxokas", "elxokas es un streamer famoso",);
const stream4 = new Stream(4, ["Tema 1", "Tema 2"], AllChannels[3], allSteamers[3])

// 1. Mostrar el listado de plataformas
console.log("1. Mostrar el listado de plataformas \n",
allPlatforms);
// 2. Mostrar el detalle de una plataforma
console.log(
    "2. Mostrar el detalle de una plataforma \n",
    platform3.detailPlarform);
// 3. Mostrar el listado de canales
console.log("3. Mostrar el listado de canales \n",
Channel.allChannels);
// 4. Mostrar el detalle de un canal
console.log("4. Mostrar el detalle de un canal \n",
channel4.detailChannel);
// 5. Mostrar el listado de streamers
console.log("5. Mostrar el listado de streamers \n",
Streamer.allSteamers);
// 6. Ver el detalle de un streamer
console.log("6. Ver el detalle de un streamer \n",
streamer4.detailSteamer);
// 7. Mostrar el listado de streams
console.log("7. Mostrar el listado de streams \n",
Stream.allStreams);
// 8. Mostrar el detalle de un stream
console.log("8. Mostrar el detalle de un stream \n",
stream4.detailStream);

// 9. Agregar una plataforma
console.log("9. Agregar una plataforma  \n",
    platform3 );
// 10. Agregar un canal
console.log("10. Agregar un canal \n",
    channel4
);
// 11. Agregar un streamer
console.log("11. Agregar un streamer \n",
    streamer4);
// 12. Agregar un stream
console.log("12. Agregar un stream \n",
    stream4);
// 13. Agregar un canal a un streamer
console.log("13. Agregar un canal a un streamer \n",
    streamer4.setChannel = channel4,
    streamer4.detailSteamer);
// 14. Agregar un stream a un streamer
console.log("14. Agregar un stream a un streamer \n",
    streamer4.newStream = stream4,
    stream4.detailStream
    );
