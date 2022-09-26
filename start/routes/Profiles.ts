import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    //Profiles
    Route.get('/Profiles','ProfilesController.index');
    Route.post('/Profiles','ProfilesController.store');
    Route.get('/Profiles/:id','ProfilesController.show');
    Route.put('/Profiles/:id','ProfilesController.update');
    Route.delete('/Profiles/:id','ProfilesController.destroy');
})