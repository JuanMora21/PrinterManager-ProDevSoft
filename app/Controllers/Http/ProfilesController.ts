import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Profile from "App/Models/Profile";

export default class ProfilesController {
            /**
     * Lista todos los Profiles
     */
    public async index(ctx:HttpContextContract){
        let Profiles:Profile[]=await Profile.query()
        return Profiles;
    }
    /**
     * Almacena la información de un Profile
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newProfile:Profile=await Profile.create(body);
        return newProfile;
    }
    /**
     * Muestra la información de un solo Profile
     */
    public async show({params}:HttpContextContract) {
        let theProfile=await Profile.query().where("id",params.id);
        return theProfile;
    }
    /**
     * Actualiza la información de un Profile basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theProfile:Profile=await Profile.findOrFail(params.id);
        theProfile.phone=body.phone;
        theProfile.facebook_url=body.facebook_url;  
        theProfile.instagram_url=body.instagram_url; 
        theProfile.user_id=body.user_id;   
        return theProfile.save();
    }
    /**
     * Elimina a un Profile basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theProfile:Profile=await Profile.findOrFail(params.id);
        return theProfile.delete();
    }
    
}
