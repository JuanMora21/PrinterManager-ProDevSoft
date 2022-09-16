import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Printer3D from '../../Models/Printer3D';

export default class Printer3DsController {
            /**
     * Lista todos los Printers
     */
    public async index(ctx:HttpContextContract){
        let Printers:Printer3D[]=await Printer3D.query()
        return Printers;
    }
    /**
     * Almacena la información de un Printer3D
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newPrinter3D:Printer3D=await Printer3D.create(body);
        return newPrinter3D;
    }
    /**
     * Muestra la información de un solo Printer3D
     */
    public async show({params}:HttpContextContract) {
        let thePrinter3D=await Printer3D.query().where("id",params.id);
        return thePrinter3D;
    }
    /**
     * Actualiza la información de un Printer3D basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const thePrinter3D:Printer3D=await Printer3D.findOrFail(params.id);
        thePrinter3D.name=body.name;
        thePrinter3D.model=body.model;  
        thePrinter3D.type=body.type; 
        thePrinter3D.beedHeight=body.beedHeight; 
        thePrinter3D.beedWidth=body.beedWidth;   
        return thePrinter3D.save();
    }
    /**
     * Elimina a un Printer3D basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const thePrinter3D:Printer3D=await Printer3D.findOrFail(params.id);
        return thePrinter3D.delete();
    }
}
