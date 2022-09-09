import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile';
import Role from './Role';
import ApiToken from './ApiToken';
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  
  @column()
  id_role: number;

  @column()
  public name:string;

  @column()
  public email:string;

  @column()
  public password:string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Profile, {foreignKey: 'id_user'})
  public profile: HasOne<typeof Profile>

  @belongsTo(() => Role, {foreignKey: 'id_role'})
  public role: BelongsTo<typeof Role>
    
  @hasMany(() => ApiToken,{
    foreignKey: 'id_user',
  })
  public users: HasMany<typeof ApiToken>
  
  @beforeSave()
  public static async hashPassword (theUser: User) {
    if (theUser.$dirty.password) {
      theUser.password = await Hash.make(theUser.password)    
    }
  }

}
