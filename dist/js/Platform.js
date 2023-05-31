export const allPlatforms = [];
export class Platform {
    constructor(id, name, summary, sponsor, channels) {
        this.channels = [];
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
        return `Plataforma: ${this.name} \nResumen: ${this.summary} \nSponsor: ${this.sponsor}`;
    }
    set setChannel(channel) {
        var _a;
        (_a = this.channels) === null || _a === void 0 ? void 0 : _a.push(channel);
    }
}
