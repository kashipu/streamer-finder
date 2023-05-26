import { Platform } from "./Platform";

export const AllChannels: Channel[] = [];
export class Channel {
    id: number;
    name: string;
    imageBanner: string;
    streamerUser: string;
    summary: string;
    platform?: Platform;
    streamer?: string;
    stream?: Stream[];

    constructor(id: number, name: string, imageBanner: string, streamerUser: string, summary: string, platform?: Platform) {
        this.id = id;
        this.name = name;
        this.imageBanner = imageBanner;
        this.streamerUser = streamerUser;
        this.summary = summary;
        this.platform = platform;
        AllChannels.push(this);
    }
    get detailChannel() {
        return `\nCanal: ${this.name} \nResumen: ${this.summary} \nStreamer: ${this.streamerUser}`
    }
}
