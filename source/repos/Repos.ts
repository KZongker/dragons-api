import { DragonRepo } from "./DragonRepo";
import { HumanRepo } from "./HumanRepo";

export class Repos {
    public human: HumanRepo;
    public dragon: DragonRepo;

    private static _current: Repos = null;
    public static getCurrent = () => {
        if (Repos._current === null) Repos._current = new Repos();
        return Repos._current;
    }

    constructor() {
        this.human = new HumanRepo();
        this.dragon = new DragonRepo();
    }
}