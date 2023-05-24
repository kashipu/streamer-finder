export const allPlatforms: Platform[] = []

export class Platform {
    id: number;
    name: string;
    summary: string;
    sponsor: string;

    constructor(id: number, name: string, summary: string, sponsor: string) {
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.sponsor = sponsor;
        allPlatforms.push(this);
    }
}