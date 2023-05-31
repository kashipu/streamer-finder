export const allSteamers = [];
export class Streamer {
    constructor(id, user, summary) {
        this.channel = [];
        this.streams = [];
        this.id = id;
        this.user = user;
        this.summary = summary;
        allSteamers.push(this);
    }
    static get allSteamers() {
        return allSteamers;
    }
    get detailSteamer() {
        return `\nStreamer: ${this.user} \nResumen: ${this.summary}`;
    }
    set setChannel(channel) {
        var _a;
        (_a = this.channel) === null || _a === void 0 ? void 0 : _a.push(channel);
    }
    set newStream(stream) {
        var _a;
        (_a = this.channel) === null || _a === void 0 ? void 0 : _a.push(stream.channel);
    }
}
