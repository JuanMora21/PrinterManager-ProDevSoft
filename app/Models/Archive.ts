import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
  
enum archiveVisibility {
  Public = 'Public',
  Private = 'Private'
}

export default class Archive extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string;

  @column()
  public format:string;

  @column()
  public visibility:archiveVisibility;

  @column()
  category_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Category, {foreignKey: 'category_id'})
  public category: BelongsTo<typeof Category>
}
