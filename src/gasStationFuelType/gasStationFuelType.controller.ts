import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GasStationFuelTypeService } from './gasStationFuelType.service';
import { CreateGasStationFuelTypeDto } from './dto/create-gasStationFuelType.dto';
import { UpdateGasStationFuelTypeDto } from './dto/update-gasStationFuelType.dto';

@Controller('gasStationFuelType')
export class GasStationFuelTypeController {
  constructor(private readonly gasStationFuelTypeService: GasStationFuelTypeService) {}

  @Post('create')
  async createGasStationFuelType(@Body() createGasStationFuelTypeDto: CreateGasStationFuelTypeDto) {
    const gasStationFuelType = this.gasStationFuelTypeService.createGasStationFuelType(createGasStationFuelTypeDto);
    return gasStationFuelType;
  }

  @Get('all')
  async getAllGasStationFuelType() {
    return this.gasStationFuelTypeService.getAllGasStationFuelType();
  }

  @Get(':id')
  async getGasStationFuelTypeById(@Param('id') id: string) {
    return this.gasStationFuelTypeService.getGasStationFuelTypeById(+id);
  }

  @Delete(':id')
  async deleteGasStationFuelTypeById(@Param('id') id: string) {
    return this.gasStationFuelTypeService.deleteGasStationFuelTypeById(+id);
  }

  @Put(':id')
  async updateGasStationFuelType(
    @Param('id') id: string,
    @Body() updateGasStationFuelTypeDto: UpdateGasStationFuelTypeDto,
  ) {
    return this.gasStationFuelTypeService.updateGasStationFuelType(+id, updateGasStationFuelTypeDto);
  }
}
