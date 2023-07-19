import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GasStationBranchService } from './gasStationBranch.service';
import { CreateGasStationBranchDto } from './dto/create-gasStationBranch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gasStationBranch.dto';

@Controller('gasStationBranch')
export class GasStationBranchController {
  constructor(private readonly gasStationBranchService: GasStationBranchService) {}

  @Post('create')
  async createGasStationBranch(@Body() createGasStationBranchDto: CreateGasStationBranchDto) {
    const gasStationBranch = this.gasStationBranchService.createGasStationBranch(createGasStationBranchDto);
    return gasStationBranch;
  }

  @Get('all')
  async getAllGasStationBranch() {
    return this.gasStationBranchService.getAllGasStationBranch();
  }

  @Get(':id')
  async getGasStationBranchById(@Param('id') id: string) {
    return this.gasStationBranchService.getGasStationBranchById(+id);
  }

  @Delete(':id')
  async deleteGasStationBranchById(@Param('id') id: string) {
    return this.gasStationBranchService.deleteGasStationBranchById(+id);
  }

  @Put(':id')
  async updateGasStationBranch(
    @Param('id') id: string,
    @Body() updateGasStationBranchDto: UpdateGasStationBranchDto,
  ) {
    return this.gasStationBranchService.updateGasStationBranch(+id, updateGasStationBranchDto);
  }
}
