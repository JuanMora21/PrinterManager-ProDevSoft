import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Role from "App/Models/Role";
import User from 'App/Models/User';
export default class RolesContRoleler {
    public async index(ctx:HttpContextContract){
        let Roles:Role[]=await Role.query().preload('permissions')
        return Roles;
    }
    public async store({request}:HttpContextContract){
        const body=request.body();
        const theRole:Role=await Role.create(body);
        return theRole;
    }
    public async show({params}:HttpContextContract) {
        return Role.findOrFail(params.id);
    }
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theRole:Role=await Role.findOrFail(params.id);
        theRole.name=body.name;
        return theRole.save();
    }
   
    public async destroy({params}:HttpContextContract) {
        let Users= await User.query()
                                   .where('role_id',params.id)
        if(Users){
            return {
                "error":"El Role tiene Users asociados",
                "Users":Users
            }
        }else{
            const theRole:Role=await Role.findOrFail(params.id);
            return theRole.delete();
        }

    }    
}