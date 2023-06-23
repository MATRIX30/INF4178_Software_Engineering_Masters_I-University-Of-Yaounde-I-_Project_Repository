import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './uploads/upload';

import { getPreciseDistance } from 'geolib';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/upload/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    console.log(image);
    return res.sendFile(image, { root: './images' });
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return { response: response, me: 'Hello' };
  }

  @Post('/distance')
  async getDistance(@Body() body) {
    const { hospitalPosition, userPosition } = body;
    const result = getPreciseDistance(hospitalPosition, userPosition);
    console.log(result);
    return getPreciseDistance(hospitalPosition, userPosition);
  }
}
