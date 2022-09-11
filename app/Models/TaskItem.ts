import { DateTime } from 'luxon'
import {
  BaseModel,
  column} from '@ioc:Adonis/Lucid/Orm'

export default class TaskItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public reservation_id: number

  @column()
  public task_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
