import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Encryption from '@ioc:Adonis/Core/Encryption'
import Profile from 'App/Models/Profile';

export default class UsersController {
    /**
     * Lista todos los Users
     */
    public async index(ctx:HttpContextContract){
        let Users:User[]=await User.query().preload('role').preload('profile')
        return Users;
    }
    /**
     * Almacena la información de un User
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        body.password=Encryption.encrypt(body.password);
        const newUser:User=await User.create(body);
        return newUser;
    }
    /**
     * Muestra la información de un solo User
     */
    public async show({params}:HttpContextContract) {
        let theUser=await User.query().where("id",params.id).preload('profile');
        return theUser;
    }
    /**
     * Actualiza la información de un User basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theUser:User=await User.findOrFail(params.id);
        theUser.name=body.name;
        theUser.email=body.email;
        theUser.password=Encryption.encrypt(body.password);
        theUser.role_id=body.role_id;
        if(body.Profile){
            body.Profile.user_id=params.id;
            await this.setProfile(body.Profile);
        }
       
        return theUser.save();
    }
    public async setProfile(info_Profile){
        const Profile_User=await Profile.findBy('user_id',info_Profile.user_id );
            if(Profile_User){
                Profile_User.phone=info_Profile.phone;
                Profile_User.facebook_url=info_Profile.facebook_url;
                Profile_User.instagram_url=info_Profile.instagram_url;
                Profile_User.save();
            }else{
                await Profile.create(info_Profile);
            }
    }
    /**
     * Elimina a un User basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theUser:User=await User.findOrFail(params.id);
        return theUser.delete();
    }    
}