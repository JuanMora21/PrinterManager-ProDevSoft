import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Archives','ArchivesController.index');
    Route.post('/Archives','ArchivesController.store');
    Route.get('/Archives/:id','ArchivesController.show');
    Route.put('/Archives/:id','ArchivesController.update');
    Route.delete('/Archives/:id','ArchivesController.destroy');
})//.middleware(['auth:api','permission'])