import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/ApiTokens','ApiTokensController.index');
    Route.post('/ApiTokens','ApiTokensController.store');
    Route.get('/ApiTokens/:id','ApiTokensController.show');
    Route.put('/ApiTokens/:id','ApiTokensController.update');
    Route.delete('/ApiTokens/:id','ApiTokensController.destroy');
})//.middleware(['auth:api','permission'])