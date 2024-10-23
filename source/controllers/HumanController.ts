import { controller, httpGet, interfaces } from "inversify-express-utils";
import express from "express";
import { BaseController } from "./BaseController"

@controller("/humans")
export class HumanController extends BaseController {

    @httpGet("/")
    public async getAll(req: express.Request, res: express.Response): Promise<interfaces.IHttpActionResult> {
        return this.actionWrapperAnon(req, res, async () => {
            return this.repos.human.loadAll();
        });
    }

    @httpGet("/1")
    public async getSpecific(req: express.Request, res: express.Response): Promise<interfaces.IHttpActionResult> {
        return this.actionWrapperAnon(req, res, async () => {
            return this.repos.human.loadSpecific();
        });
    }
}