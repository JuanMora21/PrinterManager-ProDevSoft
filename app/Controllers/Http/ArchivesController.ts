import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Archive from "App/Models/Archive";

export default class ArchivesController {
    /**
     * Lista todos los Archives
     */
     public async index(ctx:HttpContextContract){
        let Archives:Archive[]=await Archive.query()
        return Archives;
    }
    /**
     * Almacena la información de un Archive
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newArchive:Archive=await Archive.create(body);
        return newArchive;
    }
    /**
     * Muestra la información de un solo Archive
     */
    public async show({params}:HttpContextContract) {
        let theArchive=await Archive.query().where("id",params.id);
        return theArchive;
    }
    /**
     * Actualiza la información de un Archive basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theArchive:Archive=await Archive.findOrFail(params.id);
        theArchive.name=body.name;
        theArchive.format=body.format;
        theArchive.visibility=body.visibility;
        theArchive.category_id=body.category_id;       
        return theArchive.save();
    }
    /**
     * Elimina a un Archive basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theArchive:Archive=await Archive.findOrFail(params.id);
        return theArchive.delete();
    }

}
