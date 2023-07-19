import { Injectable } from '@nestjs/common';
import { GasStationBranch } from './models/gasStationBranch.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGasStationBranchDto } from './dto/create-gasStationBranch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gasStationBranch.dto';

@Injectable()
export class GasStationBranchService {
  constructor(@InjectModel(GasStationBranch) private gasStationBranchRepo: typeof GasStationBranch) {}

  async createGasStationBranch(createGasStationBranchDto: CreateGasStationBranchDto): Promise<GasStationBranch> {
    const gasStationBranch = await this.gasStationBranchRepo.create(createGasStationBranchDto);
    return gasStationBranch;
  }

  async getAllGasStationBranch(): Promise<GasStationBranch[]> {
    const gasStationBranchs = await this.gasStationBranchRepo.findAll({ include: { all: true } });
    return gasStationBranchs;
  }

  async getGasStationBranchById(id: number): Promise<GasStationBranch> {
    const gasStationBranch = await this.gasStationBranchRepo.findByPk(id);
    return gasStationBranch;
  }

  async deleteGasStationBranchById(id: number) {
    const gasStationBranch = await this.gasStationBranchRepo.destroy({ where: { id } });
    return gasStationBranch;
  }

  async updateGasStationBranch(id: number, updateGasStationBranchDto: UpdateGasStationBranchDto) {
    const gasStationBranch = await this.gasStationBranchRepo.update(updateGasStationBranchDto, {
      where: { id },
      returning: true,
    });

    return gasStationBranch[1][0].dataValues;
  }
}
