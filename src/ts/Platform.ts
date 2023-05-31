import { Channel } from "./Channel";

export const allPlatforms: Platform[] = []

export class Platform {
    id: number;
    name: string;
    summary: string;
    sponsor: string;
    channels?: Channel[] = [];

    constructor(id: number, name: string, summary: string, sponsor: string, channels?: Channel[]) {
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.sponsor = sponsor;
        this.channels = channels;
        allPlatforms.push(this);
    }

    static get getPlatforms() {
        return allPlatforms;
    }

    get detailPlarform() {
        return `Plataforma: ${this.name} \nResumen: ${this.summary} \nSponsor: ${this.sponsor}`
    }

    set setChannel(channel: Channel) {
        this.channels?.push(channel);
    }
}
