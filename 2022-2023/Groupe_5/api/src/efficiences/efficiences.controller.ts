import { UpdateEfficienceDto } from './dto/update-efficiences.dto';
import { CreateEfficienceDto } from './dto/create-efficiences.dto';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { EfficienceService } from './efficiences.services';
import { ApiTags } from '@nestjs/swagger';

const EFFICIENCY = 'efficiency';

@Controller(EFFICIENCY)
@ApiTags(EFFICIENCY)
export class EfficiencyController  {
  constructor(private readonly efficiencyService: EfficienceService) {}

  @Post()
  async create(@Body() dto: CreateEfficienceDto) {

    // return dto
    
    return this.efficiencyService.create(dto);
  }

  @Get()
  findAll() {
    return this.efficiencyService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseUUIDPipe) id: string) {
    return this.efficiencyService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEfficienceDto) {
    return this.efficiencyService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.efficiencyService.delete(id);
  }
}