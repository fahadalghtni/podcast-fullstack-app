import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { ItunesModule } from './itunes/itunes.module';
import { KeepAliveService } from './keep-alive.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://podcast_fullstack_app_database_user:nByaxRjkuPWQNTxX1yowOmLEAQbjJuUw@dpg-d0tgdbs9c44c739f9hj0-a.oregon-postgres.render.com/podcast_fullstack_app_database',
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ItunesModule,
  ],
  providers: [KeepAliveService],
})
export class AppModule {}
