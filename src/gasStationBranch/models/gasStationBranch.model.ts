import { Table, Model, Column, DataType, BelongsToMany, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { GasStation } from 'src/gasStation/models/gasStation.model';
import { GasStationFuelType } from 'src/gasStationFuelType/models/gasStationFuelType.model';


interface GasStationBranchAttr {
  gasStationId: number;
  branchName: string;
  address: string;
  location: string;
  phoneNumber: string;
}

@Table({ tableName: 'gasStationBranch' })
export class GasStationBranch extends Model<
  GasStationBranch,
  GasStationBranchAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => GasStation)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  gasStationId: number;

  @Column({
    type: DataType.STRING,
  })
  branchName: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  phoneNumber: string;

  @BelongsTo(() => GasStation)
  station: GasStation;

  @HasMany(() => GasStationFuelType)
  fuelTypes: GasStationFuelType[];
}
