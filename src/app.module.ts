import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiExceptionHandler } from './exceptions/api.exception.handler';
import { TeamsModule } from './modules/teams/teams.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { CamelCaseNamingConvention } from '@automapper/core';
import { Logger } from 'tslog';


export const LOGGER: Logger = new Logger();

@Module({
  imports: [
    TeamsModule,
    MongooseModule.forRoot('mongodb+srv://<USER>:<PASSWORD>@cluster0.97vvi.mongodb.net/teams-api-nestjs?retryWrites=true&w=majority'),
    AutomapperModule.forRoot( { options: [{ name: 'classes', pluginInitializer: classes, namingConventions: new CamelCaseNamingConvention()
  }], singular: true }),
  ],
  controllers: [],
  providers: [
    { provide: APP_FILTER, useClass: ApiExceptionHandler }
  ]
})
export class AppModule {}
