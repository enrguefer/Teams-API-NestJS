import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiExceptionHandler } from './exceptions/api.exception.handler';
import { TeamsModule } from './modules/teams/teams.module';

@Module({
  imports: [
    TeamsModule,
    MongooseModule.forRoot('mongodb+srv://<USER>:<PASSWORD>@cluster0.97vvi.mongodb.net/teams-api-nestjs?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [
    { provide: APP_FILTER, useClass: ApiExceptionHandler }
  ]
})
export class AppModule {}
