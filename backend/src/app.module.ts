import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItunesModule } from './itunes/itunes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-d0tgdbs9c44c739f9hj0-a',
      port: 5432,
      username: 'podcast_fullstack_app_database_user',
      password: 'nByaxRjkuPWQNTxX1y0wOmLEAQbjJuUw',
      database: 'podcast_fullstack_app_database',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ItunesModule,
  ],
})
export class AppModule {}
