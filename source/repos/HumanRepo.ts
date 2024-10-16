import { DB } from "./DB";

export class HumanRepo {
    loadAll = () => {
        return DB.query("SELECT * FROM humans", []);
    };
}