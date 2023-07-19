import { Table, Model, Column, DataType, BelongsToMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { FuelTypes } from 'src/fuelTypes/models/fuelTypes.model';
import { GasStationBranch } from 'src/gasStationBranch/models/gasStationBranch.model';

interface GasStationFuelTypeAttr {
  gasStationBranchId: number;
  fuelTypeId: number;
  price: number;
  isExist: boolean;
}

@Table({ tableName: 'gasStationFuelType' })
export class GasStationFuelType extends Model<
  GasStationFuelType,
  GasStationFuelTypeAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => GasStationBranch)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  gasStationBranchId: number;

  @ForeignKey(() => FuelTypes)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  fuelTypeId: number;

  @Column({
    type: DataType.DECIMAL,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  isExist: boolean;

  @BelongsTo(() => GasStationBranch)
  stationBranch: GasStationBranch;

  @BelongsTo(() => FuelTypes)
  fuelTypes: FuelTypes;
}
