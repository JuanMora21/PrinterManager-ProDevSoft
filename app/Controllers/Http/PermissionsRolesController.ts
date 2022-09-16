import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PermissionRole from 'App/Models/PermissionRole';

export default class PermissionsRolesController {
    public async index(ctx:HttpContextContract){
        let PermissionsRoles:PermissionRole[]=await PermissionRole.query()
        return PermissionsRoles;
    }
    public async store({request}:HttpContextContract){
        const body=request.body();
        const thePermissionRole:PermissionRole=await PermissionRole.create(body);
        return thePermissionRole;
    }
    public async show({params}:HttpContextContract) {
        return PermissionRole.findOrFail(params.id);
    }
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const thePermissionRole:PermissionRole=await PermissionRole.findOrFail(params.id);
        thePermissionRole.role_id=body.role_id;
        thePermissionRole.permission_id=body.permission_id;
        return thePermissionRole.save();
    }
    public async destroy({params}:HttpContextContract) {
        const thePermissionRole:PermissionRole=await PermissionRole.findOrFail(params.id);
        return thePermissionRole.delete();
    }
}