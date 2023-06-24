import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { CreateHospitalDto, UpdateHospitalDto } from './dto';
import { PaginateDto } from 'src/common/dto';
import { PublicRoute } from 'src/auth/decorators';
import { AHPCriteriaHospitalDto } from './dto/ahp-criterias-hostpital.dto';
import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/uploads/upload';

const HOSPITALS = 'hospitals';

@Controller(HOSPITALS)
export class HospitalsController {
  constructor(private readonly hospitalService: HospitalsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async create(@Body() dto: CreateHospitalDto, @UploadedFile() file) {
    return this.hospitalService.create(dto, file.filename);
  }

  @Get('/image/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    console.log(image);
    return res.sendFile(image, { root: './images' });
  }

  @PublicRoute()
  @Get()
  @PublicRoute()
  findAll(@Query() paginate: PaginateDto) {
    return this.hospitalService.findAll(paginate);
  }

  @PublicRoute()
  @Get('/ahp')
  @PublicRoute()
  findWithAHP(@Query() ahpCriterias: AHPCriteriaHospitalDto) {
    return this.hospitalService.findWithAhp(ahpCriterias);
  }

  @Get(':id')
  @PublicRoute()
  findOneById(@Param('id', ParseUUIDPipe) id: string) {
    return this.hospitalService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateHospitalDto) {
    return this.hospitalService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.hospitalService.delete(id);
  }
}
