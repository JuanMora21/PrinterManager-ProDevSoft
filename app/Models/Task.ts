import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  HasOne,
  hasOne,
  manyToMany,
  ManyToMany} from '@ioc:Adonis/Lucid/Orm'
import Archive from './Archive';

  enum taskPriority {
    Urgent = 'Urgent',
    Important = 'Important',
    NotUrgent = 'Not Urgent',
    NotImportant = 'Not Important',
  }

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string;

  @column()
  public durationHours:number;

  @column()
  public priority:taskPriority;

  @column()
  archive_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Task, {
    pivotTable: 'task_items',
    pivotForeignKey: 'task_id',
    pivotRelatedForeignKey: 'reservation_id',
    })
    public tasks: ManyToMany<typeof Task>;

  @hasOne(() => Archive,{
    foreignKey: 'archive_id'
  })
  public archive: HasOne<typeof Archive>
}
