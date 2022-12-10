import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post("/login","SecuritiesController.login");
    Route.post("/forgot","SecuritiesController.forgotPassword");
    Route.post("/reset","SecuritiesController.resetPassword");
    Route.post("/logout","SecuritiesController.logout");
})