import { Platform } from "../Platform.js";
export const createDataPlatforms = () => {
    const platform1 = new Platform(1, "Twich", "Twitch is a video live streaming service operated by Twitch Interactive, a subsidiary of Amazon.", "Amazon");
    const platform2 = new Platform(2, "Youtube", "YouTube is an American online video-sharing platform headquartered in San Bruno, California.", "Google");
};
