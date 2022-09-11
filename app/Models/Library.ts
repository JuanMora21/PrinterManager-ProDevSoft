import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  hasMany,
  HasMany} from '@ioc:Adonis/Lucid/Orm'
import Category from './Category';

export default class Library extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Category,{foreignKey: 'library_id'})
  public categories: HasMany<typeof Category>
}
