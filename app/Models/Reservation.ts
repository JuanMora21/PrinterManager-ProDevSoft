import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo, 
  ManyToMany,
  manyToMany} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Printer3D from './Printer3D';
import Task from './Task';

  
export default class Reservation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  user_id: number;

  @column()
  printer_id: number;

  @column()
  name: string;

  @column()
  start_date: Date;

  @column()
  start_time: DateTime;

  @column()
  end_date: Date;

  @column()
  end_time: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {foreignKey: 'user_id'})
  public user: BelongsTo<typeof User>

  @belongsTo(() => Printer3D, {foreignKey: 'printer_id'})
  public printer: BelongsTo<typeof Printer3D>

  @manyToMany(() => Task, {
    pivotTable: 'task_items',
    pivotForeignKey: 'reservation_id',
    pivotRelatedForeignKey: 'task_id',
    })
    public tasks: ManyToMany<typeof Task>;
}
