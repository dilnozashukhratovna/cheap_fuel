import { Table, Model, Column, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import { GasStationBranch } from 'src/gasStationBranch/models/gasStationBranch.model';

interface GasStationAttr {
  mainGasStationName: string;
}

@Table({ tableName: 'gasStation' })
export class GasStation extends Model<GasStation, GasStationAttr> {
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
  mainGasStationName: string;

  @HasMany(() => GasStationBranch)
  branches: GasStationBranch[];
}
