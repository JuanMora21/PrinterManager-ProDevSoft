import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task';

export default class TasksController {
            /**
     * Lista todos los Tasks
     */
    public async index(ctx:HttpContextContract){
        let Tasks:Task[]=await Task.query()
        return Tasks;
    }
    /**
     * Almacena la información de un Task
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newTask:Task=await Task.create(body);
        return newTask;
    }
    /**
     * Muestra la información de un solo Task
     */
    public async show({params}:HttpContextContract) {
        let theTask=await Task.query().where("id",params.id);
        return theTask;
    }
    /**
     * Actualiza la información de un Task basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theTask:Task=await Task.findOrFail(params.id);
        theTask.name=body.name;
        theTask.durationHours=body.durationHours;  
        theTask.priority=body.priority; 
        theTask.archive_id=body.archive_id; 
        return theTask.save();
    }
    /**
     * Elimina a un Task basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theTask:Task=await Task.findOrFail(params.id);
        return theTask.delete();
    }

}
