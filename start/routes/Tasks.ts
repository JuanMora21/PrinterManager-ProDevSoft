import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Tasks','TasksController.index');
    Route.post('/Tasks','TasksController.store');
    Route.get('/Tasks/:id','TasksController.show');
    Route.put('/Tasks/:id','TasksController.update');
    Route.delete('/Tasks/:id','TasksController.destroy');
})//.middleware(['auth:api','permission'])