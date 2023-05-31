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
        var _a;
        return `Stream ${this.id} \n Temas: ${this.temas} \n Canal: ${this.channel.name} \n Streamer: ${this.streamer.user} \n Categoría: ${(_a = this.category) === null || _a === void 0 ? void 0 : _a.name}`;
    }
}
