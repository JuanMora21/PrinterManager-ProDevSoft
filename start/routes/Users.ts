import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    //Users
    Route.get('/Users','UsersController.index');
    Route.post('/Users','UsersController.store');
    Route.get('/Users/:id','UsersController.show');
    Route.put('/Users/:id','UsersController.update');
    Route.delete('/Users/:id','UsersController.destroy');
})
//'auth:api','permission'