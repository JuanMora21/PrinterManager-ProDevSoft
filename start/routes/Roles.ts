import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    //Roles
    Route.get('/Roles','RolesController.index');
    Route.post('/Roles','RolesController.store');
    Route.get('/Roles/:id','RolesController.show');
    Route.put('/Roles/:id','RolesController.update');
    Route.delete('/Roles/:id','RolesController.destroy');
})//.middleware([])