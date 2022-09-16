import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserPrinter from '../../Models/UserPrinter';

export default class UserPrintersController {
    /**
     * Lista todos los UserPrinters
     */
    public async index(ctx:HttpContextContract){
        let UserPrinters:UserPrinter[]=await UserPrinter.query()
        return UserPrinters;
    }
    /**
     * Almacena la información de un UserPrinter
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newUserPrinter:UserPrinter=await UserPrinter.create(body);
        return newUserPrinter;
    }
    /**
     * Muestra la información de un solo UserPrinter
     */
    public async show({params}:HttpContextContract) {
        let theUserPrinter=await UserPrinter.query().where("id",params.id);
        return theUserPrinter;
    }
    /**
     * Actualiza la información de un UserPrinter basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theUserPrinter:UserPrinter=await UserPrinter.findOrFail(params.id);
        theUserPrinter.user_id=body.user_id; 
        theUserPrinter.printer_id=body.printer_id; 
        return theUserPrinter.save();
    }
    /**
     * Elimina a un UserPrinter basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theUserPrinter:UserPrinter=await UserPrinter.findOrFail(params.id);
        return theUserPrinter.delete();
    }
}
