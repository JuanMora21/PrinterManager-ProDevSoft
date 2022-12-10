import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/UserPrinters','UserPrintersController.index');
    Route.post('/UserPrinters','UserPrintersController.store');
    Route.get('/UserPrinters/:id','UserPrintersController.show');
    Route.put('/UserPrinters/:id','UserPrintersController.update');
    Route.delete('/UserPrinters/:id','UserPrintersController.destroy');
})//.middleware([])