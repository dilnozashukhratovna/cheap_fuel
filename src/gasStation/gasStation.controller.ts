import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GasStationService } from './gasStation.service';
import { CreateGasStationDto } from './dto/create-gasStation.dto';
import { UpdateGasStationDto } from './dto/update-gasStation.dto';

@Controller('gasStation')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}

  @Post('create')
  async createGasStation(@Body() createGasStationDto: CreateGasStationDto) {
    const gasStation = this.gasStationService.createGasStation(createGasStationDto);
    return gasStation;
  }

  @Get('all')
  async getAllGasStation() {
    return this.gasStationService.getAllGasStation();
  }

  @Get(':id')
  async getGasStationById(@Param('id') id: string) {
    return this.gasStationService.getGasStationById(+id);
  }

  @Delete(':id')
  async deleteGasStationById(@Param('id') id: string) {
    return this.gasStationService.deleteGasStationById(+id);
  }

  @Put(':id')
  async updateGasStation(
    @Param('id') id: string,
    @Body() updateGasStationDto: UpdateGasStationDto,
  ) {
    return this.gasStationService.updateGasStation(+id, updateGasStationDto);
  }
}
