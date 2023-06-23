import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { HospitalTypesService } from './hospital-types.service';
import { CreateHospitalTypeDto } from './dto';
import { UpdateHospitalTypeDto } from './dto/update-hospital-type.dto';
import { ApiTags } from '@nestjs/swagger';

const HOSPITAL_TYPE = 'hospitaltypes';

@Controller(HOSPITAL_TYPE)
@ApiTags(HOSPITAL_TYPE)
export class HospitalTypesController {
  constructor(private readonly hospitalTypesService: HospitalTypesService) {}

  @Post()
  async create(@Body() dto: CreateHospitalTypeDto) {
    return this.hospitalTypesService.create(dto);
  }

  @Get()
  findAll() {
    return this.hospitalTypesService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseUUIDPipe) id: string) {
    return this.hospitalTypesService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateHospitalTypeDto) {
    return this.hospitalTypesService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.hospitalTypesService.delete(id);
  }
}
