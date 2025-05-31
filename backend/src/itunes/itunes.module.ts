import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItunesController } from './itunes.controller';
import { ItunesService } from './itunes.service';
import { Track } from './track.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Track])],
  controllers: [ItunesController],
  providers: [ItunesService],
})
export class ItunesModule {}
