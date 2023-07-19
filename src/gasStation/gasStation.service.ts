import { Injectable } from '@nestjs/common';
import { GasStation } from './models/gasStation.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGasStationDto } from './dto/create-gasStation.dto';
import { UpdateGasStationDto } from './dto/update-gasStation.dto';

@Injectable()
export class GasStationService {
  constructor(@InjectModel(GasStation) private gasStationRepo: typeof GasStation) {}

  async createGasStation(createGasStationDto: CreateGasStationDto): Promise<GasStation> {
    const gasStation = await this.gasStationRepo.create(createGasStationDto);
    return gasStation;
  }

  async getAllGasStation(): Promise<GasStation[]> {
    const gasStations = await this.gasStationRepo.findAll({ include: { all: true } });
    return gasStations;
  }

  async getGasStationById(id: number): Promise<GasStation> {
    const gasStation = await this.gasStationRepo.findByPk(id);
    return gasStation;
  }

  async deleteGasStationById(id: number) {
    const gasStation = await this.gasStationRepo.destroy({ where: { id } });
    return gasStation;
  }

  async updateGasStation(id: number, updateGasStationDto: UpdateGasStationDto) {
    const gasStation = await this.gasStationRepo.update(updateGasStationDto, {
      where: { id },
      returning: true,
    });

    return gasStation[1][0].dataValues;
  }
}
