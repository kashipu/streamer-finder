export const allStreams = [];
export class Stream {
    constructor(id, temas, channel, streamer, category) {
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
        return `Stream ${this.id} \n Temas: ${this.temas} \n Canal: ${this.channel.name} \n Streamer: ${this.streamer.user} \n Categoría: ${this.category}`;
    }
}
