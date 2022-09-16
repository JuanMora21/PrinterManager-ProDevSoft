import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Library from '../../Models/Library';

export default class LibrariesController {
        /**
     * Lista todos los Libraries
     */
    public async index(ctx:HttpContextContract){
        let Libraries:Library[]=await Library.query()
        return Libraries;
    }
    /**
     * Almacena la información de un Library
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newLibrary:Library=await Library.create(body);
        return newLibrary;
    }
    /**
     * Muestra la información de un solo Library
     */
    public async show({params}:HttpContextContract) {
        let theLibrary=await Library.query().where("id",params.id);
        return theLibrary;
    }
    /**
     * Actualiza la información de un Library basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theLibrary:Library=await Library.findOrFail(params.id);
        theLibrary.user_id=body.user_id;    
        return theLibrary.save();
    }
    /**
     * Elimina a un Library basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theLibrary:Library=await Library.findOrFail(params.id);
        return theLibrary.delete();
    }

}
