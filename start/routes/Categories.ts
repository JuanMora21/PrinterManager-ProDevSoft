import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Categories','CategoriesController.index');
    Route.post('/Categories','CategoriesController.store');
    Route.get('/Categories/:id','CategoriesController.show');
    Route.put('/Categories/:id','CategoriesController.update');
    Route.delete('/Categories/:id','CategoriesController.destroy');
})//.middleware(['auth:api','permission'])