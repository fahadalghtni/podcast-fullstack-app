import { Controller, Get, Query } from '@nestjs/common';
import { ItunesService } from './itunes.service';

@Controller('itunes')
export class ItunesController {
  constructor(private readonly itunesService: ItunesService) {}

  @Get('search')
  async search(@Query('term') term: string) {
    return this.itunesService.search(term);
  }

  @Get('all')
  async findAll() {
    return this.itunesService.findAll();
  }

  // ✅ Ping endpoint للتسخين
  @Get('ping')
  ping() {
    return { status: 'ok' };
  }
}
