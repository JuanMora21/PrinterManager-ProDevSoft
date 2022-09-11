import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo, 
  HasMany,
  hasMany} from '@ioc:Adonis/Lucid/Orm'
import Library from './Library'
import Archive from './Archive';
export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string;

  @column()
  library_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Library, {foreignKey: 'library_id'})
  public library: BelongsTo<typeof Library>

  @hasMany(() => Archive,{foreignKey: 'category_id'})
  public archives: HasMany<typeof Archive>
}
