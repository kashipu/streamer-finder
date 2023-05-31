import { Channel } from "./Channel";
import { Stream } from "./Stream";

export const allSteamers: Streamer[] = [];
export class Streamer {
    id: number;
    user: string;
    summary: string;
    channel: Channel[] = [];
    streams?: Stream[] = [];

    constructor(id: number, user: string, summary: string) {
        this.id = id;
        this.user = user;
        this.summary = summary;
        allSteamers.push(this);
    }
    static get allSteamers() {
        return allSteamers;
    }
    get detailSteamer() {
        return `\nStreamer: ${this.user} \nResumen: ${this.summary}`
    }
    set setChannel(channel: Channel) {
        this.channel?.push(channel);
    }
    set newStream(stream: Stream) {
        this.channel?.push(stream.channel);
    }
}
