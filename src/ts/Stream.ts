import { Channel } from "./Channel";
import { Streamer } from "./Streamer";
import { Category } from "./Category";

export const allStreams: Stream[] = [];
export class Stream {
    id: number;
    temas: string[];
    channel: Channel;
    streamer: Streamer;
    category?: Category;

    constructor(id: number, temas: string[], channel: Channel, streamer: Streamer, category?: Category) {
        this.id = id;
        this.temas = temas;
        this.channel = channel;
        this.streamer = streamer;
        this.category = category;
        allStreams.push(this);
    }
    static get allStreams() {
        return allStreams;
    }
    get detailStream() {
        return `Stream ${this.id} \n Temas: ${this.temas} \n Canal: ${this.channel.name} \n Streamer: ${this.streamer.user} \n Categoría: ${this.category?.name}`;
    }
}
