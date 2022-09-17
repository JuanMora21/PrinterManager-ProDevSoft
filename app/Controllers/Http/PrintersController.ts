import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Printer from '../../Models/Printer';

export default class PrintersController {
            /**
     * Lista todos los Printer
     */
    public async index(ctx:HttpContextContract){
        let Printers:Printer[]=await Printer.query()
        return Printers;
    }
    /**
     * Almacena la información de un Printers
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newPrinter:Printer=await Printer.create(body);
        return newPrinter;
    }
    /**
     * Muestra la información de un solo Printer
     */
    public async show({params}:HttpContextContract) {
        let thePrinter=await Printer.query().where("id",params.id);
        return thePrinter;
    }
    /**
     * Actualiza la información de un Printer basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const thePrinter:Printer=await Printer.findOrFail(params.id);
        thePrinter.name=body.name;
        thePrinter.model=body.model;  
        thePrinter.type=body.type; 
        thePrinter.beed_height=body.beed_height; 
        thePrinter.beed_width=body.beed_width;   
        return thePrinter.save();
    }
    /**
     * Elimina a un Printer basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const thePrinter:Printer=await Printer.findOrFail(params.id);
        return thePrinter.delete();
    }
}
