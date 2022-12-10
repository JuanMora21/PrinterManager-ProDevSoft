
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Printers','PrintersController.index');
    Route.post('/Printers','PrintersController.store');
    Route.get('/Printers/:id','PrintersController.show');
    Route.put('/Printers/:id','PrintersController.update');
    Route.delete('/Printers/:id','PrintersController.destroy');
})//.middleware(['auth:api','permission'])