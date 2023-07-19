import { Module } from '@nestjs/common';
import { GasStationFuelTypeController } from './gasStationFuelType.controller';
import { GasStationFuelTypeService } from './gasStationFuelType.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationFuelType } from './models/gasStationFuelType.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationFuelType])],
  controllers: [GasStationFuelTypeController],
  providers: [GasStationFuelTypeService],
})
export class GasStationFuelTypeModule {}
