import { BaseHttpController } from "inversify-express-utils";
import express from "express";
import { Repos } from "../repos/Repos";

export class BaseController extends BaseHttpController {

    public repos: Repos;

    constructor() {
        super();
        this.repos = Repos.getCurrent();
    }

    public error(errors: string[]) {
        return this.json({ errors }, 500);
    }

    public denyAccess(errors: string[]) {
        return this.json({ errors }, 401);
    }

    public include(req: express.Request, item: string) {
        let result = false;
        if (req.query.include !== undefined) {
            const value: string = req.query.include as string;
            const items = value.split(",");
            if (items.indexOf(item) > -1) result = true;
        }
        return result;
    }


    public async actionWrapperAnon(req: express.Request, res: express.Response, fetchFunction: () => any): Promise<any> {
        try {
            const result = await fetchFunction();
            return result;
        } catch (e: any) {
            console.log(e);
            return this.internalServerError(e);
        }
    }



}