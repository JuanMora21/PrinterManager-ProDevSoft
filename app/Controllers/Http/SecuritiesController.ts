import Hash from '@ioc:Adonis/Core/Hash'

import User from "App/Models/User";
import EmailService from 'App/Services/EmailService';
import SecurityTemplate from 'App/Services/EmailsTemplates/SecurityTemplate';

export default class SeguritiesController {
    async login({ auth, request, response }) {
        const email= request.input('email')
        const password = request.input('password')
        const theUser = await User.query()
            .where('email', email)
            .firstOrFail()
        if (await Hash.verify(theUser.password, password)) {
            //Generación token
            const token = await auth.use('api').generate(theUser, {
                expiresIn: '60 mins'
            })
            let template_email: SecurityTemplate = new SecurityTemplate()
            let html = template_email.newLogin()
            let service_email: EmailService = new EmailService();
            service_email.sendEmail(email, "Nuevo Inicio de Sesión", html)
            //Obtiene los datos correspondientes a la relación
            await theUser.load("role");
            theUser.password = ""
            return {
                "token": token,
                "User": theUser
            };
        } else {
            return response.unauthorized('Credenciales inválidas')
        }
    }
    async logout({ auth }) {
        await auth.use('api').revoke()
        return {
            revoked: true
        }
    }
    async forgotPassword({ auth, request }) {
        let answer: Object = {}
        const email= request.input('email')
        const theUser = await User.query()
            .where('email', email)
            .firstOrFail()
        if (!theUser) {
            answer = {
                "status": "error",
                "message": "El email no está registrado en la plataforma"
            }
        } else {
            const token = await auth.use('api').generate(theUser, {
                expiresIn: '60 mins'
            })
            let template_email: SecurityTemplate = new SecurityTemplate()
            let html = template_email.forgotPassword(token.token)
            let service_email: EmailService = new EmailService();
            service_email.sendEmail(email, "Solicitud restablecimiento de contraseña", html)
            answer = {
                "status": "success",
                "message": "Revisar el email"
            }
        }
        return answer;
    }
    async resetPassword({ auth, request }) {
        let answer: Object = {}
        try {
            await auth.use('api').authenticate()
            auth.use('api').isAuthenticated
        } catch (error) {
            return {
                status: "error",
                message: "Token corrupto"
            };
        }
        const theUser = await User.findBy('email', auth.user!.email);
        if (!theUser) {
            answer = {
                status: "error",
                message: "Este User no existe"
            }
        } else {
            theUser.password = request.input('password');
            await theUser.save();
            await auth.use('api').revoke();
            answer = {
                status: "success",
                message: "La contraseña se ha restaurado correctamente"
            };
        }
        return answer;
    }
}
