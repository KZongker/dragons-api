import { DB } from "./DB";

export class DragonRepo {
    loadAll = () => {
        return DB.query("SELECT * FROM dragons", []);
    };

    loadSpecific = (id: number) => {
        return DB.queryOne("SELECT * FROM dragons WHERE dragon_id = ?", [id]);
    };
}