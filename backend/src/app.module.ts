import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItunesModule } from './itunes/itunes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-d0tgdbs9c44c739f9hj0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'podcast_fullstack_app_database_user',
      password: 'nByaxRjkuPWQNTxX1yowOm-LEAQbjJuUw',
      database: 'podcast_fullstack_app_database',
      autoLoadEntities: true,
      synchronize: true,
      }),
    ItunesModule,
  ],
})
export class AppModule {}
