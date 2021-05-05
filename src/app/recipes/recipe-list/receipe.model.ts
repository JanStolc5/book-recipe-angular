export class Receipe {
    public name: string;
    public description: string;
    public urlPathToImage: string;

    constructor(name: string, desc: string, urlImg: string) {
        this.name = name;
        this.description = desc;
        this.urlPathToImage = urlImg;
    }
}
