import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'categories' })
export class Category extends Model {
  @Column({ type: DataTypes.TEXT, allowNull: false })
  name: string;
}
