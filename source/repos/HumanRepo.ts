import { Human } from "../models/Human";
import { DB } from "./DB";

export class HumanRepo {
    loadAll = () => {
        return DB.query("SELECT * FROM humans", []);
    };

    loadSpecific = (id: number) => {
        return DB.queryOne("SELECT * FROM humans WHERE humanId = ?", [id]);
    };

    public save(human: Human) {
        console.log("Saved!")
        return human.humanId ? this.update(human) : this.create(human);
    }

    public delete(human: Human) {
        console.log('Deleted!')
        return this.deletion(human);
    }

    private async create(human: Human) {
        const sql = "INSERT INTO `humans` (firstName, middleName, lastName, dragon, age, bravery, intelligence, speed, attack, defense, color, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const params = [human.firstName, human.middleName, human.lastName, human.dragon, human.age, human.bravery, human.intelligence, human.speed, human.attack, human.defense, human.color, human.image];
        console.log(sql, params);
        await DB.query(sql, params);
        return human;
    }

    private async update(human: Human) {
        const sql = "UPDATE `humans` SET firstName=?, middleName=?, lastName=?, dragon=?, age=?, bravery=?, intelligence=?, speed=?, attack=?, defense=?, color=?, image=? WHERE humanId=?";
        const params = [human.firstName, human.middleName, human.lastName, human.dragon, human.age, human.bravery, human.intelligence, human.speed, human.attack, human.defense, human.color, human.image, human.humanId];
        await DB.query(sql, params);
        return human;
    }

    private async deletion(human: Human) {
        const sql = "DELETE FROM `humans` WHERE humanId=?";
        const params = [human.humanId];
        await DB.query(sql, params);
    }
}