import { DB } from "./DB";

export class DragonRepo {
    loadAll = () => {
        return DB.query("SELECT * FROM dragons", []);
    };
}