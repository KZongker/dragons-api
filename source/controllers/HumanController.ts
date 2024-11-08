import { controller, httpDelete, httpGet, httpPost, interfaces, requestParam } from "inversify-express-utils";
import express from "express";
import { BaseController } from "./BaseController"
import { Human } from "../models/Human";

@controller("/humans")
export class HumanController extends BaseController {

    @httpGet("/")
    public async getAll(req: express.Request, res: express.Response): Promise<interfaces.IHttpActionResult> {
        return this.actionWrapperAnon(req, res, async () => {
            return this.repos.human.loadAll();
        });
    }

    @httpGet("/:id")
    public async getSpecific(@requestParam("id") id: number, req: express.Request, res: express.Response): Promise<interfaces.IHttpActionResult> {
        return this.actionWrapperAnon(req, res, async () => {
            return this.repos.human.loadSpecific(id);
        });
    }

    @httpPost("/")
    public async save(req: express.Request<{}, {}, any>, res: express.Response): Promise<interfaces.IHttpActionResult> {
        console.log(req.body);
        return this.actionWrapperAnon(req, res, async () => {
            console.log(req.body);
            return this.repos.human.save(req.body);
        });
    }

    @httpDelete("/:id")
    public async delete(req: express.Request<{}, {}, any>, res: express.Response): Promise<interfaces.IHttpActionResult> {
        return this.actionWrapperAnon(req, res, async () => {
            console.log(req.body);
            return this.repos.human.delete(req.body);
        });
    }

}