import { DB } from "./DB";

export class HumanRepo {
    loadAll = () => {
        return DB.query("SELECT * FROM humans", []);
    };

    loadSpecific = (id: number) => {
        return DB.queryOne("SELECT * FROM humans WHERE human_id = ?", [id]);
    };
}