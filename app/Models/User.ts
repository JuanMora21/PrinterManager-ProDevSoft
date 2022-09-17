import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column, HasMany, hasMany, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile';
import Role from './Role';
import ApiToken from './ApiToken';
import Hash from '@ioc:Adonis/Core/Hash';
import Library from './Library';
import Reservation from './Reservation';
import Printer from './Printer';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name:string;

  @column()
  public email:string;

  @column()
  public password:string;

  @column()
  role_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Profile, {foreignKey: 'user_id'})
  public profile: HasOne<typeof Profile>

  @hasOne(() => Library, {foreignKey: 'user_id'})
  public library: HasOne<typeof Library>

  @belongsTo(() => Role, {foreignKey: 'role_id'})
  public role: BelongsTo<typeof Role>
    
  @hasMany(() => ApiToken,{
    foreignKey: 'user_id',
  })
  public users: HasMany<typeof ApiToken>
  
  @hasMany(() => Reservation,{
    foreignKey: 'user_id',
  })
  public reservations: HasMany<typeof Reservation>

  @beforeSave()
  public static async hashPassword (theUser: User) {
    if (theUser.$dirty.password) {
      theUser.password = await Hash.make(theUser.password)    
    }
  }

  @manyToMany(() => Printer, {
    pivotTable: 'user_printers',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'printer_id',
    })
    public printers: ManyToMany<typeof Printer>;
    
}
