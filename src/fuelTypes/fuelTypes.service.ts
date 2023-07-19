import { Injectable } from '@nestjs/common';
import { FuelTypes } from './models/fuelTypes.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFuelTypesDto } from './dto/create-fuelTypes.dto';
import { UpdateFuelTypesDto } from './dto/update-fuelTypes.dto';

@Injectable()
export class FuelTypesService {
  constructor(@InjectModel(FuelTypes) private fuelTypesRepo: typeof FuelTypes) {}

  async createFuelTypes(createFuelTypesDto: CreateFuelTypesDto): Promise<FuelTypes> {
    const fuelTypes = await this.fuelTypesRepo.create(createFuelTypesDto);
    return fuelTypes;
  }

  async getAllFuelTypes(): Promise<FuelTypes[]> {
    const fuelTypess = await this.fuelTypesRepo.findAll({ include: { all: true } });
    return fuelTypess;
  }

  async getFuelTypesById(id: number): Promise<FuelTypes> {
    const fuelTypes = await this.fuelTypesRepo.findByPk(id);
    return fuelTypes;
  }

  async deleteFuelTypesById(id: number) {
    const fuelTypes = await this.fuelTypesRepo.destroy({ where: { id } });
    return fuelTypes;
  }

  async updateFuelTypes(id: number, updateFuelTypesDto: UpdateFuelTypesDto) {
    const fuelTypes = await this.fuelTypesRepo.update(updateFuelTypesDto, {
      where: { id },
      returning: true,
    });

    return fuelTypes[1][0].dataValues;
  }
}
