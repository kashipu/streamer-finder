class Channel {
    id: number;
    name: string;
    imageBanner: string;
    streamerUser: string;
    summary: string;

    constructor(id: number, name: string, imageBanner: string, streamerUser: string, summary: string) {
        this.id = id;
        this.name = name;
        this.imageBanner = imageBanner;
        this.streamerUser = streamerUser;
        this.summary = summary;
    }
}