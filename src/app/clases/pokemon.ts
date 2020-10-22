export class Pokemon {
    base_experience: number;
    height: number;
    id: number;
    name: string;
    weight: number;
    abilities;
    sprites;
    moves;

    constructor(base_experience, height, id, name, weight, abilities, sprites, moves)
    {
        this.base_experience=base_experience;
        this.height=height;
        this.id=id;
        this.name=name;
        this.weight=weight;
        this.abilities=abilities;
        this.sprites=sprites;
        this.moves=moves
    }
}
