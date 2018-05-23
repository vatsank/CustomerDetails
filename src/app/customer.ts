
class Customer {


    private id: number;
    private name: string;
    private image: string;

    constructor(id: number, name: string, image: string) {

        this.id = id;
        this.name = name;
        this.image = image;
    }

    toString(): string {

        return `${this.id},${this.name}`;
    }


}

