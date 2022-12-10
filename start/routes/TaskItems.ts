import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/TaskItems','TaskItemsController.index');
    Route.post('/TaskItems','TaskItemsController.store');
    Route.get('/TaskItems/:id','TaskItemsController.show');
    Route.put('/TaskItems/:id','TaskItemsController.update');
    Route.delete('/TaskItems/:id','TaskItemsController.destroy');
})//.middleware([])