import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Reservation from '../../Models/Reservation';

export default class ReservationsController {
     /**
     * Lista todos los Reservations
     */
    public async index(ctx:HttpContextContract){
        let Reservations:Reservation[]=await Reservation.query()
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
        let theReservation=await Reservation.query().where("id",params.id);
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
        theReservation.user_id=body.user_id; 
        theReservation.printer_id=body.printer_id;   
        return theReservation.save();
    }
    /**
     * Elimina a un Reservation basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theReservation:Reservation=await Reservation.findOrFail(params.id);
        return theReservation.delete();
    }

}
