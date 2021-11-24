import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@localhost:27017/${process.env.DB_NAME}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
