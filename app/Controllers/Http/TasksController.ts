import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Archive from 'App/Models/Archive';
import Task from 'App/Models/Task';

export default class TasksController {
            /**
     * Lista todos los Tasks
     */
    public async index(ctx:HttpContextContract){
        let Tasks:Task[]=await Task.query().preload("archive")
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
        if(body.Archive){
            body.Archive.archive_id=params.id;
            await this.setArchive(body.Archive);
        }
        return theTask.save();
    }
    /**
     * Elimina a un Task basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theTask:Task=await Task.findOrFail(params.id);
        return theTask.delete();
    }

    public async setArchive(info_Archive){
        const Archive_User=await Archive.findBy('archive_id',info_Archive.archive_id );
            if(Archive_User){
                Archive_User.name=info_Archive.name;
                Archive_User.format=info_Archive.format;
                Archive_User.visibility=info_Archive.visibility;
                Archive_User.category_id=info_Archive.category_id;
                Archive_User.save();
            }else{
                await Archive.create(info_Archive);
            }
    }

}
