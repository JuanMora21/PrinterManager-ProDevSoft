import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Reservations','ReservationsController.index');
    Route.post('/Reservations','ReservationsController.store');
    Route.get('/Reservations/:id','ReservationsController.show');
    Route.put('/Reservations/:id','ReservationsController.update');
    Route.delete('/Reservations/:id','ReservationsController.destroy');
})//.middleware(['auth:api','permission'])