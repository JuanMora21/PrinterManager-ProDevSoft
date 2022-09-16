import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from "App/Models/Category";

export default class CategoriesController {
        /**
     * Lista todos los Categories
     */
    public async index(ctx:HttpContextContract){
        let Categories:Category[]=await Category.query()
        return Categories;
    }
    /**
     * Almacena la información de un Category
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        const newCategory:Category=await Category.create(body);
        return newCategory;
    }
    /**
     * Muestra la información de un solo Category
     */
    public async show({params}:HttpContextContract) {
        let theCategory=await Category.query().where("id",params.id);
        return theCategory;
    }
    /**
     * Actualiza la información de un Category basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theCategory:Category=await Category.findOrFail(params.id);
        theCategory.name=body.name;
        theCategory.library_id=body.library_id;    
        return theCategory.save();
    }
    /**
     * Elimina a un Category basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theCategory:Category=await Category.findOrFail(params.id);
        return theCategory.delete();
    }
}
