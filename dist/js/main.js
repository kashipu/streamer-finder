import { Channel } from "./Channel.js";
import { allPlatforms } from "./Platform.js";
import { Platform } from "./Platform.js";
import { createChannels } from "./data/channelsData.js";
import { createDataPlatforms } from "./data/platformsData.js";
const createData = () => {
    createDataPlatforms();
    createChannels();
};
createData();
/* --- Data base --- */
const platform3 = new Platform(3, "Facebook", "Facebook is an American online social media and social networking service based in Menlo Park, California.", "Facebook");
const channel4 = new Channel(4, "thegrefg", "https://via.placeholder.com/150", "thegrefg", "Descripción del canal de thegrefg");
// 1. Mostrar el listado de plataformas
console.log("1. Mostrar el listado de plataformas \n", allPlatforms);
// 2. Mostrar el detalle de una plataforma
console.log("2. Mostrar el detalle de una plataforma \n", platform3.detailPlarform);
// 3. Mostrar el listado de canales
console.log("3. Mostrar el listado de canales \n", Platform.getPlatforms);
// 4. Mostrar el detalle de un canal
console.log("4. Mostrar el detalle de un canal \n", channel4.detailChannel);
// 5. Mostrar el listado de streamers
// 6. Ver el detalle de un streamer
// 7. Mostrar el listado de streams
// 8. Mostrar el detalle de un stream
// 9. Agregar una plataforma
// 10. Agregar un canal
// 11. Agregar un streamer
// 12. Agregar un stream
// 13. Agregar un canal a un streamer
// 14. Agregar un stream a un streamer
