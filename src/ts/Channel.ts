import { Platform } from "./Platform";
import { Stream } from "./Stream";

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
    static get allChannels() {
        return AllChannels;
    }
    get detailChannel() {
        return `\nCanal: ${this.name} \nResumen: ${this.summary} \nStreamer: ${this.streamerUser}`
    }
    set addPlatform(platform: Platform) {
        this.platform = platform;
    }
}
