import { DB } from "./DB";

export class HumanRepo {
    loadAll = () => {
        return DB.query("SELECT * FROM humans", []);
    };

    loadSpecific = () => {
        return DB.query("SELECT * FROM humans WHERE human_id LIKE 1", []);
    };
}