import { Injectable } from '@nestjs/common';
import { GasStationFuelType } from './models/gasStationFuelType.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGasStationFuelTypeDto } from './dto/create-gasStationFuelType.dto';
import { UpdateGasStationFuelTypeDto } from './dto/update-gasStationFuelType.dto';

@Injectable()
export class GasStationFuelTypeService {
  constructor(@InjectModel(GasStationFuelType) private gasStationFuelTypeRepo: typeof GasStationFuelType) {}

  async createGasStationFuelType(createGasStationFuelTypeDto: CreateGasStationFuelTypeDto): Promise<GasStationFuelType> {
    const gasStationFuelType = await this.gasStationFuelTypeRepo.create(createGasStationFuelTypeDto);
    return gasStationFuelType;
  }

  async getAllGasStationFuelType(): Promise<GasStationFuelType[]> {
    const gasStationFuelTypes = await this.gasStationFuelTypeRepo.findAll({ include: { all: true } });
    return gasStationFuelTypes;
  }

  async getGasStationFuelTypeById(id: number): Promise<GasStationFuelType> {
    const gasStationFuelType = await this.gasStationFuelTypeRepo.findByPk(id);
    return gasStationFuelType;
  }

  async deleteGasStationFuelTypeById(id: number) {
    const gasStationFuelType = await this.gasStationFuelTypeRepo.destroy({ where: { id } });
    return gasStationFuelType;
  }

  async updateGasStationFuelType(id: number, updateGasStationFuelTypeDto: UpdateGasStationFuelTypeDto) {
    const gasStationFuelType = await this.gasStationFuelTypeRepo.update(updateGasStationFuelTypeDto, {
      where: { id },
      returning: true,
    });

    return gasStationFuelType[1][0].dataValues;
  }
}
