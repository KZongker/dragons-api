import { controller, httpGet, interfaces } from "inversify-express-utils";
import express from "express";
import { BaseController } from "./BaseController"

@controller("/test")
export class TestController extends BaseController {

    @httpGet("/")
    public async getAll(req: express.Request, res: express.Response): Promise<interfaces.IHttpActionResult> {
        return this.actionWrapperAnon(req, res, async () => {
            // return "Hello World";
            return this.repos.human.loadAll();
        });
    }
}