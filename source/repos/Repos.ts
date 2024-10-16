import { HumanRepo } from "./HumanRepo";

export class Repos {
    public human: HumanRepo;

    private static _current: Repos = null;
    public static getCurrent = () => {
        if (Repos._current === null) Repos._current = new Repos();
        return Repos._current;
    }

    constructor() {
        this.human = new HumanRepo();
    }
}