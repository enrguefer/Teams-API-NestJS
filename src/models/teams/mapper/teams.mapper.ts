import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { TeamDTO } from '../dto/teams.dto.model';
import { TeamEntity } from '../entity/teams.entity.model';
import { BaseEntity } from 'src/models/base/entity/base.entity.model';
import { BaseDTO } from 'src/models/base/dto/base.dto.model';

/**
 * Mapper para transformaciones de objetos entre los tipos TeamDTO y TeamEntity
 * 
 * @see https://nartc.me/blog/automapper-nestjs
 * @author Enrique Guerrero Fernández
 * @version 1
 */
@Injectable()
export class TeamMapper extends AutomapperProfile {

  constructor(@InjectMapper() readonly mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper : Mapper) => {

      mapper.createMap(TeamEntity, TeamDTO, {
        extends : [mapper.getMapping(BaseEntity, BaseDTO) ] })
        .forMember( dest => dest.name, mapFrom( src => src.name ) )
        .forMember( dest => dest.since, mapFrom( src => src.since ) )
        .forMember( dest => dest.stadium, mapFrom( src => src.stadium ) )

      mapper.createMap(TeamDTO, TeamEntity, {
        extends : [mapper.getMapping(BaseDTO, BaseEntity) ] })
        .forMember( dest => dest.name, mapFrom( src => src.name ) )
        .forMember( dest => dest.since, mapFrom( src => src.since ) )
        .forMember( dest => dest.stadium, mapFrom( src => src.stadium ) )

    }
  }

}