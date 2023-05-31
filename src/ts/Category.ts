export class Category {
    id: number;
    name: string;
    summary: string;
    image: string;

    constructor(id: number, name: string, summary: string, image: string) {
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.image = image;
    }
}
