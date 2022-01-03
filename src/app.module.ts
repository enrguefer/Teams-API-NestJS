import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiExceptionHandler } from './exceptions/api.exception.handler';
import { TeamsModule } from './modules/teams/teams.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    TeamsModule,
    MongooseModule.forRoot('mongodb+srv://<USER>:<PASSWORD>@cluster0.97vvi.mongodb.net/teams-api-nestjs?retryWrites=true&w=majority'),
    AutomapperModule.forRoot( { options: [{ name: 'Mapper', pluginInitializer: classes }], singular: true }),
  ],
  controllers: [],
  providers: [
    { provide: APP_FILTER, useClass: ApiExceptionHandler }
  ]
})
export class AppModule {}
