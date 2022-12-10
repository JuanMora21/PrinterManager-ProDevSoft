import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/PermissionsRoles','PermissionsRolesController.index');
    Route.post('/PermissionsRoles','PermissionsRolesController.store');
    Route.get('/PermissionsRoles/:id','PermissionsRolesController.show');
    Route.put('/PermissionsRoles/:id','PermissionsRolesController.update');
    Route.delete('/PermissionsRoles/:id','PermissionsRolesController.destroy');
})//.middleware([])