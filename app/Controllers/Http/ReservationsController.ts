import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Printer from 'App/Models/Printer';
import User from 'App/Models/User';
import Reservation from '../../Models/Reservation';
//import TaskItem from '../../Models/TaskItem';

export default class ReservationsController {
     /**
     * Lista todos los Reservations
     */
    public async index(ctx:HttpContextContract){
        let Reservations:Reservation[]=await Reservation.query().preload('user').preload('printer');
        return Reservations;
    }
    /**
     * Almacena la información de un Reservation
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newReservation:Reservation=await Reservation.create(body);
        return newReservation;
    }
    /**
     * Muestra la información de un solo Reservation
     */
    public async show({params}:HttpContextContract) {
        let theReservation=await Reservation.query().where("id",params.id).preload('user').preload('printer');
        return theReservation;
    }
    /**
     * Actualiza la información de un Reservation basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theReservation:Reservation=await Reservation.findOrFail(params.id);
        theReservation.name=body.name;
        theReservation.start_date=body.start_date;  
        theReservation.start_time=body.start_time; 
        theReservation.end_date=body.end_date; 
        theReservation.end_time=body.end_time;
        //theReservation.user_id=body.user_id; 
        //theReservation.printer_id=body.printer_id; 
        if(body.user_id){
            body.user_id=params.user_id;
            await this.setUser(body.user_id);
        }  
        if(body.printer_id){
            body.printer_id=params.printer_id;
            await this.setPrinter(body.printer_id);
        }
        if(body.TaskItem){
            body.TaskItem.reservation_id=params.id;
            //await this.setTaskItem(body.TaskItem);
        }
        return theReservation.save();
    }
    /**
     * Elimina a un Reservation basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theReservation:Reservation=await Reservation.findOrFail(params.id);
        return theReservation.delete();
    }

    public async setUser(info_User){
        const user=await User.findBy('id',info_User );
            if(user){
                user.name=info_User.name;
                user.email=info_User.email;
                user.role_id=info_User.role_id;
                user.save();
            }else{
                await User.create(info_User);
            }
    }

    public async setPrinter(info_Printer){
        const printer= await Printer.findBy('id',info_Printer );
            if(printer){
                printer.name=info_Printer.name;
                printer.model=info_Printer.model;
                printer.type=info_Printer.type;
                printer.beed_height=info_Printer.beed_height;
                printer.beed_width=info_Printer.beed_width;
                printer.type=info_Printer.type;
                printer.save();
            }else{
                await Printer.create(info_Printer);
            }
    }
    /*
    public async setTaskItem(info_TaskItem){
        const taskItem= await TaskItem.findBy('reservation_id',info_TaskItem.reservation_id );
            if(taskItem){
                taskItem.reservation_id=info_TaskItem.reservation_id;
                taskItem.task_id=info_TaskItem.task_id;
                taskItem.save();
            }else{
                await TaskItem.create(info_TaskItem);
            }
    }
*/
}
