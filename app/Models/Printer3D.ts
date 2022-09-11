import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  ManyToMany,
  manyToMany,
  hasMany,
  HasMany} from '@ioc:Adonis/Lucid/Orm'
import Reservation from './Reservation'

enum printerType {
  Resin = 'Resin',
  Filament = 'Filament'
}

export default class Printer3D extends BaseModel {
  
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string;

  @column()
  public model:string;

  @column()
  public type:printerType;

  @column()
  beedHeight: number;

  @column()
  beedWidth: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Printer3D, {
    pivotTable: 'user_printers',
    pivotForeignKey: 'printer_id',
    pivotRelatedForeignKey: 'user_id',
    })
    public printers: ManyToMany<typeof Printer3D>;

  @hasMany(() => Reservation,{
    foreignKey: 'printer_id',
  })
  public reservations: HasMany<typeof Reservation>
}
