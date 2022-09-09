import Encryption from '@ioc:Adonis/Core/Encryption'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import User from 'App/Models/User'
import EmailService from 'App/Services/EmailService'

export default class UsersController {
  /**
   * Lista todos los users
   */
  public async index(ctx: HttpContextContract) {
    let users: User[] = await User.query().preload('role').preload('profile')
    return users
  }

  public async store({ request }: HttpContextContract) {
    const body = request.body()
    body.contrasena = Encryption.encrypt(body.contrasena)
    const new_user: User = await User.create(body)
    return new_user
  }
  /**
   * Muestra la información de un solo user
   */
  public async show({ params }: HttpContextContract) {
    let the_user = await User.query().where('id', params.id).preload('profile')
    return the_user
  }
  /**
   * Actualiza la información de un user basado
   * en el identificador y news parámetros
   */
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const the_user: User = await User.findOrFail(params.id)
    the_user.name = body.name
    the_user.email = body.email
    the_user.password = Encryption.encrypt(body.password)
    the_user.id_role = body.id_role
    if (body.profile) {
      body.profile.id_user = params.id
      await this.setProfile(body.profile)
    }
    return the_user.save()
  }

  public async setProfile(info_profile) {
    const profile_user = await Profile.findBy('id_user', info_profile.id_user)
    if (profile_user) {
      profile_user.phone = info_profile.phone
      profile_user.url_facebook = info_profile.url_facebook
      profile_user.url_instagram = info_profile.url_instagram
      await profile_user.save()
    } else {
      await Profile.create(info_profile)
    }
  }
  /**
   * Elimina a un user basado en el identificador
   */
  public async destroy({ params }: HttpContextContract) {
    const the_user: User = await User.findOrFail(params.id)
    return the_user.delete()
  }

  public async testEmail({params, request}: HttpContextContract){
    const body = request.body()
    let theEmailService:EmailService=new EmailService();
    theEmailService.sendEmail(body.email,"Nuevo Inicio de Sesión","Usted acaba de iniciar sesión en el sistema.")
  }
}
