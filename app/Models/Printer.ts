import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  ManyToMany,
  manyToMany,
  hasMany,
  HasMany} from '@ioc:Adonis/Lucid/Orm'
import Reservation from './Reservation'
import User from './User';

enum printerType {
  Resin = 'Resin',
  Filament = 'Filament'
}

export default class Printer extends BaseModel {
  
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string;

  @column()
  public model:string;

  @column()
  public type:printerType;

  @column()
  beed_height: number;

  @column()
  beed_width: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => User, {
    pivotTable: 'user_printers',
    pivotForeignKey: 'printer_id',
    pivotRelatedForeignKey: 'user_id',
    })
    public users: ManyToMany<typeof User>;

  @hasMany(() => Reservation,{
    foreignKey: 'printer_id',
  })
  public reservations: HasMany<typeof Reservation>
}
