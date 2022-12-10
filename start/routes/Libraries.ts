import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Libraries','LibrariesController.index');
    Route.post('/Libraries','LibrariesController.store');
    Route.get('/Libraries/:id','LibrariesController.show');
    Route.put('/Libraries/:id','LibrariesController.update');
    Route.delete('/Libraries/:id','LibrariesController.destroy');
})//.middleware(['auth:api','permission'])