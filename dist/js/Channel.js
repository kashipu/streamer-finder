export const AllChannels = [];
export class Channel {
    constructor(id, name, imageBanner, streamerUser, summary, platform) {
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
        return `\nCanal: ${this.name} \nResumen: ${this.summary} \nStreamer: ${this.streamerUser}`;
    }
    set addPlatform(platform) {
        this.platform = platform;
    }
}
