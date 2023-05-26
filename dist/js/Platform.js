export const allPlatforms = [];
export class Platform {
    constructor(id, name, summary, sponsor) {
        this.channels = [];
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.sponsor = sponsor;
        allPlatforms.push(this);
    }
    static get getPlatforms() {
        return allPlatforms;
    }
    get detailPlarform() {
        return `Plataforma: ${this.name} \nResumen: ${this.summary} \nSponsor: ${this.sponsor}`;
    }
}
