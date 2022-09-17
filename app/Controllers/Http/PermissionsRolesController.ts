import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PermissionsRole from 'App/Models/PermissionsRole';

export default class PermissionsRolesController {
    public async index(ctx:HttpContextContract){
        let PermissionsRoles:PermissionsRole[]=await PermissionsRole.query()
        return PermissionsRoles;
    }
    public async store({request}:HttpContextContract){
        const body=request.body();
        const thePermissionsRole:PermissionsRole=await PermissionsRole.create(body);
        return thePermissionsRole;
    }
    public async show({params}:HttpContextContract) {
        return PermissionsRole.findOrFail(params.id);
    }
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const thePermissionsRole:PermissionsRole=await PermissionsRole.findOrFail(params.id);
        thePermissionsRole.role_id=body.role_id;
        thePermissionsRole.permission_id=body.permission_id;
        return thePermissionsRole.save();
    }
    public async destroy({params}:HttpContextContract) {
        const thePermissionsRole:PermissionsRole=await PermissionsRole.findOrFail(params.id);
        return thePermissionsRole.delete();
    }
}