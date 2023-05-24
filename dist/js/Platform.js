export const allPlatforms = [];
export class Platform {
    constructor(id, name, summary, sponsor) {
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.sponsor = sponsor;
        allPlatforms.push(this);
    }
}
