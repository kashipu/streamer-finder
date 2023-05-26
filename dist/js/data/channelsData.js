import { Channel } from "../Channel.js";
export const createChannels = () => {
    const channel1 = new Channel(1, "ibai", "https://via.placeholder.com/150", "ibai", "Descripción del canal de ibai");
    const channel2 = new Channel(2, "auronplay", "https://via.placeholder.com/150", "auronplay", "Descripción del canal de auronplay");
    const channel3 = new Channel(3, "elrubius", "https://via.placeholder.com/150", "elrubius", "Descripción del canal de elrubius");
};
