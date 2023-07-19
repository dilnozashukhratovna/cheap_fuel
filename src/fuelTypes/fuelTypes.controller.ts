import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FuelTypesService } from './fuelTypes.service';
import { CreateFuelTypesDto } from './dto/create-fuelTypes.dto';
import { UpdateFuelTypesDto } from './dto/update-fuelTypes.dto';

@Controller('fuelTypes')
export class FuelTypesController {
  constructor(private readonly fuelTypesService: FuelTypesService) {}

  @Post('create')
  async createFuelTypes(@Body() createFuelTypesDto: CreateFuelTypesDto) {
    const fuelTypes = this.fuelTypesService.createFuelTypes(createFuelTypesDto);
    return fuelTypes;
  }

  @Get('all')
  async getAllFuelTypes() {
    return this.fuelTypesService.getAllFuelTypes();
  }

  @Get(':id')
  async getFuelTypesById(@Param('id') id: string) {
    return this.fuelTypesService.getFuelTypesById(+id);
  }

  @Delete(':id')
  async deleteFuelTypesById(@Param('id') id: string) {
    return this.fuelTypesService.deleteFuelTypesById(+id);
  }

  @Put(':id')
  async updateFuelTypes(
    @Param('id') id: string,
    @Body() updateFuelTypesDto: UpdateFuelTypesDto,
  ) {
    return this.fuelTypesService.updateFuelTypes(+id, updateFuelTypesDto);
  }
}
