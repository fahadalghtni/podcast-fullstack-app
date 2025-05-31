import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItunesModule } from './itunes/itunes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ItunesModule,
  ],
})
export class AppModule {}
