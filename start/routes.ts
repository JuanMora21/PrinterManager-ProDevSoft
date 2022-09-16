/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
//Apitokens
Route.get('/ApiTokens','ApiTokensController.index');
Route.post('/ApiTokens','ApiTokensController.store');
Route.get('/ApiTokens/:id','ApiTokensController.show');
Route.put('/ApiTokens/:id','ApiTokensController.update');
Route.delete('/ApiTokens/:id','ApiTokensController.destroy');
//Users
Route.get('/Users','UsersController.index');
Route.post('/Users','UsersController.store');
Route.get('/Users/:id','UsersController.show');
Route.put('/Users/:id','UsersController.update');
Route.delete('/Users/:id','UsersController.destroy');
//Profiles
Route.get('/Profiles','ProfilesController.index');
Route.post('/Profiles','ProfilesController.store');
Route.get('/Profiles/:id','ProfilesController.show');
Route.put('/Profiles/:id','ProfilesController.update');
Route.delete('/Profiles/:id','ProfilesController.destroy');
//Permissions
Route.get('/Permissions','PermissionsController.index');
Route.post('/Permissions','PermissionsController.store');
Route.get('/Permissions/:id','PermissionsController.show');
Route.put('/Permissions/:id','PermissionsController.update');
Route.delete('/Permissions/:id','PermissionsController.destroy');
//Roles
Route.get('/Roles','RolesController.index');
Route.post('/Roles','RolesController.store');
Route.get('/Roles/:id','RolesController.show');
Route.put('/Roles/:id','RolesController.update');
Route.delete('/Roles/:id','RolesController.destroy');
//PermissionsRoles
Route.get('/PermissionsRoles','PermissionsRolesController.index');
Route.post('/PermissionsRoles','PermissionsRolesController.store');
Route.get('/PermissionsRoles/:id','PermissionsRolesController.show');
Route.put('/PermissionsRoles/:id','PermissionsRolesController.update');
Route.delete('/PermissionsRoles/:id','PermissionsRolesController.destroy');
//Libraries
Route.get('/Libraries','LibrariesController.index');
Route.post('/Libraries','LibrariesController.store');
Route.get('/Libraries/:id','LibrariesController.show');
Route.put('/Libraries/:id','LibrariesController.update');
Route.delete('/Libraries/:id','LibrariesController.destroy');
//Categories
Route.get('/Categories','CategoriesController.index');
Route.post('/Categories','CategoriesController.store');
Route.get('/Categories/:id','CategoriesController.show');
Route.put('/Categories/:id','CategoriesController.update');
Route.delete('/Categories/:id','CategoriesController.destroy');
//Archives
Route.get('/Archives','ArchivesController.index');
Route.post('/Archives','ArchivesController.store');
Route.get('/Archives/:id','ArchivesController.show');
Route.put('/Archives/:id','ArchivesController.update');
Route.delete('/Archives/:id','ArchivesController.destroy');
//Printers
Route.get('/Printers','Printer3DsController.index');
Route.post('/Printers','Printer3DsController.store');
Route.get('/Printers/:id','Printer3DsController.show');
Route.put('/Printers/:id','Printer3DsController.update');
Route.delete('/Printers/:id','Printer3DsController.destroy');
//UserPrinters
Route.get('/UserPrinters','UserPrintersController.index');
Route.post('/UserPrinters','UserPrintersController.store');
Route.get('/UserPrinters/:id','UserPrintersController.show');
Route.put('/UserPrinters/:id','UserPrintersController.update');
Route.delete('/UserPrinters/:id','UserPrintersController.destroy');
//Reservations
Route.get('/Reservations','ReservationsController.index');
Route.post('/Reservations','ReservationsController.store');
Route.get('/Reservations/:id','ReservationsController.show');
Route.put('/Reservations/:id','ReservationsController.update');
Route.delete('/Reservations/:id','ReservationsController.destroy');
//Tasks
Route.get('/Tasks','TasksController.index');
Route.post('/Tasks','TasksController.store');
Route.get('/Tasks/:id','TasksController.show');
Route.put('/Tasks/:id','TasksController.update');
Route.delete('/Tasks/:id','TasksController.destroy');
//TaskItems
Route.get('/TaskItems','TaskItemsController.index');
Route.post('/TaskItems','TaskItemsController.store');
Route.get('/TaskItems/:id','TaskItemsController.show');
Route.put('/TaskItems/:id','TaskItemsController.update');
Route.delete('/TaskItems/:id','TaskItemsController.destroy');
//securities
Route.post("/login","SecuritiesController.login");
Route.post("/forgot","SecuritiesController.forgotPassword");
Route.post("/reset","SecuritiesController.resetPassword");
Route.post("/logout","SecuritiesController.logout");