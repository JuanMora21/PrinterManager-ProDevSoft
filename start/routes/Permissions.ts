import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    //Permissions
    Route.get('/Permissions','PermissionsController.index');
    Route.post('/Permissions','PermissionsController.store');
    Route.get('/Permissions/:id','PermissionsController.show');
    Route.put('/Permissions/:id','PermissionsController.update');
    Route.delete('/Permissions/:id','PermissionsController.destroy');
})