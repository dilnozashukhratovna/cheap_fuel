import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelTypes } from './fuelTypes/models/fuelTypes.model';
import { FuelTypesModule } from './fuelTypes/fuelTypes.module';
import { GasStation } from './gasStation/models/gasStation.model';
import { GasStationModule } from './gasStation/gasStation.module';
import { GasStationBranch } from './gasStationBranch/models/gasStationBranch.model';
import { GasStationFuelType } from './gasStationFuelType/models/gasStationFuelType.model';
import { GasStationBranchModule } from './gasStationBranch/gasStationBranch.module';
import { GasStationFuelTypeModule } from './gasStationFuelType/gasStationFuelType.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [FuelTypes, GasStation, GasStationBranch, GasStationFuelType],
      autoLoadModels: true,
      logging: true,
    }),
    FuelTypesModule,
    GasStationModule,
    GasStationBranchModule,
    GasStationFuelTypeModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
