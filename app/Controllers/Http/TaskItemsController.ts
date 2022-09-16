import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TaskItem from '../../Models/TaskItem';

export default class TaskItemsController {
                /**
     * Lista todos los TaskItems
     */
    public async index(ctx:HttpContextContract){
        let TaskItems:TaskItem[]=await TaskItem.query()
        return TaskItems;
    }
    /**
     * Almacena la información de un TaskItem
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newTaskItem:TaskItem=await TaskItem.create(body);
        return newTaskItem;
    }
    /**
     * Muestra la información de un solo TaskItem
     */
    public async show({params}:HttpContextContract) {
        let theTaskItem=await TaskItem.query().where("id",params.id);
        return theTaskItem;
    }
    /**
     * Actualiza la información de un TaskItem basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theTaskItem:TaskItem=await TaskItem.findOrFail(params.id);
        theTaskItem.reservation_id=body.reservation_id; 
        theTaskItem.task_id=body.task_id;   
        return theTaskItem.save();
    }
    /**
     * Elimina a un TaskItem basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theTaskItem:TaskItem=await TaskItem.findOrFail(params.id);
        return theTaskItem.delete();
    }
}
