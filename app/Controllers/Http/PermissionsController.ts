import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permission from 'App/Models/Permission';

export default class PermissionsController {
    public async index(ctx:HttpContextContract){
        let Permissions:Permission[]=await Permission.query()
        return Permissions;
    }
    public async store({request}:HttpContextContract){
        const body=request.body();
        const thePermission:Permission=await Permission.create(body);
        return thePermission;
    }
    public async show({params}:HttpContextContract) {
        return Permission.findOrFail(params.id);
    }
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const thePermission:Permission=await Permission.findOrFail(params.id);
        thePermission.url=body.url;
        thePermission.method=body.method;
        return thePermission.save();
    }
    public async destroy({params}:HttpContextContract) {
        const thePermission:Permission=await Permission.findOrFail(params.id);
        return thePermission.delete();
    }
}