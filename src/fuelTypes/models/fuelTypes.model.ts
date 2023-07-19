import { Table, Model, Column, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import { GasStationFuelType } from 'src/gasStationFuelType/models/gasStationFuelType.model';

interface FuelTypesAttr {
  name: string;
}

@Table({ tableName: 'fuelTypes' })
export class FuelTypes extends Model<FuelTypes, FuelTypesAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => GasStationFuelType)
  fuelTypes: GasStationFuelType[];
}
