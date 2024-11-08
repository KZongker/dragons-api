import { Dragon } from "source/models/Dragon";
import { DB } from "./DB";

export class DragonRepo {
    loadAll = () => {
        return DB.query("SELECT * FROM dragons", []);
    };

    loadSpecific = (id: number) => {
        return DB.queryOne("SELECT * FROM dragons WHERE dragonId = ?", [id]);
    };

    public save(dragon: Dragon) {
        console.log("Saved!")
        return dragon.dragonId ? this.update(dragon) : this.create(dragon);
    }

    public delete(dragon: Dragon) {
        console.log('Deleted!')
        return this.deletion(dragon);
    }

    private async create(dragon: Dragon) {
        const sql = "INSERT INTO `dragons` (name, species, class, rider, fireType, size, speed, attack, defense, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const params = [dragon.name, dragon.species, dragon.class, dragon.rider, dragon.fireType, dragon.size, dragon.speed, dragon.attack, dragon.defense, dragon.image];
        console.log(sql, params);
        await DB.query(sql, params);
        return dragon;
    }

    private async update(dragon: Dragon) {
        const sql = "UPDATE `dragons` SET name=?, species=?, class=?, rider=?, fireType=?, size=?, speed=?, attack=?, defense=?, image=? WHERE dragonId=?";
        const params = [dragon.name, dragon.species, dragon.class, dragon.rider, dragon.fireType, dragon.size, dragon.speed, dragon.attack, dragon.defense, dragon.image, dragon.dragonId];
        await DB.query(sql, params);
        return dragon;
    }

    private async deletion(dragon: Dragon) {
        const sql = "DELETE FROM `dragons` WHERE dragonId=?";
        const params = [dragon.dragonId];
        await DB.query(sql, params);
    }
}